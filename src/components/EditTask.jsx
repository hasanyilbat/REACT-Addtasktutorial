import React from "react";
import { useState, useEffect } from "react";
const EditTask = ({ editTutorial, editedItem }) => {
  const [editTitle, setEditTitle] = useState(editedItem.title);
  const [editDesc, setEditDesc] = useState(editedItem.description);
  console.log(editedItem);
  const handleSubmit = (e) => {
    e.preventDefault();
    editTutorial(editedItem.id, editTitle, editDesc);
  };

  useEffect(() => {
    setEditTitle(editedItem.title);
    setEditDesc(editedItem.description);
  }, [editedItem.title, editedItem.description]);

  return (
    <div className="modal" tabIndex="-1" id="editModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div>
              <form
                className="mt-4 text-center w-75 mx-auto"
                onSubmit={handleSubmit}
              >
                <div clasa="form-group text-center mt-3">
                  <label htmlFor="task">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="task"
                    placeholder="Task"
                    onChange={(e) => setEditTitle(e.target.value)}
                    value={editTitle}
                  />
                </div>
                <div className="form-group text-center mt-3">
                  <label htmlFor="desc">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="desc"
                    placeholder="description"
                    onChange={(e) => setEditDesc(e.target.value)}
                    value={editDesc}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary mt-3"
                  data-bs-dismiss="modal"
                >
                  Save changes
                </button>
              </form>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
