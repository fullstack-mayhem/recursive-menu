import React from 'react';

import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./Menu";
import data from "./menu.json";

function App() {
  return (
    <Router>
      <>
        <Menu menu={data} />
      </>
    </Router>
  );
}

export default App;
