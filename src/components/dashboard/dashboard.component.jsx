import React from 'react';

import chartData from '../../assets/images/no-chart-data.jpg';

export default function dashboard() {
  return (
    <div>
      <h1 class="dashboard pull-left">Store Overview</h1>

      <div
        id="date-selectors"
        class="pull-right align-right"
        style={{ display: 'block' }}
      >
        <form controller="admin" action="index" method="get" class="range-form">
          <span class="secondary">Date Range :&nbsp;</span>
          <input
            type="text"
            name="startDate"
            id="start-date"
            class="form-control"
            value="${startDate}"
          />
          &nbsp;
          <span class="secondary">to</span>
          &nbsp;
          <input
            type="text"
            name="endDate"
            id="end-date"
            class="form-control"
            value="${endDate}"
          />
          <a href="#" class="btn btn-default" id="refresh" title="Refresh">
            <span class="glyphicon glyphicon-refresh" />
          </a>
          <a
            controller="admin"
            action="index"
            params="[allData: true]"
            class="btn btn-default all-data"
          >
            All Data
          </a>
        </form>
      </div>

      <br class="clear" />

      <div id="refreshable-data">
        <div id="sales-stats-container">
          <div id="sales-stats" class="pull-left">
            <div class="sales-stat">
              <span class="stat">
                <span class="sales-stat-dollar secondary">Rs.</span>
                <span class="sales-stat-value">--</span>
                <span class="sales-stat-label hint">TOTAL SALES</span>
              </span>
            </div>

            <div class="sales-stat">
              <span class="stat">
                <span class="sales-stat-value">--</span>
                <span class="sales-stat-label hint">TOTAL ORDERS</span>
              </span>
            </div>

            <div class="sales-stat">
              <span class="stat">
                <span class="sales-stat-dollar secondary">Rs.</span>

                <span class="sales-stat-value">--</span>
                <span class="sales-stat-label hint">AVERAGE ORDER</span>
              </span>
            </div>

            <div class="sales-stat">
              <span class="stat">
                <span class="hint">.checkoutCarts/ .shoppingCarts</span>
                <span class="sales-stat-value">checkoutRate</span>
                <span class="sales-stat-percent secondary">%</span>
                <span class="sales-stat-label hint">CHECKOUT RATE</span>
              </span>
            </div>
          </div>

          <div id="sales-chart-container" class="pull-left">
            <img
              src={chartData}
              id="no-chart-data"
              height="260"
              width="520"
              style={{ marginLeft: '40px' }}
            />
          </div>

          <br class="clear" />
        </div>

        <br class="clear" />

        <div id="activity-stats-container">
          <div class="activity-stats">
            <h4 class="secondary">Top viewed Products</h4>

            <div class="activity-stat-list">
              <div class="activity-stat-row">
                <span class="activity-stat-title">.product</span>
                <span class="activity-stat-value">.count</span>
                <br class="clear" />
              </div>

              <div class="view-all-container">
                <a
                  href="#"
                  class="view-all"
                  data-type="products"
                  data-title="TOP VIEWED PRODUCTS"
                >
                  View All
                </a>
              </div>
              <div style={{ margin: '30px auto 40px auto' }} class="hint">
                No Data Available
              </div>
            </div>
          </div>

          <div class="activity-stats">
            <h4 class="secondary">Top viewed Pages</h4>

            <div class="activity-stat-list">
              <span class="activity-stat-title">value.page</span>
              <span class="activity-stat-value">value.count</span>
              <br class="clear" />
            </div>

            <div class="view-all-container">
              <a
                href="#"
                class="view-all"
                data-type="pages"
                data-title="TOP VIEWED PAGES"
              >
                View All
              </a>
            </div>
            <div style={{ margin: '30px auto 40px auto' }} class="hint">
              No Data Available
            </div>
          </div>
        </div>

        <div class="activity-stats last">
          <h4 class="secondary">Top Search Terms</h4>

          <div class="activity-stat-list">
            <span class="activity-stat-title">key</span>
            <span class="activity-stat-value">value.count</span>
            <br class="clear" />
          </div>
          <div class="view-all-container">
            <a
              href="#"
              class="view-all"
              data-type="searches"
              data-title="TOP SEARCH TERMS"
            >
              View All
            </a>
          </div>
          <div style={{ margin: '30px auto 40px auto' }} class="hint">
            No Data Available
          </div>
        </div>
      </div>

      <br class="clear" />

      <div class="activity-stats">
        <h4 class="secondary">Top viewed Catalogs</h4>

        <div class="activity-stat-list">
          <div class="activity-stat-row">
            <span class="activity-stat-title">catalog</span>
            <span class="activity-stat-value">.count</span>
            <br class="clear" />
          </div>
          <div class="view-all-container">
            <a
              href="javascript:"
              class="view-all"
              data-type="catalogs"
              data-title="TOP VIEWED CATALOGS"
            >
              View All
            </a>
          </div>

          <div style={{ margin: '30px auto 40px auto' }} class="hint">
            No Data Available
          </div>
        </div>
      </div>

      <div id="google-analytics-tip">
        <blockquote class="secondary">
          Greenfield leverages Google Analytics for detailed website statistics.
          If you haven’t already done so, create an account and save your
          Analytics code in{' '}
          <strong class="secondary">Settings -> Store Settings</strong> to take
          advantage of this feature
          <a href="http://www.google.com/analytics/" target="_blank">
            Visit Google Analytics
          </a>
        </blockquote>

        <br class="clear" />
      </div>
    </div>
  );
}
