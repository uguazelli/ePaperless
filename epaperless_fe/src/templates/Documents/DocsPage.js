import React, { useEffect, useState } from "react";
import useStore from "@/store";

const DocsPage = () => {
  const { isDarkMode, documentsList, setDocumentsList } = useStore();

  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/objects?limit=10&offset=0",
          {
            headers: {
              "X-API-Key": "5JdDbsLLgnG*pAi8t%qG6r6",
            },
          }
        );
        const data = await response.json();
        setDocumentsList(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const MoreButton = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <path
        fill={isDarkMode ? "#fff" : "#000"}
        fillOpacity={0.5}
        d="M16.34 2H7.67C4.28 2 2 4.38 2 7.92v8.17C2 19.62 4.28 22 7.67 22h8.67c3.39 0 5.66-2.38 5.66-5.91V7.92C22 4.38 19.73 2 16.34 2z"
        opacity={0.4}
      />
      <path
        fill={isDarkMode ? "#fff" : "#000"}
        fillOpacity={0.5}
        fillRule="evenodd"
        d="M7.521 10.803c-.66 0-1.198.537-1.198 1.196a1.2 1.2 0 0 0 1.198 1.198A1.2 1.2 0 0 0 8.72 12c0-.66-.537-1.197-1.198-1.197zm4.48 0c-.662 0-1.199.537-1.199 1.196A1.2 1.2 0 0 0 12 13.197 1.2 1.2 0 0 0 13.198 12c0-.66-.537-1.197-1.198-1.197zM15.28 12a1.198 1.198 0 0 1 2.397 0 1.2 1.2 0 0 1-1.198 1.198A1.2 1.2 0 0 1 15.282 12z"
        clipRule="evenodd"
      />
    </svg>
  );

  function Table() {
    return (
      <>
        {documentsList.map((item) => (
          <tr key={item.id}>
            <td>
              <label className="users-table__checkbox">
                <input type="checkbox" className="check" />
                <div className="categories-table-img">
                  <picture>
                    <source srcSet={item.thumbnail_url} type="image/jpg" />
                    <img src="./img/categories/01.jpg" alt="category" />
                  </picture>
                </div>
              </label>
            </td>
            <td>{item.doc_name}</td>
            <td>{item.tags}</td>

            <td>{new Date(item.upload_date * 1000).toLocaleDateString()}</td>

            <td>
              <span className="p-relative">
                <button
                  className="dropdown-btn transparent-btn"
                  type="button"
                  title="More info"
                  onClick={() => handleClick(item.id)}
                >
                  <MoreButton />
                </button>
                <ul
                  className={`users-item-dropdown dropdown ${
                    item.id === activeId ? "active" : ""
                  }`}
                >
                  <li>
                    <a href="##">Edit</a>
                  </li>
                  <li>
                    <a href="##">Quick edit</a>
                  </li>
                  <li>
                    <a href="##">Trash</a>
                  </li>
                </ul>
              </span>
            </td>
          </tr>
        ))}
      </>
    );
  }

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
