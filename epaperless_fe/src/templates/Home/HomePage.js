import React from "react";
import FilesDropZone from "@/components/FilesDropZone";
import useStore from "@/store";

const HomePage = () => {
  const { sin, tags, meta, setSin, setTags, setMeta } = useStore();

  return (
    <main className="main users chart-page" id="skip-target">
      <div className="container">
        <h2 className="main-title">Home</h2>

        <div className="row">
          <div className="col-lg-8">
            <FilesDropZone />
          </div>

          <div className="col-lg-4">
            <article className="white-block">
              <div className="top-cat-title">
                <h3>Properties</h3>
              </div>
              <ul className="top-cat-list">
                <li>
                  <a href="##">
                    <div className="top-cat-list__title">SIN</div>
                    <div className="top-cat-list__subtitle">
                      <input
                        type="text"
                        placeholder="ABC1234"
                        style={{ width: "100%" }}
                        value={sin}
                        onChange={(event) => setSin(event.target.value)}
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="##">
                    <div className="top-cat-list__title">Tags</div>
                    <div className="top-cat-list__subtitle">
                      <input
                        type="text"
                        placeholder="e.g., tag1, tag2"
                        style={{ width: "100%" }}
                        value={tags}
                        onChange={(event) => setTags(event.target.value)}
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="##">
                    <div className="top-cat-list__title">Metada</div>
                    <div className="top-cat-list__subtitle">
                      <input
                        type="text"
                        placeholder="e.g., key1:value1, key2:value2"
                        style={{ width: "100%" }}
                        value={meta}
                        onChange={(event) => setMeta(event.target.value)}
                      />
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

export default HomePage;
