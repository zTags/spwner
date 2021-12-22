import "./App.css";

import CodeView from "../CodeView/CodeView";
import FileView from "../FileView/FileView";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <FileView />
      <CodeView />
      </header>
    </div>
  );
}

export default App;
