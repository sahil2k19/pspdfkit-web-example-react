import { useState } from "react";
import PdfViewerComponent from "./components/PdfViewerComponent";
import "./App.css";

function App() {
  const [document, setDocument] = useState("s.pdf");


  return (
    <div className="App">
     
      <div style={{
        width:"50vw",
        height:'50vh'
      }} className="App-viewer">
        <PdfViewerComponent document={document} />
      </div>
    </div>
  );
}

export default App;
