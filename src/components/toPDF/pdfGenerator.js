import html2pdf from 'html2pdf.js';

const generatePDF = () => {
    const element = document.querySelector('#pdfTemplate');
    const options = {
        filename: 'document.pdf',
        margin: 10,
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().from(element).set(options).save();
};

export default generatePDF;
