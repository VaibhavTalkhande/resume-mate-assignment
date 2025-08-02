'use client';

import React, { createContext, useContext, useState } from 'react';
import { FormData } from '@/lib/validation';

type FormContextType = {
  data: FormData;
  setData: (data: FormData) => void;
};

const defaultData: FormData = {
  name: '',
  email: '',
  phone: '',
  position: '',
  description: '',
};

const FormContext = createContext<FormContextType>({
  data: defaultData,
  setData: () => {},
});

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<FormData>(defaultData);

  return (
    <FormContext.Provider value={{ data, setData }}>
      {children}
    </FormContext.Provider>
  );
};
