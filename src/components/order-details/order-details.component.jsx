import React from 'react';

export default function dashboard() {
  return (
    <div id="list-account" className="content scaffold-list" role="main">
      <a
        controller="account"
        action="admin_list"
        className="btn btn-default pull-right"
        name="Back to Accounts"
      >
        Back to Accounts
      </a>

      <div
        style={{
          width: '10px',
          display: 'inline-block',
          border: 'solid 1px #fff'
        }}
        className="pull-right"
      />

      <a
        controller="account"
        action="admin_order_history"
        id="${accountInstance.id}"
        className="btn btn-default pull-right"
        name="Order History"
      >
        Order History
      </a>

      <h2>user:2&nbsp;Orders</h2>

      <p className="information secondary" style={{ marginBottom: '0px' }}>
        user's overall activity
      </p>

      <br
        className="clear"
        style={{
          display: 'inline-block',
          lineHeight: '1.0em',
          padding: '0px',
          margin: '0px'
        }}
      />

      <div id="activity-stats-container">
        <div className="activity-stats">
          <h4 className="secondary">Products Viewed</h4>

          <div style={{ margin: '30px auto 40px auto' }} className="hint">
            No Activity Data Available
          </div>
        </div>

        <div className="activity-stats">
          <h4 className="secondary">Catalogs Viewed</h4>

          <div className="hint">No Activity Data Available</div>
        </div>

        <div className="activity-stats">
          <h4 className="secondary">Pages Viewed</h4>
          <div style={{ margin: '30px auto 40px auto' }} className="hint">
            No Activity Data Available
          </div>
        </div>

        <div className="activity-stats">
          <h4 className="secondary">Searches</h4>
          <div style={{ margin: '30px auto 40px auto' }} className="hint">
            No Activity Data Available
          </div>
        </div>

        <br className="clear" />
      </div>
    </div>
  );
}
