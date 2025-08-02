'use client';

import { useRouter } from 'next/navigation';
import { downloadPdf } from '@/utils/download';
import { useFormContext } from '@/context/FormContext';
import { FaArrowLeft, FaDownload } from 'react-icons/fa';

export default function PreviewPage() {
  const router = useRouter();
  const { data } = useFormContext();

  const isEmpty = !data.name && !data.email && !data.phone;

  if (isEmpty) {
    return (
      <div className="p-6 text-center">
        <p className="text-red-500 text-base sm:text-lg">No data available. Please fill the form first.</p>
        <button
          onClick={() => router.push('/')}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded text-base sm:text-lg w-full max-w-xs mx-auto"
        >
          Go to Form
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 p-4">
      <button
        onClick={() => router.back()}
        className="mb-4 text-black hover:text-gray-700 transition-colors"
      >
        <FaArrowLeft className="text-xl" />
      </button>

      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <span className="font-bold text-gray-800">Name:</span>
              <span className="text-gray-700 text-right">{data.name}</span>
            </div>
            
            <div className="flex justify-between items-start">
              <span className="font-bold text-gray-800">Email:</span>
              <span className="text-gray-700 text-right">{data.email}</span>
            </div>
            
            <div className="flex justify-between items-start">
              <span className="font-bold text-gray-800">Phone Number:</span>
              <span className="text-gray-700 text-right">{data.phone}</span>
            </div>
            
            <div className="flex justify-between items-start">
              <span className="font-bold text-gray-800">Position:</span>
              <span className="text-gray-700 text-right">{data.position || '-'}</span>
            </div>
            
            <div className="flex justify-between items-start space-y-2">
              <span className="font-bold text-gray-800 block">Description:</span>
              <p className="text-gray-700 text-sm leading-relaxed">
                {data.description || '-'}
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={() => downloadPdf(data)}
          className="w-full bg-gradient-to-r from-green-700 to-green-900 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-green-600 transition-all duration-200 font-medium flex items-center justify-center space-x-2"
        >
          <FaDownload className="text-sm" />
          <span>Download PDF</span>
        </button>
      </div>
    </div>
  );
}
