import React, { useState } from 'react';
import Document from 'react-pdf-js';

const PDFViewer = ({ pdfUrl }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const onDocumentComplete = (pages) => {
  };

  const onPageComplete = (page) => {
    console.log('Page', page, 'rendered');
  };

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <div>
        <button onClick={goToPreviousPage} disabled={currentPage <= 1}>
          Previous Page
        </button>
        <button onClick={goToNextPage}>Next Page</button>
      </div>
      <Document
        file={pdfUrl}
        page={currentPage}
        onDocumentComplete={onDocumentComplete}
        onPageComplete={onPageComplete}
      />
    </div>
  );
};

export default PDFViewer;
