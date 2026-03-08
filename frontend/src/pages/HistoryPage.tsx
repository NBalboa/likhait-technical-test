import React from "react";
import YearNavigation from "../components/YearNavigation";
import { MonthNavigation } from "../components/MonthNavigation";
import CategoryBreakdown from "../components/CategoryBreakdown";
import { CalendarExpenseTable } from "../components/CalendarExpenseTable";
import { ExpenseForm } from "../components/ExpenseForm";
import { Modal, Button } from "../vibes";
import { CategoryForm } from "../components/CategoryForm";
import { headerStyle, leftHeaderStyle, loadingStyle, pageStyle, rightHeaderStyle, titleStyle } from "../styles/historyPageStyle";
import { useHistoryPage } from "../hooks/useHistoryPage";

const HistoryPage: React.FC = () => {
  const {
    categories,
    categoriesSortedByAmount,
    expenses,
    fetchExpenses,
    handleAddCategory,
    handleAddExpense,
    handleMonthChange,
    handleYearChange,
    isModalOpen,
    isModalOpenCategory,
    loading,
    selectedMonth,
    selectedYear,
    setIsModalOpen,
    setIsModalOpenCategory,
    total,
    totalCount
  } = useHistoryPage();

  return (
    <div style={pageStyle}>
      <div style={headerStyle}>
        <div style={leftHeaderStyle}>
          <h1 style={titleStyle}>Expense History</h1>
          <YearNavigation
            currentYear={selectedYear}
            onYearChange={handleYearChange}
          />
        </div>
        <div style={rightHeaderStyle}>
          <Button variant="primary" onClick={() => setIsModalOpenCategory(true)}>
            Add Category
          </Button>
          <Button variant="primary" onClick={() => setIsModalOpen(true)}>
            Add Expense
          </Button>
        </div>

      </div>

      <MonthNavigation
        currentMonth={selectedMonth}
        currentYear={selectedYear}
        onMonthChange={handleMonthChange}
      />

      <div>
        {loading ? (
          <div style={loadingStyle}>Loading...</div>
        ) : (
          <>
            <CategoryBreakdown
              categories={categoriesSortedByAmount}
              total={total}
              totalCount={totalCount}
            />
            <div style={{ marginTop: "32px" }}>
              <CalendarExpenseTable
                categories={categories}
                expenses={expenses}
                onExpenseUpdated={fetchExpenses}
              />
            </div>
          </>
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Expense"
      >
        <ExpenseForm
          categories={categories}
          onSubmit={handleAddExpense}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>

      <Modal
        isOpen={isModalOpenCategory}
        onClose={() => setIsModalOpenCategory(false)}
        title="Add New Category"
      >
        <CategoryForm
          onSubmit={handleAddCategory}
          onCancel={() => setIsModalOpenCategory(false)}
        />
      </Modal>
    </div>
  );
};

export default HistoryPage;
