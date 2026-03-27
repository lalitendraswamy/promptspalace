import { useState } from 'react';
import type { ChangeEvent } from 'react';

type FormValues = Record<string, string>;

/**
 * useForm - Generic form state management hook
 */
const useForm = <T extends FormValues>(initialValues: T) => {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const reset = () => setValues(initialValues);

  return { values, handleChange, reset };
};

export default useForm;
