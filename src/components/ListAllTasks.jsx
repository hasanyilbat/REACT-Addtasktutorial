import React from "react";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
const ListAllTasks = ({ tutorials, deleteTutorial }) => {
  console.log(tutorials);
  return (
    <div>
      <table className="table table-striped text-center">
        <thead>
          <tr>
            <th scope="col" className="w-25">
              Id
            </th>
            <th scope="col" className="w-25">
              Title
            </th>
            <th scope="col" className="w-50">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials.map((tutor, index) => {
            const { id, title, description } = tutor;
            return (
              <tr key={index}>
                <th scope="row">{id}</th>
                <td>{title}</td>
                <td className="cont">
                  {description}
                  <div className="icons">
                    <div className="icon1">
                      {" "}
                      <FaEdit />
                    </div>
                    <div className="icon2" onClick={() => deleteTutorial(id)}>
                      {" "}
                      <AiFillDelete />
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div
        class="modal fade"
        id="edit"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListAllTasks;
