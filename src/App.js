import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


import Header from "./components/header";
import Footer from "./components/footer";


import Work from "./pages/work.js";

import CodeSandbox from "./pages/work/codesandbox/";
import IBM from "./pages/work/IBM/";


import Play from "./pages/play.js";
import Photography from "./pages/photography.js";
import About from "./pages/about.js";

import "./styles.css";




export default function App() {
  return (
    <div className="App">
      <grid>
        <BrowserRouter>
          <Header></Header>


          <AnimatePresence exitBeforeEnter>
   


       
              <Route exact={true} path="/" component={Work} />

              <Route exact={true} path="/work/codesandbox" component={CodeSandbox} />
              <Route exact={true} path="/work/ibm" component={IBM} />

              <Route path="/play" component={Play} />
              <Route path="/Photography" component={Photography} />
              <Route path="/about" component={About} />
    
  
            </AnimatePresence>

          </BrowserRouter>


        <Footer></Footer>
      </grid>
    </div>
  );
}
