import React from "react";

const ListAllTasks = () => {
  return (
    <div>
      <table class="table table-striped text-center">
        <thead>
          <tr>
            <th scope="col" className="w-25">
              Id
            </th>
            <th scope="col" className="w-25">
              Task
            </th>
            <th scope="col" className="w-50">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>asdasd</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Basdadasdadsadsird</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListAllTasks;
