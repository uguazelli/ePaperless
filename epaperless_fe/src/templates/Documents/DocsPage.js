import React, { useEffect, useState } from "react";

import { Table } from "./Table";

const DocsPage = () => {
  return (
    <main className="main users chart-page" id="skip-target">
      <div className="container">
        <h2 className="main-title">Dashboard</h2>
        <div className="row stat-cards">
          <div className="col-md-6 col-xl-3">
            <article className="stat-cards-item">
              <div className="stat-cards-icon primary">
                <i data-feather="bar-chart-2" aria-hidden="true" />
              </div>
              <div className="stat-cards-info">
                <p className="stat-cards-info__num">1478 286</p>
                <p className="stat-cards-info__title">Total visits</p>
                <p className="stat-cards-info__progress">
                  <span className="stat-cards-info__profit success">
                    <i data-feather="trending-up" aria-hidden="true" />
                    4.07%
                  </span>
                  Last month
                </p>
              </div>
            </article>
          </div>
          <div className="col-md-6 col-xl-3">
            <article className="stat-cards-item">
              <div className="stat-cards-icon warning">
                <i data-feather="file" aria-hidden="true" />
              </div>
              <div className="stat-cards-info">
                <p className="stat-cards-info__num">1478 286</p>
                <p className="stat-cards-info__title">Total visits</p>
                <p className="stat-cards-info__progress">
                  <span className="stat-cards-info__profit success">
                    <i data-feather="trending-up" aria-hidden="true" />
                    0.24%
                  </span>
                  Last month
                </p>
              </div>
            </article>
          </div>
          <div className="col-md-6 col-xl-3">
            <article className="stat-cards-item">
              <div className="stat-cards-icon purple">
                <i data-feather="file" aria-hidden="true" />
              </div>
              <div className="stat-cards-info">
                <p className="stat-cards-info__num">1478 286</p>
                <p className="stat-cards-info__title">Total visits</p>
                <p className="stat-cards-info__progress">
                  <span className="stat-cards-info__profit danger">
                    <i data-feather="trending-down" aria-hidden="true" />
                    1.64%
                  </span>
                  Last month
                </p>
              </div>
            </article>
          </div>
          <div className="col-md-6 col-xl-3">
            <article className="stat-cards-item">
              <div className="stat-cards-icon success">
                <i data-feather="feather" aria-hidden="true" />
              </div>
              <div className="stat-cards-info">
                <p className="stat-cards-info__num">1478 286</p>
                <p className="stat-cards-info__title">Total visits</p>
                <p className="stat-cards-info__progress">
                  <span className="stat-cards-info__profit warning">
                    <i data-feather="trending-up" aria-hidden="true" />
                    0.00%
                  </span>
                  Last month
                </p>
              </div>
            </article>
          </div>
        </div>

        <div className="row">
          <div className="users-table table-wrapper">
            <table className="posts-table">
              <thead>
                <tr className="users-table-info">
                  <th>
                    <label className="users-table__checkbox ms-20">
                      <input type="checkbox" className="check-all" />
                      Thumbnail
                    </label>
                  </th>
                  <th>Title</th>
                  <th>Tags</th>
                  <th>Upload Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <Table />
              </tbody>
            </table>
          </div>

          <div className="col-lg-3">
            <article className="white-block">
              <div className="top-cat-title">
                <h3>Top categories</h3>
                <p>28 Categories, 1400 Posts</p>
              </div>
              <ul className="top-cat-list">
                <li>
                  <a href="##">
                    <div className="top-cat-list__title">
                      Lifestyle <span>8.2k</span>
                    </div>
                    <div className="top-cat-list__subtitle">
                      Dailiy lifestyle articles{" "}
                      <span className="purple">+472</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="##">
                    <div className="top-cat-list__title">
                      Tutorials <span>8.2k</span>
                    </div>
                    <div className="top-cat-list__subtitle">
                      Coding tutorials <span className="blue">+472</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="##">
                    <div className="top-cat-list__title">
                      Technology <span>8.2k</span>
                    </div>
                    <div className="top-cat-list__subtitle">
                      Dailiy technology articles{" "}
                      <span className="danger">+472</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="##">
                    <div className="top-cat-list__title">
                      UX design <span>8.2k</span>
                    </div>
                    <div className="top-cat-list__subtitle">
                      UX design tips <span className="success">+472</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="##">
                    <div className="top-cat-list__title">
                      Interaction tips <span>8.2k</span>
                    </div>
                    <div className="top-cat-list__subtitle">
                      Interaction articles <span className="warning">+472</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="##">
                    <div className="top-cat-list__title">
                      App development <span>8.2k</span>
                    </div>
                    <div className="top-cat-list__subtitle">
                      Mobile development articles{" "}
                      <span className="warning">+472</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="##">
                    <div className="top-cat-list__title">
                      Nature <span>8.2k</span>
                    </div>
                    <div className="top-cat-list__subtitle">
                      Wildlife animal articles{" "}
                      <span className="warning">+472</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="##">
                    <div className="top-cat-list__title">
                      Geography <span>8.2k</span>
                    </div>
                    <div className="top-cat-list__subtitle">
                      Geography articles <span className="primary">+472</span>
                    </div>
                  </a>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DocsPage;
