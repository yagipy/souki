import React from "react";
import "./App.css";
import SampleComponent from "./SampleComponent";
import { SoukiProvider } from "souki";

function App() {
  const InitialState = {
    count: 0,
  };

  return (
    <div className="App">
      <header className="App-header">
        <SoukiProvider initialState={InitialState}>
          <SampleComponent />
        </SoukiProvider>
      </header>
    </div>
  );
}

export default App;
