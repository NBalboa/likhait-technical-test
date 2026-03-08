import { useState } from "react";
import { Expense, ExpenseFormData } from "../types/expenseTypes";
import { deleteExpense, updateExpense } from "../services/expenseApi";

interface UseCalendarExpenseTableProps {
  expenses: Expense[];
  onExpenseUpdated: () => void;
}

const ITEMS_PER_PAGE = 10;

export function useCalendarExpenseTable({
  onExpenseUpdated,
  expenses
}: UseCalendarExpenseTableProps) {

  const [currentPage, setCurrentPage] = useState(1);
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [deletingExpense, setDeletingExpense] = useState<Expense | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const totalPages = Math.ceil(expenses.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentExpenses = expenses.slice(startIndex, endIndex);

  const handleEdit = (expense: Expense) => {
    setEditingExpense(expense);
    setIsEditModalOpen(true);
  };

  const handleDelete = (expense: Expense) => {
    setDeletingExpense(expense);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!deletingExpense) return;
    try {
      await deleteExpense(deletingExpense.id);
      setIsDeleteModalOpen(false);
      setDeletingExpense(null);
      onExpenseUpdated();
    } catch (error) {
      console.error("Failed to delete expense:", error);
      alert("Failed to delete expense");
    }
  };

  const handleUpdate = async (data: ExpenseFormData) => {
    if (!editingExpense) return;
    try {
      await updateExpense(editingExpense.id, data);
      setIsEditModalOpen(false);
      setEditingExpense(null);
      onExpenseUpdated();
    } catch (error) {
      console.error("Failed to update expense:", error);
      throw error;
    }
  };

  return {
    currentExpenses,
    handleEdit,
    handleDelete,
    currentPage,
    totalPages,
    setCurrentPage,
    isEditModalOpen,
    setIsEditModalOpen,
    setEditingExpense,
    editingExpense,
    handleUpdate,
    isDeleteModalOpen,
    setDeletingExpense,
    deletingExpense,
    setIsDeleteModalOpen,
    confirmDelete
  }
}