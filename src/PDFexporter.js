// import { useRef } from 'react';
// import jsPDF from 'jspdf';
// import Diplom from './DiplomPage';

// function PDFexporter() {
//     const reportTemplateRef = useRef(null);

// 	const handleGeneratePdf = () => {
// 		const doc = new jsPDF({
// 			format: 'a4',
// 			unit: 'px',
// 		});

// 		// Adding the fonts.
// 		doc.setFont('Inter-Regular', 'normal');

// 		doc.html(reportTemplateRef.current, {
// 			async callback(doc) {
// 				await doc.save('document');
// 			},
// 		});
// 	};
// }

// export default PDFexporter;
