import React, { useEffect, useState } from "react";
import useStore from "@/store";
import { MoreButton } from "./MoreButton";

export const Table = () => {
  const {
    documentsList,
    setDocumentsList,
    EPAPERLESS_API_KEY,
    EPAPERLESS_BASE_URL,
  } = useStore();

  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${EPAPERLESS_BASE_URL}/api/objects?limit=10&offset=0`,
          {
            headers: {
              "X-API-Key": EPAPERLESS_API_KEY,
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
  }, [setDocumentsList]);
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
};
