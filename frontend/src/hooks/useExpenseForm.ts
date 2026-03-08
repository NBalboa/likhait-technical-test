/**
 * Custom hook for managing expense form state and validation
 */

import { useState } from "react";
import { formatDate } from "../utils/expenseUtils";
import { removeTime } from "../utils/dateUtils";
import { extractErrorMessages } from "../utils/expenseErrorUtils";
import { ExpenseErrorCode, ExpenseFormData } from "../types/expenseTypes";

interface UseExpenseFormProps {
  initialData?: Partial<ExpenseFormData>;
  onSubmit: (data: ExpenseFormData) => Promise<void>;
}

export function useExpenseForm({ initialData, onSubmit }: UseExpenseFormProps) {
  const [formData, setFormData] = useState<ExpenseFormData>({
    amount: initialData?.amount || "",
    description: initialData?.description || "",
    category: initialData?.category || "",
    date: initialData?.date || formatDate(new Date()),
  });

  const [errors, setErrors] = useState<Partial<ExpenseFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof ExpenseFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const errorsCodes: ExpenseErrorCode[] = [];

    if (!formData.amount || Number(formData.amount) <= 0) {
      errorsCodes.push("AMOUNT_NON_POSITIVE");
    }

    if (!formData.description.trim()) {
      errorsCodes.push("DESCRIPTION_MISSING")
    }

    if (!formData.category) {
      errorsCodes.push("CATEGORY_ID_MISSING");
    }

    const currentData = removeTime(new Date());
    const date = removeTime(new Date(formData.date));

    if (date > currentData) {
      errorsCodes.push("DATE_FUTURE");
    }

    const newErrors = extractErrorMessages(errorsCodes);

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      // Reset form on success
      resetForm();
    } catch (error) {
      const newErrors = extractErrorMessages(error as ExpenseErrorCode[]);
      setErrors(newErrors);
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      amount: initialData?.amount || "",
      description: initialData?.description || "",
      category: initialData?.category || "",
      date: initialData?.date || formatDate(new Date()),
    });
    setErrors({});
  };

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm,
  };
}
