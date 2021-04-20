import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


import Header from "./components/header";
import Footer from "./components/footer";


import Work from "./pages/work.js";
import Play from "./pages/play.js";
import Writing from "./pages/writing.js";
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
