import { useEffect, useState } from "react";
import PdfViewerComponent from "./components/PdfViewerComponent";
import "./App.css";
import axios from 'axios'
import PDFViewer from "./components/PDFViewer";
function App() {
  const pdfUrl = 'http://ignou.ac.in/userfiles/Common-Prospectus-English.pdf';

  return (
    <div>
      <h1>PDF Viewer</h1>
      <PDFViewer pdfUrl={pdfUrl} />
    </div>
  );
}

export default App;
