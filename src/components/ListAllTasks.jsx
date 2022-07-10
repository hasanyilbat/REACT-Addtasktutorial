import React from "react";

const ListAllTasks = ({ tutorials }) => {
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
                <td>{description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListAllTasks;
