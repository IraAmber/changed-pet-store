import React, { useState, useEffect } from 'react';
import CategoryList from '../../components/category-list/CategoryList';
import ProductCard from '../../components/product-card/ProductCard';
import PriceFilter from '../../components/price-filter/PriceFilter';
import SortDropdown from '../../components/sort-dropdown/SortDropdown';
import SHOP_DATA from '../shop/shop.data';
import styles from './pet-store.module.scss'; // Імпорт модульних стилів
import { filterByPrice, sortByOption } from './ProductFilters'; // Імпорт функцій



const PetStorePage = () => {
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(SHOP_DATA);
  const [sortOption, setSortOption] = useState('default');

  useEffect(() => {
    const uniqueCategories = Array.from(new Set(SHOP_DATA.map(item => item.category)));
    setCategories(uniqueCategories);
  }, []);

  
  return (
    <div className="pet-store">
      <div className="categories">
        <h2>Categories</h2>
        <CategoryList categories={categories} />
      </div>
      <div className="product-list">
        <div className="filters">
          <PriceFilter applyFilter={handlePriceFilter} />
          <SortDropdown handleSort={handleSort} />
        </div>
        <div className="product-cards">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} item={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PetStorePage;
