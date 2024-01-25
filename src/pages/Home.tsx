import React from "react";
import Header from "../components/Header";
import "../style/home.css"

class Home extends React.Component {
  render() {
    return (
      <main>
        <div className="div-header">
          <Header />
        </div>  
        <div className="background-image"></div>
      </main>
    );
  }
}

export default Home;