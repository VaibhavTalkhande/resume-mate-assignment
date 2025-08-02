'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, FormData } from '@/lib/validation';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { downloadPdf } from '@/utils/download';
import { useFormContext } from '@/context/FormContext';
import { FaUser, FaEnvelope, FaPhone, FaBriefcase, FaFileAlt, FaDownload } from 'react-icons/fa';

export default function UserForm() {
  const router = useRouter();
  const { data, setData } = useFormContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: data,
  });

  const [formData, setFormData] = useState<FormData | null>(null);

  useEffect(() => {
    reset(data);
    setFormData(data);
  }, [data, reset]);

  const onSubmit = (formData: FormData) => {
    setData(formData);
    router.push('/preview');
  };

  const handleViewPDF = (formData: FormData) => {
    setData(formData);
    router.push('/preview');
  };

  const handleDownload = (formData: FormData) => {
    downloadPdf(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h1 className="text-xl font-bold text-center mb-6 text-gray-800">Add Your Details</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-3">
              <FaUser className="text-gray-500 text-base" />
              <label className="text-sm font-medium text-gray-700">Name</label>
            </div>
            <input
              {...register('name')}
              placeholder="e.g. John Doe"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-1">
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-gray-500 text-base" />
              <label className="text-sm font-medium text-gray-700">Email</label>
            </div>
            <input
              {...register('email')}
              placeholder="e.g. Johndoe@gmail.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-1">
            <div className="flex items-center space-x-3">
              <FaPhone className="text-gray-500 text-base" />
              <label className="text-sm font-medium text-gray-700">Phone Number</label>
            </div>
            <input
              {...register('phone')}
              placeholder="e.g. (220) 222-20002"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>
          <div className="space-y-1">
            <div className="flex items-center space-x-3">
              <FaBriefcase className="text-gray-500 text-base" />
              <label className="text-sm font-medium text-gray-700">Position</label>
            </div>
            <input
              {...register('position')}
              placeholder="e.g. Junior Front end Developer"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="space-y-1">
            <div className="flex items-center space-x-3">
              <FaFileAlt className="text-gray-500 text-base" />
              <label className="text-sm font-medium text-gray-700">Description</label>
            </div>
            <textarea
              {...register('description')}
              placeholder="e.g. Work expriences"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              rows={3}
            />
          </div>
          <div className="flex gap-4 pt-2">
            <button
              type="button"
              onClick={handleSubmit(handleViewPDF)}
              className=" cursor-pointer flex-1 px-4 py-2 bg-gradient-to-r from-green-700 to-green-900 text-white rounded-lg hover:from-green-700 hover:to-green-600 transition-all duration-200 font-medium"
            >
              View PDF
            </button>
            <button
              type="button"
              onClick={handleSubmit(handleDownload)}
              className="cursor-pointer flex-1 px-4 py-2 bg-gradient-to-r from-green-700 to-green-900 text-white rounded-lg hover:from-green-700 hover:to-green-600 transition-all duration-200 font-medium flex items-center justify-center space-x-2"
            >
              <FaDownload className="text-sm" />
              <span>Download PDF</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
