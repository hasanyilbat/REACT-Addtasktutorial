import React from "react";
import AddDeleteTask from "./AddDeleteTask";
import ListAllTasks from "./ListAllTasks";

const Home = () => {
  return (
    <div>
      <AddDeleteTask />
      <ListAllTasks />
    </div>
  );
};

export default Home;
