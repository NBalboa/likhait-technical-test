import { CATEGORY_ERRORS } from "../constants/categoryErrors";
import { CategoryErrorCode, CategoryFormData } from "../types/categoryTypes";


export function extractErrorMessages(errors: CategoryErrorCode[]): Partial<CategoryFormData> {
  return errors.reduce(setErrorMessage, {} as Partial<CategoryFormData>)
}

function setErrorMessage(accumulator: Partial<CategoryFormData>, errorCode: CategoryErrorCode): Partial<CategoryFormData> {
  switch (errorCode) {
    case "NAME_MISSING":
      accumulator.name = CATEGORY_ERRORS[errorCode];
      break;
    case "NAME_ALREADY_TAKEN":
      accumulator.name = CATEGORY_ERRORS[errorCode];
      break;
  }

  return accumulator;
}