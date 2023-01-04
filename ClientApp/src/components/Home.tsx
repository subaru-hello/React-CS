import React, { Component } from "react";
import AnimalCard from "./AnimalCard";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <>
        <Link to="/todo">
          {" "}
          <h1>Todoページへ飛ぶ</h1>
        </Link>
        <AnimalCard />
        <Rating name="no-value" value={null} />
      </>
    );
  }
}
