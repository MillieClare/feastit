import React from "react";

import "./App.css";
import FilterSuppliers from "./components/FetchSuppliers/FetchSuppliers";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FilterSuppliers />
      </header>
    </div>
  );
}

export default App;
