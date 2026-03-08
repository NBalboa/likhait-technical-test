import React from 'react'
import { CategoryFormData } from '../types';
import { Button, TextField } from '../vibes';
import { useCategoryForm } from '../hooks/useCategoryForm';

interface CategoryFormProps {
  initialData?: Partial<CategoryFormData>;
  onSubmit: (data: CategoryFormData) => Promise<void>;
  onCancel?: () => void;
  submitLabel?: string;
}

export function CategoryForm({
  onSubmit,
  initialData,
  onCancel,
  submitLabel = "Add Category",
}: CategoryFormProps) {

  const { formData, errors, handleChange, handleSubmit, isSubmitting
  } = useCategoryForm({
    initialData,
    onSubmit
  })

  const formStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };

  const buttonGroupStyle: React.CSSProperties = {
    display: "flex",
    gap: "0.5rem",
    marginTop: "0.5rem",
  };

  return <form style={formStyle} onSubmit={handleSubmit}>
    <TextField
      label='Name'
      type='text'
      placeholder='Enter Category Name'
      error={errors.name}
      value={formData.name}
      onChange={(e) => handleChange("name", e.target.value)}
      fullWidth
    // required
    />

    <div style={buttonGroupStyle}>
      <Button
        type='submit'
        variant='primary'
        disabled={isSubmitting}
        fullWidth>
        {isSubmitting ? "Submitting..." : submitLabel}
      </Button>

      {onCancel && (
        <Button
          onClick={onCancel}
          type='button'
          variant='secondary'
          disabled={isSubmitting}>
          Cancel
        </Button>
      )}
    </div>
  </form>
}

