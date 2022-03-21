import React, { useEffect, useState } from "react";

const TestSearch = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setList(data);
      });
  }, []);
  document.title = `Search for ${text === "" ? "keyword" : text}`;
  return (
    <div>
      <h1>Search</h1>
      <div className="input-group input-group-lg">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-lg">
            Keyword
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Enter text..."
          onChange={(e) => {
            setText(e.target.value.trim());
          }}
        />
      </div>
      <div className="container-fluid">
        <div className="row">
          {text !== ""
            ? list.map((item) =>
                item.title.indexOf(text) > -1 && text !== "" ? (
                  <div
                    key={item.id}
                    className="card col-4 bg-primary text-white"
                  >
                    <p>Numer of Item {item.id}</p>
                    <div className="card-body">
                      <p className="card-text">{item.title}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-success text-white btn-outline-secondary"
                          >
                            View
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger text-white btn-outline-secondary"
                          >
                            Edit
                          </button>
                        </div>
                        <small className=" text-white">
                          User ID: {item.userId}
                        </small>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )
              )
            : list.map((item) => (
                <div key={item.id} className="card col-4 bg-primary text-white">
                  <p>Numer of Item {item.id}</p>
                  <div className="card-body">
                    <p className="card-text">{item.title}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-success text-white btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger text-white btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className=" text-white">
                        User ID: {item.userId}
                      </small>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default TestSearch;
