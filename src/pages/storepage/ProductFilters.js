import React, { useState } from 'react';

const ProductFilters = ({ products, applyFilters, applySort }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');

  const categories = Array.from(
    new Set(products.map((product) => product.categories))
  );

  const filters = [
    'age',
    'breedSize',
    'brand',
    'material',
    'packageWeight',
    'prescription',
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    applyFilters(category, selectedFilter);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    applyFilters(selectedCategory, filter);
  };

  const handleSortChange = (event) => {
    applySort(event.target.value);
  };

  return (
    <div className="product-filters">
      <div className="category-filters">
        <h4>Categories</h4>
        <ul>
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={selectedCategory === category ? 'active' : ''}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="price-filter">
        <h4>Price Filter</h4>
        {/* Додайте поле для введення параметрів ціни */}
        {/* Додайте кнопку для застосування фільтру */}
        {/* Додайте повзунок для вибору ціни */}
      </div>
      <div className="other-filters">
        <h4>Other Filters</h4>
        <ul>
          {filters.map((filter) => (
            <li
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={selectedFilter === filter ? 'active' : ''}
            >
              {filter}
            </li>
          ))}
        </ul>
      </div>
      <div className="sort">
        <h4>Sort By</h4>
        <select onChange={handleSortChange}>
          <option value="">Default</option>
          <option value="priceHighToLow">Price: High to Low</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="ratingHighToLow">Rating: High to Low</option>
          <option value="ratingLowToHigh">Rating: Low to High</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilters;
