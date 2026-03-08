/**
 * Type definitions for the Expense Tracking System
 */

import { CategoryBreakdown, TopCategory } from "./types/categoryTypes";

export interface MonthlySummary {
  totalExpenses: number;
  categoryBreakdown: CategoryBreakdown[];
  topCategories: TopCategory[];
}
