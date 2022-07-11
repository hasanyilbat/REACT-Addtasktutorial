import React from "react";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import EditTask from "./EditTask";
import { useState } from "react";
const ListAllTasks = ({ tutorials, deleteTutorial, editTutorial }) => {
  const [editedItem, setEditedItem] = useState("");
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
                    <div
                      className="icon1"
                      onClick={() => setEditedItem(tutor)}
                      data-bs-toggle="modal"
                      data-bs-target="#editModal"
                    >
                      <FaEdit />
                    </div>
                    <div className="icon2" onClick={() => deleteTutorial(id)}>
                      <AiFillDelete />
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditTask editTutorial={editTutorial} editedItem={editedItem} />
    </div>
  );
};

export default ListAllTasks;
