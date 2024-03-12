import React from 'react';
import { Document, Page } from 'react-pdf';

function Pdf(pdf) {
    return (
        <Document file={pdf}>
          <Page pageNumber={1} />
        </Document>
    );
}

export default Pdf;