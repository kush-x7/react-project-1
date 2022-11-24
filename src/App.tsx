import "./App.css";
import {
  Footer,
  Blog,
  Features,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";

import { Cta, Brand, Navbar } from "./components";

const App = () => {
  return (
    <div className="app">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>

      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
