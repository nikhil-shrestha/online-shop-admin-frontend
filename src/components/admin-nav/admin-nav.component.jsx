import React from 'react';

import './admin-nav.styles.scss';

export default function adminNav() {
  return (
    <div id="admin-nav-container">
      <div id="admin-marker" />

      <ul id="admin-nav">
        <li>
          <a herf="/admin">Dashboard</a>
        </li>
        <li>
          <a herf="/product/list">Products</a>
        </li>
        <li>
          <a herf="/catalog/list">Catalogs</a>
        </li>
        <li>
          <a herf="/transaction/list">Orders</a>
        </li>
        <li>
          <a herf="/account/customer_list">Accounts</a>
        </li>
        <li>
          <a herf="/configuration/social_settings">Settings</a>
        </li>
      </ul>
    </div>
  );
}
