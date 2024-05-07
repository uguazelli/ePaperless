import React, { useState } from "react";
import FilesDropZone from "./FilesDropZone";
import useStore from "@/store";

const HomePage = () => {
  const { sin, tags, meta, setSin, setTags, setMeta } = useStore();
  const [tagsWarning, setTagsWarning] = useState("");
  const [metaWarning, setMetaWarning] = useState("");

  const handleTagsChange = (event) => {
    const tagsValue = event.target.value;
    const tagsRegex = /^[a-zA-Z0-9, ]*$/;

    if (tagsRegex.test(tagsValue)) {
      setTags(tagsValue);
      setTagsWarning("");
    } else {
      setTagsWarning("Tags should be strings separated by commas");
    }
  };

  const handleMetaChange = (event) => {
    const metaValue = event.target.value;
    const metaRegex = /^([a-zA-Z0-9]+:[a-zA-Z0-9]+,?\s?)*$/;

    setMeta(metaValue); // Update the meta state with the new value

    if (metaRegex.test(metaValue)) {
      setMetaWarning("");
    } else {
      setMetaWarning(
        "Meta should follow the format: string:string, string:string"
      );
    }
  };

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
                        onChange={handleTagsChange}
                      />
                      {tagsWarning && (
                        <div style={{ color: "red" }}>{tagsWarning}</div>
                      )}
                    </div>
                  </a>
                </li>
                <li>
                  <a href="##">
                    <div className="top-cat-list__title">Metadata</div>
                    <div className="top-cat-list__subtitle">
                      <input
                        type="text"
                        placeholder="e.g., key1:value1, key2:value2"
                        style={{ width: "100%" }}
                        value={meta}
                        onChange={handleMetaChange}
                      />
                      {metaWarning && (
                        <div style={{ color: "red" }}>{metaWarning}</div>
                      )}
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
