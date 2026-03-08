import { ExpenseErrorCode } from "../types/expenseTypes";


export const EXPENSE_ERRORS: Record<ExpenseErrorCode, string> = {
  AMOUNT_MISSING: "Amount is required",
  AMOUNT_NON_POSITIVE: "Amount must be greater than 0",
  DESCRIPTION_MISSING: "Description is required",
  CATEGORY_ID_MISSING: "Category is required",
  CATEGORY_ID_MUST_EXIST: "Category must exist",
  DATE_FUTURE: "Date must not be in the future",
  DATE_MISSING: "Date is required",
} as const
