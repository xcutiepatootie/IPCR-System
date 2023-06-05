import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default async function savePage(req, res) {
    const { elementId } = req.body;

    try {
        const element = document.getElementById(elementId);

        if (!element) {
            return res.status(404).send('Element not found');
        }

        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        const pdfBuffer = pdf.output('arraybuffer');

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="page.pdf"');
        res.send(pdfBuffer);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error generating PDF');
    }
}
