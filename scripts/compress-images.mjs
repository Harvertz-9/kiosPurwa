/**
 * Script Kompresi Gambar Kios Purwa
 * ----------------------------------
 * - Kompres semua gambar (PNG & JPG) TANPA mengubah resolusi
 * - PNG foto → dikonversi ke JPG (quality 85%) karena PNG untuk foto sangat boros
 * - JPG → dikompres ulang (quality 82%)
 * - File asli TIDAK dihapus, hasil kompres disimpan di folder `compressed/`
 *   kemudian menggantikan file asli setelah konfirmasi
 * 
 * Cara pakai: node scripts/compress-images.mjs
 */

import sharp from 'sharp';
import { readdir, stat, mkdir, copyFile, rename, unlink } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');

// Konfigurasi
const CONFIG = {
    jpgQuality: 82,        // Quality untuk JPG (80-85 recommended)
    pngToJpgQuality: 85,   // Quality saat konversi PNG → JPG
    mozjpeg: true,          // Gunakan mozjpeg encoder (lebih kecil ~5-10%)
    directories: [
        join(PROJECT_ROOT, 'public/images/catalog'),
        join(PROJECT_ROOT, 'public/images/catalog/web/web'),
        join(PROJECT_ROOT, 'public/images/about'),
    ]
};

// Warna untuk terminal output
const color = {
    green: (t) => `\x1b[32m${t}\x1b[0m`,
    red: (t) => `\x1b[31m${t}\x1b[0m`,
    yellow: (t) => `\x1b[33m${t}\x1b[0m`,
    cyan: (t) => `\x1b[36m${t}\x1b[0m`,
    dim: (t) => `\x1b[2m${t}\x1b[0m`,
    bold: (t) => `\x1b[1m${t}\x1b[0m`,
};

function formatBytes(bytes) {
    if (bytes === 0) return '0 B';
    const units = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + units[i];
}

function percentReduction(original, compressed) {
    return ((1 - compressed / original) * 100).toFixed(1);
}

