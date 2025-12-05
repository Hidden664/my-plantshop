import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

export default function ProductList() {
  const products = useSelector(s => s.products.items);

  const categories = {};
  products.forEach(p => {
    categories[p.category] = categories[p.category] || [];
    categories[p.category].push(p);
  });

  return (
    <div className="products-page">
      <h2>Plants for sale</h2>

      <div className="categories">
        {Object.keys(categories).map(cat => (
          <section key={cat} className="category">
            <h3>{cat}</h3>
            <div className="grid">
              {categories[cat].map(p => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
