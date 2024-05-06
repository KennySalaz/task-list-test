import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <div className="container-list center-home">
        <Link className="btn btn-task fade-in" to={"/task"}>
          Tasks
        </Link>
        <Link className="btn btn-task fade-in" to={"/list"}>
          List
        </Link>
      </div>
    </div>
  );
}
