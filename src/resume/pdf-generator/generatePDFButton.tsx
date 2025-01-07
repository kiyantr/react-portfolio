import React from 'react';
// import html2pdf from 'html2pdf.js';

const GeneratePDFButton: React.FC = () => {

    const generatePDF = () => {
        const element = document.body;  // This will capture the whole body
        
        // You can customize the PDF generation options here
        const opt = {
            margin:       1,
            filename:     'webpage.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        // Generate the PDF
        // html2pdf().set(opt).from(element).save();
    };

    return (
        <button onClick={generatePDF}>
            Generate PDF
        </button>
    );
};

export default GeneratePDFButton;
