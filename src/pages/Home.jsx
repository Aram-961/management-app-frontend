import React from "react";
import Project from "../components/Project";
import Client from "../components/Client";
import AddClientModal from "../components/AddClientModal";
import AddProject from "../components/AddProject";

const Home = () => {
  return (
    <>
      <div className='d-flex gap-3 mb-4'>
        <AddClientModal />
        <AddProject />
      </div>
      <Project />
      <hr />
      <Client />
    </>
  );
};

export default Home;
