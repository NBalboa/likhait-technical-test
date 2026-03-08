export interface Expense {
  id: number;
  amount: number;
  description: string;
  category: string;
  category_id: number;
  date: string;
  created_at: string;
  updated_at: string;
}

export interface ExpenseFormData {
  amount: string;
  description: string;
  category: string;
  date: string;
}

export interface DayExpenses {
  day: number;
  expenses: Expense[];
  total: number;
}

export type ExpenseErrorCode =
  "AMOUNT_MISSING" |
  "AMOUNT_NON_POSITIVE" |
  "DESCRIPTION_MISSING" |
  "CATEGORY_ID_MUST_EXIST" |
  "CATEGORY_ID_MISSING" |
  "DATE_MISSING" |
  "DATE_FUTURE";