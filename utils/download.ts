import jsPDF from 'jspdf';
import { FormData } from '@/lib/validation';

export function downloadPdf(data: FormData) {
  try {
    const doc = new jsPDF();
    
    const margin = 20;
    const startY = 30;
    const lineHeight = 8;
    let currentY = startY;
  
    doc.setFont('helvetica', 'bold');
    doc.text('Name:', margin, currentY);
    doc.setFont('helvetica', 'normal');
    doc.text(data.name, margin + 50, currentY);
    currentY += lineHeight;
    
    doc.setFont('helvetica', 'bold');
    doc.text('Email:', margin, currentY);
    doc.setFont('helvetica', 'normal');
    doc.text(data.email, margin + 50, currentY);
    currentY += lineHeight;
    
    doc.setFont('helvetica', 'bold');
    doc.text('Phone Number:', margin, currentY);
    doc.setFont('helvetica', 'normal');
    doc.text(data.phone, margin + 50, currentY);
    currentY += lineHeight;
    
    doc.setFont('helvetica', 'bold');
    doc.text('Position:', margin, currentY);
    doc.setFont('helvetica', 'normal');
    doc.text(data.position || '-', margin + 50, currentY);
    currentY += lineHeight;
    
    doc.setFont('helvetica', 'bold');
    doc.text('Description:', margin, currentY);
    doc.setFont('helvetica', 'normal');
    doc.text(data.description || '-', margin + 50, currentY);
    doc.save(`${data.name || 'user-details'}.pdf`);
  } catch (error) {
    console.error('PDF Download Error:', error);
  }
}
