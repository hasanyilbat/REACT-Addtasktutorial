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
  }, [data]);

  const addTutorial = async (tutorial) => {
    await axios.post(url, tutorial);
    // getDataFromApi();
  };

  const deleteTutorial = async (id) => {
    await axios.delete(`${url}/${id}`);
    // getDataFromApi();
  };

  return (
    <div>
      <AddDeleteTask addTutorial={addTutorial} />
      <ListAllTasks tutorials={data} deleteTutorial={deleteTutorial} />
    </div>
  );
};

export default Home;
