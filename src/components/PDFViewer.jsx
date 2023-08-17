import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PDFViewer = ({ pdfUrl }) => {
    return (
        <div>
          <iframe src={pdfUrl} title="PDF Viewer" width="100%" height="500px" />
        </div>
      );
    };

export default PDFViewer;
