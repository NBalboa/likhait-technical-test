import { useEffect, useState } from "react";
import { Category, CategoryFormData, Expense, ExpenseFormData } from "../types";
import { createExpense, getExpenses } from "../services/expenseApi";
import { createCategory, fetchCategories } from "../services/categoryApi";

export function useHistoryPage() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenCategory, setIsModalOpenCategory] = useState(false);


  // Get year and month from URL params, default to current date if not provided
  const getInitialYearMonth = () => {
    const params = new URLSearchParams(window.location.search);
    const currentDate = new Date();
    const yearParam = params.get("year");
    const monthParam = params.get("month");

    return {
      year: yearParam ? parseInt(yearParam) : currentDate.getFullYear(),
      month: monthParam ? parseInt(monthParam) : currentDate.getMonth() + 1,
    };
  };

  const initial = getInitialYearMonth();
  const [selectedYear, setSelectedYear] = useState(initial.year);
  const [selectedMonth, setSelectedMonth] = useState(initial.month);

  // Update URL when year or month changes
  const updateURL = (year: number, month: number) => {
    const params = new URLSearchParams();
    params.set("year", year.toString());
    params.set("month", month.toString());
    const newURL = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, "", newURL);
  };

  // Initialize URL params if not present and categories
  useEffect(() => {
    updateURL(selectedYear, selectedMonth);
    getCategories();
  }, []);

  useEffect(() => {
    fetchExpenses();
  }, [selectedYear, selectedMonth]);

  const fetchExpenses = async () => {
    try {
      setLoading(true);
      const data = await getExpenses(selectedYear, selectedMonth);
      setExpenses(data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    } finally {
      setLoading(false);
    }
  };

  const getCategories = async () => {
    try {
      const data = await fetchCategories();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

  const handleYearChange = (year: number) => {
    setSelectedYear(year);
    updateURL(year, selectedMonth);
  };

  const handleMonthChange = (month: number) => {
    setSelectedMonth(month);
    updateURL(selectedYear, month);
  };

  const handleAddExpense = async (data: ExpenseFormData) => {
    try {
      await createExpense(data);
      setIsModalOpen(false);
      fetchExpenses();
    } catch (error) {
      console.error("Error creating expense:", error);
      throw error;
    }
  };

  const handleAddCategory = async (data: CategoryFormData) => {
    try {
      await createCategory(data)
      setIsModalOpenCategory(false)
      getCategories()
    } catch (error) {
      console.error("Error creating category:", error);
      throw error;
    }
  }

  // Calculate category breakdown
  const categoryData = expenses.reduce(
    (acc, expense) => {
      const category = expense.category || "Uncategorized";
      if (!acc[category]) {
        acc[category] = { category, amount: 0, count: 0 };
      }
      acc[category].amount += Number(expense.amount);
      acc[category].count += 1;
      return acc;
    },
    {} as Record<string, { category: string; amount: number; count: number }>,
  );

  const categoriesSortedByAmount = Object.values(categoryData).sort(
    (a, b) => b.amount - a.amount,
  );

  const total = categoriesSortedByAmount.reduce((sum, cat) => sum + cat.amount, 0);
  const totalCount = categoriesSortedByAmount.reduce((sum, cat) => sum + cat.count, 0);

  return {
    selectedYear,
    handleYearChange,
    setIsModalOpenCategory,
    setIsModalOpen,
    selectedMonth,
    handleMonthChange,
    loading,
    total,
    totalCount,
    categoriesSortedByAmount,
    categories,
    expenses,
    fetchExpenses,
    isModalOpen,
    handleAddExpense,
    isModalOpenCategory,
    handleAddCategory
  }

}