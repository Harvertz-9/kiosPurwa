import { categories, products } from './data/products.js';

const parsePrice = (price = '') => {
  const numeric = Number(String(price).replace(/\D/g, ''));
  return Number.isFinite(numeric) ? numeric : 0;
};

const sanitizeProduct = ({ id, title, description, price, image, category }) => ({
  id,
  title,
  description,
  price,
  image,
  category,
});

const filterProducts = ({ category = 'Semua', priceRanges = [] } = {}) => {
  let result = products;

  if (category && category !== 'Semua') {
    result = result.filter(item => item.category === category);
  }

  if (Array.isArray(priceRanges) && priceRanges.length > 0) {
    result = result.filter(item => {
      const priceValue = parsePrice(item.price);
      return priceRanges.some(range => {
        const [minText, maxText] = String(range).split('-');
        const min = Number(minText) || 0;
        const max = maxText === 'Infinity' ? Infinity : Number(maxText) || 0;
        return priceValue >= min && priceValue <= max;
      });
    });
  }

  return result.map(sanitizeProduct);
};

const getCategories = () => categories.map(category => ({ ...category }));

window.catalogApi = window.catalogApi || {
  getCategories,
  getFilteredProducts: (filters = {}) => filterProducts(filters),
};
