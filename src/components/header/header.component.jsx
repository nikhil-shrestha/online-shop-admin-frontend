import React from 'react';

import './header.styles.scss';

export default function header() {
  return (
    <div id="header">
      <span class="header-info pull-left align-left">
        Welcome Back <strong>user</strong>!
      </span>

      <span class="header-info pull-right align-right">
        <a href="/">Store Front</a>
        &nbsp;|&nbsp;
        <a href="#">Logout</a>
      </span>

      <br class="clear" />
    </div>
  );
}
