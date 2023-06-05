import React, { useEffect } from 'react';

// Dynamically import html2pdf on the client-side
const loadHTML2PDF = () => import('html2pdf');

const MyComponent = () => {
    useEffect(() => {
        const generatePDF = async () => {
            // Load html2pdf dynamically when the component mounts
            const html2pdf = await loadHTML2PDF();

            // Example usage of html2pdf
            html2pdf().from('<h1>Hello, World!</h1>').save();
        };

        generatePDF();
    }, []);

    return (
        <div>
            {/* Component content */}
        </div>
    );
};

export default MyComponent;