import React from "react";
import Stories from "./HomeStories";
import "./Home.scoped.css";

export default class Home extends React.Component {
  render() {
    return (
      <section className="home">
        {/* <h1>Home</h1> */}
        <Stories />
      </section>
    );
  }
}
