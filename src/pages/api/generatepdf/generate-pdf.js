import axios from 'axios';

export default async function handler(req, res) {
    try {
        // Make a POST request to the API endpoint to generate PDF
        const { data } = await axios.post('http://localhost:3000/api/pdf', {
            htmlFilePath: './file.html', // Replace with the path to your HTML file
        }, {
            responseType: 'arraybuffer',
        });

        // Set the response headers
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=export.pdf');

        // Send the PDF as a response
        res.send(data);
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).end();
    }
}
