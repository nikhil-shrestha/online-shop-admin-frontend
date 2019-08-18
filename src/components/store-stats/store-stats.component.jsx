import React from 'react';

export default function storeStats() {
  return (
    <div id="store-stats">
      <div class="store-stat">
        <span class="store-stat-value">5</span>
        <span class="store-stat-label secondary">Products</span>
      </div>

      <div class="store-stat">
        <span class="store-stat-value">9</span>
        <span class="store-stat-label secondary">Out of Stock</span>
      </div>

      <div class="store-stat">
        <span class="store-stat-value">2</span>
        <span class="store-stat-label secondary">Special Product</span>
      </div>

      <div class="store-stat">
        <span class="store-stat-value">3</span>
        <span class="store-stat-label secondary">Catalogs</span>
      </div>

      <div class="store-stat">
        <span class="store-stat-value">10</span>
        <span class="store-stat-label secondary">Customers</span>
      </div>

      <div class="store-stat">
        <span class="store-stat-value">2</span>
        <span class="store-stat-label secondary">Abandoned Carts</span>
      </div>
    </div>
  );
}
