import React from 'react';
import './App.css';
import PDFViewer from './components/PDFViewer';
const document = 's.pdf'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PDF Viewer App</h1>
        <PDFViewer pdfUrl={document} />
      </header>
    </div>
  );
}

export default App;
