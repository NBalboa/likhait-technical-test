import { ExpenseErrorCode, ExpenseFormData } from "../types";
import { EXPENSE_ERRORS } from "../constants/expenseErrors";

export function extractErrorMessages(errors: ExpenseErrorCode[]): Partial<ExpenseFormData> {
  return errors.reduce(setErrorMessage, {} as Partial<ExpenseFormData>)
}

function setErrorMessage(accumulator: Partial<ExpenseFormData>, errorCode: ExpenseErrorCode): Partial<ExpenseFormData> {
  switch (errorCode) {
    case "AMOUNT_MISSING":
    case "AMOUNT_NON_POSITIVE":
      accumulator.amount = EXPENSE_ERRORS[errorCode];
      break;
    case "DESCRIPTION_MISSING":
      accumulator.description = EXPENSE_ERRORS[errorCode];
      break;
    case "CATEGORY_ID_MUST_EXIST":
    case "CATEGORY_ID_MISSING":
      accumulator.category = EXPENSE_ERRORS[errorCode];
      break;
    case "DATE_MISSING":
    case "DATE_FUTURE":
      accumulator.date = EXPENSE_ERRORS[errorCode];
      break;
  }

  return accumulator;
}