// import PostList from "../post-list";
import React from "react";
import WhatsHappening from "./whats-happening";
import TuitsList from "../tuits/TuitsList";

const HomeComponent= () => {
  return(
    <>
      <h4>Home</h4>
      <WhatsHappening/>
      <TuitsList/> 
    </>
  );
}
export default HomeComponent;