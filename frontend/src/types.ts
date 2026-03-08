/**
 * Type definitions for the Expense Tracking System
 */

export interface MonthlySummary {
  totalExpenses: number;
  categoryBreakdown: CategoryBreakdown[];
  topCategories: TopCategory[];
}

export interface CategoryBreakdown {
  category: string;
  total: number;
  percentage: number;
}

export interface TopCategory {
  category: string;
  total: number;
  count: number;
}

export interface CategoryFormData {
  name: string;
}

export interface Category {
  id: number,
  name: string,
}

export type CategoryErrorCode = "NAME_MISSING" | "NAME_ALREADY_TAKEN"
