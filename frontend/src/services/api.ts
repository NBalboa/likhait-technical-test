/**
 * API service for communicating with the backend
 */

import { API_BASE_URL } from "../constants/baseURL";
import { Category, CategoryFormData, ExpenseErrorCode } from "../types";

/**
 * Fetch all categories
 */
export async function fetchCategories(): Promise<
  Array<{ id: number; name: string }>
> {
  const response = await fetch(`${API_BASE_URL}/categories`);
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  return response.json();
}

/**
  Create a new category
 */
export async function createCategory(data: CategoryFormData): Promise<Category> {

  const response = await fetch(`${API_BASE_URL}/categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ category: data }),
  });

  if (!response.ok) {
    const error: { errors: ExpenseErrorCode[] } = await response.json();

    throw error.errors;
  }

  return response.json()
}
