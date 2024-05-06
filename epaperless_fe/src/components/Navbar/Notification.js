import React from "react";

const Notification = () => {
  return (
    <div className="notification-wrapper">
      <button
        className="gray-circle-btn dropdown-btn"
        title="To messages"
        type="button"
      >
        <span className="sr-only">To messages</span>
        <span className="icon notification active" aria-hidden="true" />
      </button>
      <ul className="users-item-dropdown notification-dropdown dropdown">
        <li>
          <a href="##">
            <div className="notification-dropdown-icon info">
              <i data-feather="check" />
            </div>
            <div className="notification-dropdown-text">
              <span className="notification-dropdown__title">
                System just updated
              </span>
              <span className="notification-dropdown__subtitle">
                The system has been successfully upgraded. Read more here.
              </span>
            </div>
          </a>
        </li>
        <li>
          <a href="##">
            <div className="notification-dropdown-icon danger">
              <i data-feather="info" aria-hidden="true" />
            </div>
            <div className="notification-dropdown-text">
              <span className="notification-dropdown__title">
                The cache is full!
              </span>
              <span className="notification-dropdown__subtitle">
                Unnecessary caches take up a lot of memory space and interfere
                ...
              </span>
            </div>
          </a>
        </li>
        <li>
          <a href="##">
            <div className="notification-dropdown-icon info">
              <i data-feather="check" aria-hidden="true" />
            </div>
            <div className="notification-dropdown-text">
              <span className="notification-dropdown__title">
                New Subscriber here!
              </span>
              <span className="notification-dropdown__subtitle">
                A new subscriber has subscribed.
              </span>
            </div>
          </a>
        </li>
        <li>
          <a className="link-to-page" href="##">
            Go to Notifications page
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Notification;
