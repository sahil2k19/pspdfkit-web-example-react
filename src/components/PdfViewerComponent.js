import { useEffect, useRef } from "react";
import { Document, Page } from 'react-pdf';

export default function PdfViewerComponent({pdfUrl}) {
  return (
    <div>
      <Document file={pdfUrl}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );}
