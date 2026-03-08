import { CategoryErrorCode } from "../types/categoryTypes";

export const CATEGORY_ERRORS: Record<CategoryErrorCode, string> = {
  NAME_ALREADY_TAKEN: "Duplicate Category name",
  NAME_MISSING: "Name is required",
} as const