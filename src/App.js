import React, { Component, Fragment } from "react";
import axios from "axios";

import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Badges from "./components/Badges";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  fetchData() {
    axios.get("ResumeData.json").then(res => {
      this.setState({
        data: res.data
      });
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { data } = this.state;

    return (
      <Fragment>
        <Nav />
        <main
          style={{
            fontFamily: "sans-serif",
            marginTop: "60px",
            overflow: "hidden"
          }}
        >
          <Home main={data.main} social={data.social} />
          <About about={data.about} />
          <Skills skills={data.skills} />
          <Projects projects={data.projects} />
          <Testimonials testimonials={data.testimonials} />
          <Badges />
        </main>
        <Footer social={data.social} />
      </Fragment>
    );
  }
}

export default App;