async function getImageFiles(dir) {
    try {
        const entries = await readdir(dir);
        const imageFiles = [];

        for (const entry of entries) {
            const fullPath = join(dir, entry);
            const s = await stat(fullPath);
            if (s.isFile()) {
                const ext = extname(entry).toLowerCase();
                if (['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
                    imageFiles.push({
                        path: fullPath,
                        name: entry,
                        ext,
                        size: s.size,
                    });
                }
            }
        }

        return imageFiles;
    } catch {
        return [];
    }
}

async function compressImage(file) {
    const isPng = file.ext === '.png';

    try {
        // Baca metadata dulu untuk cek resolusi
        const metadata = await sharp(file.path).metadata();
        const { width, height } = metadata;

        let outputBuffer;
        let outputExt = file.ext;

        if (isPng) {
            // PNG foto → konversi ke JPG (hemat BANYAK ruang)
            outputBuffer = await sharp(file.path)
                .jpeg({
                    quality: CONFIG.pngToJpgQuality,
                    mozjpeg: CONFIG.mozjpeg,
                })
                .toBuffer();
            outputExt = '.jpg';
        } else {
            // JPG → kompres ulang
            outputBuffer = await sharp(file.path)
                .jpeg({
                    quality: CONFIG.jpgQuality,
                    mozjpeg: CONFIG.mozjpeg,
                })
                .toBuffer();
        }

        // Verifikasi resolusi tidak berubah
        const compressedMeta = await sharp(outputBuffer).metadata();
        if (compressedMeta.width !== width || compressedMeta.height !== height) {
            console.log(color.red(`  ✗ ${file.name} - Resolusi berubah! Dilewati.`));
            return null;
        }

        const compressedSize = outputBuffer.length;
        const reduction = percentReduction(file.size, compressedSize);

        // Hanya simpan jika ukuran lebih kecil
        if (compressedSize >= file.size) {
            console.log(color.dim(`  ○ ${file.name} - Sudah optimal (${formatBytes(file.size)})`));
            return null;
        }

        // Tentukan nama file output
        const outputName = isPng
            ? basename(file.name, file.ext) + '.jpg'
            : file.name;
        const outputPath = join(dirname(file.path), outputName);

        return {
            originalPath: file.path,
            outputPath,
            outputBuffer,
            originalSize: file.size,
            compressedSize,
            reduction,
            width,
            height,
            converted: isPng,
            originalName: file.name,
            outputName,
        };
    } catch (err) {
        console.log(color.red(`  ✗ ${file.name} - Error: ${err.message}`));
        return null;
    }
}

async function main() {
    console.log('');
    console.log(color.bold('🖼️  Kios Purwa - Image Compressor'));
    console.log(color.dim('   Kompres gambar tanpa mengubah resolusi'));
    console.log('');

    let totalOriginal = 0;
    let totalCompressed = 0;
    let totalFiles = 0;
    let convertedFiles = 0;
    const allResults = [];

    for (const dir of CONFIG.directories) {
        const files = await getImageFiles(dir);
        if (files.length === 0) continue;

        const relDir = dir.replace(PROJECT_ROOT, '.');
        console.log(color.cyan(`📁 ${relDir}`));
        console.log(color.dim(`   ${files.length} gambar ditemukan`));
        console.log('');

        for (const file of files) {
            const result = await compressImage(file);
            if (result) {
                allResults.push(result);
                totalOriginal += result.originalSize;
                totalCompressed += result.compressedSize;
                totalFiles++;
                if (result.converted) convertedFiles++;

                const arrow = result.converted
                    ? color.yellow(`PNG→JPG`)
                    : color.green(`JPG→JPG`);

                console.log(
                    `  ✓ ${result.originalName} ${arrow} ` +
                    `${formatBytes(result.originalSize)} → ${color.green(formatBytes(result.compressedSize))} ` +
                    color.green(`(-${result.reduction}%) `) +
                    color.dim(`[${result.width}×${result.height}]`)
                );
            }
        }
        console.log('');
    }

    if (allResults.length === 0) {
        console.log(color.yellow('Tidak ada gambar yang perlu dikompres.'));
        return;
    }

    // Ringkasan
    console.log(color.bold('━'.repeat(50)));
    console.log(color.bold('📊 Ringkasan:'));
    console.log(`   File yang bisa dikompres : ${color.bold(totalFiles)}`);
    console.log(`   File PNG → JPG           : ${color.bold(convertedFiles)}`);
    console.log(`   Total sebelum             : ${color.bold(formatBytes(totalOriginal))}`);
    console.log(`   Total sesudah             : ${color.green(formatBytes(totalCompressed))}`);
    console.log(`   Total hemat               : ${color.green(formatBytes(totalOriginal - totalCompressed))} (${color.green(percentReduction(totalOriginal, totalCompressed) + '%')})`);
    console.log(color.bold('━'.repeat(50)));
    console.log('');

    // Tanya konfirmasi
    const readline = await import('readline');
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    
    const answer = await new Promise((resolve) => {
        rl.question(
            color.yellow('⚠️  Terapkan kompresi? File asli akan di-backup ke folder backup/\n') +
            color.bold('   Ketik "ya" untuk lanjut: '),
            resolve
        );
    });
    rl.close();

    if (answer.trim().toLowerCase() !== 'ya') {
        console.log(color.red('\n❌ Dibatalkan.'));
        return;
    }

    console.log('');
    console.log(color.cyan('💾 Menerapkan kompresi...'));

    // Buat folder backup
    const backupDir = join(PROJECT_ROOT, 'backup-images-' + Date.now());
    await mkdir(backupDir, { recursive: true });

    for (const result of allResults) {
        // Backup file asli
        const backupPath = join(backupDir, basename(result.originalPath));
        await copyFile(result.originalPath, backupPath);

        // Tulis file hasil kompresi
        await sharp(result.outputBuffer).toFile(result.outputPath);

        // Jika PNG dikonversi ke JPG, hapus file PNG asli
        if (result.converted && result.originalPath !== result.outputPath) {
            await unlink(result.originalPath);
        }

        console.log(color.green(`  ✓ ${result.outputName}`));
    }

    console.log('');
    console.log(color.green('✅ Selesai!'));
    console.log(color.dim(`   Backup disimpan di: ${backupDir}`));
    
    if (convertedFiles > 0) {
        console.log('');
        console.log(color.yellow('⚠️  PENTING: Ada file PNG yang dikonversi ke JPG!'));
        console.log(color.yellow('   Kamu perlu update path di products.js:'));
        console.log(color.yellow('   Ganti .png → .jpg untuk file yang dikonversi.'));
    }
}

main().catch(console.error);
