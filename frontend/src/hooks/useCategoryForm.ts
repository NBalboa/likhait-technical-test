import React, { useState } from "react";
import { CategoryFormData } from "../types";

interface UseCategoryFormProps {
  initialData?: Partial<CategoryFormData>;
  onSubmit: (data: CategoryFormData) => Promise<void>;
}

export function useCategoryForm({ initialData, onSubmit }: UseCategoryFormProps) {

  const [formData, setFormData] = useState<CategoryFormData>({
    name: initialData?.name || ""
  })

  const [errors, setErrors] = useState<Partial<CategoryFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof CategoryFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<CategoryFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required."
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      resetForm()
      resetError()
    } catch (error) {
      const newErrors: Partial<CategoryFormData> = {};
      newErrors.name = "Duplicate Category name";
      setErrors(newErrors);
      console.error("Form Submission Error: ", error);
    }
    finally {
      setIsSubmitting(false);
    }

  }

  const resetForm = () => {
    setFormData({
      name: ""
    });
  }

  const resetError = () => {
    setErrors({
      name: ""
    })
  }

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  }

}