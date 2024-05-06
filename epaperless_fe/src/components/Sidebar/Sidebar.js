import React, { useEffect } from "react";
import useStore from "@/store";
import Header from "./Header";

const Sidebar = () => {
  const { isSidebarVisible, setInitialVisibilityState } = useStore();

  useEffect(() => {
    setInitialVisibilityState(window.innerWidth >= 1024);
  }, []);

  return (
    <aside
      className="sidebar"
      style={
        isSidebarVisible
          ? {
              display: "block",
            }
          : { display: "none" }
      }
    >
      <div className="sidebar-start">
        <Header />
        <div className="sidebar-body">
          <ul className="sidebar-body-menu">
            <li>
              <a className="active" href="/">
                <span className="icon home" aria-hidden="true" />
                Dashboard
              </a>
            </li>
            <li>
              <a className="show-cat-btn" href="/documents">
                <span className="icon document" aria-hidden="true" />
                Documents
                <span
                  className="category__btn transparent-btn"
                  title="Open list"
                >
                  <span className="sr-only">Open list</span>
                  <span className="icon arrow-down" aria-hidden="true" />
                </span>
              </a>
              <ul className="cat-sub-menu">
                <li>
                  <a href="posts.html">All Posts</a>
                </li>
                <li>
                  <a href="new-post.html">Add new post</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="show-cat-btn" href="##">
                <span className="icon folder" aria-hidden="true" />
                Categories
                <span
                  className="category__btn transparent-btn"
                  title="Open list"
                >
                  <span className="sr-only">Open list</span>
                  <span className="icon arrow-down" aria-hidden="true" />
                </span>
              </a>
              <ul className="cat-sub-menu">
                <li>
                  <a href="categories.html">All categories</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="show-cat-btn" href="##">
                <span className="icon image" aria-hidden="true" />
                Media
                <span
                  className="category__btn transparent-btn"
                  title="Open list"
                >
                  <span className="sr-only">Open list</span>
                  <span className="icon arrow-down" aria-hidden="true" />
                </span>
              </a>
              <ul className="cat-sub-menu">
                <li>
                  <a href="media-01.html">Media-01</a>
                </li>
                <li>
                  <a href="media-02.html">Media-02</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="show-cat-btn" href="##">
                <span className="icon paper" aria-hidden="true" />
                Pages
                <span
                  className="category__btn transparent-btn"
                  title="Open list"
                >
                  <span className="sr-only">Open list</span>
                  <span className="icon arrow-down" aria-hidden="true" />
                </span>
              </a>
              <ul className="cat-sub-menu">
                <li>
                  <a href="pages.html">All pages</a>
                </li>
                <li>
                  <a href="new-page.html">Add new page</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="comments.html">
                <span className="icon message" aria-hidden="true" />
                Comments
              </a>
              <span className="msg-counter">7</span>
            </li>
          </ul>
          <span className="system-menu__title">system</span>
          <ul className="sidebar-body-menu">
            <li>
              <a href="appearance.html">
                <span className="icon edit" aria-hidden="true" />
                Appearance
              </a>
            </li>
            <li>
              <a className="show-cat-btn" href="##">
                <span className="icon category" aria-hidden="true" />
                Extentions
                <span
                  className="category__btn transparent-btn"
                  title="Open list"
                >
                  <span className="sr-only">Open list</span>
                  <span className="icon arrow-down" aria-hidden="true" />
                </span>
              </a>
              <ul className="cat-sub-menu">
                <li>
                  <a href="extention-01.html">Extentions-01</a>
                </li>
                <li>
                  <a href="extention-02.html">Extentions-02</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="show-cat-btn" href="##">
                <span className="icon user-3" aria-hidden="true" />
                Users
                <span
                  className="category__btn transparent-btn"
                  title="Open list"
                >
                  <span className="sr-only">Open list</span>
                  <span className="icon arrow-down" aria-hidden="true" />
                </span>
              </a>
              <ul className="cat-sub-menu">
                <li>
                  <a href="users-01.html">Users-01</a>
                </li>
                <li>
                  <a href="users-02.html">Users-02</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="##">
                <span className="icon setting" aria-hidden="true" />
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
