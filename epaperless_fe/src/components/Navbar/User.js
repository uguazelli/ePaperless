import React from "react";
import Avataricon from "@/assets/img/avatar/avatar_icon.png";

const User = () => {
  return (
    <div className="nav-user-wrapper">
      <button
        href="##"
        className="nav-user-btn dropdown-btn"
        title="My profile"
        type="button"
      >
        <span className="sr-only">My profile</span>
        <span className="nav-user-img">
          <img src={Avataricon} />
        </span>
      </button>
      <ul className="users-item-dropdown nav-user-dropdown dropdown">
        <li>
          <a href="##">
            <i data-feather="user" aria-hidden="true" />
            <span>Profile</span>
          </a>
        </li>
        <li>
          <a href="##">
            <i data-feather="settings" aria-hidden="true" />
            <span>Account settings</span>
          </a>
        </li>
        <li>
          <a className="danger" href="##">
            <i data-feather="log-out" aria-hidden="true" />
            <span>Log out</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default User;
