import { Button, TextField } from '../vibes';
import { useCategoryForm } from '../hooks/useCategoryForm';
import { buttonGroupStyle, formStyle } from '../styles/modalFormStyle';
import { CategoryFormData } from '../types/categoryTypes';

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

  return <form style={formStyle} onSubmit={handleSubmit}>
    <TextField
      label='Name'
      type='text'
      placeholder='Enter Category Name'
      error={errors.name}
      value={formData.name}
      onChange={(e) => handleChange("name", e.target.value)}
      fullWidth
      required
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

