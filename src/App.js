import React from "react";
import "./styles.css";

function Image() {
  return (
    <div className="Image">
      <img src="https://via.placeholder.com/200" alt="" />
    </div>
  );
}
function Gallery() {
  return (
    <div className="Gallery">
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
    </div>
  );
}

function Main() {
  return (
    <div className="Main">
      <Gallery />
    </div>
  );
}

function Header() {
  return <div className="Header">Aquarelles</div>;
}

export function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}
