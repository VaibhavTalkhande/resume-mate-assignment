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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center max-w-sm">
          <p className="text-red-500 text-base mb-4">No data available. Please fill the form first.</p>
          <button
            onClick={() => router.push('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-base w-full"
          >
            Go to Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 p-4">
      <button
        onClick={() => router.back()}
        className="mb-6 text-black hover:text-gray-700 transition-colors p-2"
      >
        <FaArrowLeft className="text-2xl" />
      </button>
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
              <span className="font-bold text-gray-800 text-sm sm:text-base">Name:</span>
              <span className="text-gray-700 text-sm sm:text-base break-words">{data.name}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
              <span className="font-bold text-gray-800 text-sm sm:text-base">Email:</span>
              <span className="text-gray-700 text-sm sm:text-base break-all">{data.email}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
              <span className="font-bold text-gray-800 text-sm sm:text-base">Phone Number:</span>
              <span className="text-gray-700 text-sm sm:text-base break-words">{data.phone}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
              <span className="font-bold text-gray-800 text-sm sm:text-base">Position:</span>
              <span className="text-gray-700 text-sm sm:text-base break-words">{data.position || '-'}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
              <span className="font-bold text-gray-800 text-sm sm:text-base">Description:</span>
              <span className="text-gray-700 text-sm sm:text-base break-words">{data.description || '-'}</span>
            </div>
          </div>
        </div>
        <button
          onClick={() => downloadPdf(data)}
          className="w-full bg-gradient-to-r from-green-700 to-green-900 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-green-600 transition-all duration-200 font-medium flex items-center justify-center space-x-2"
        >
          <FaDownload className="text-lg" />
          <span>Download PDF</span>
        </button>
      </div>
    </div>
  );
}
