import React from "react";
import AddDeleteTask from "./AddDeleteTask";
import ListAllTasks from "./ListAllTasks";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";

  const getDataFromApi = async () => {
    const tutorData = await axios.get(url);
    setData(tutorData.data);
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

  console.log(data);
  return (
    <div>
      <AddDeleteTask />
      <ListAllTasks tutorials={data} />
    </div>
  );
};

export default Home;
