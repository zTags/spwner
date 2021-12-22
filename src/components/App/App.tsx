import "./App.css";

import CodeView from "../CodeView/CodeView";
import FileView from "../FileView/FileView";

import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <FileView />
        <CodeView editing="true"/>
        </header>
      </div>
  );
  }


}

export default App;
