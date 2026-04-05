import type { FormDataUpdate } from "@/entities/ad/model";
import { STORAGE_KEY } from "@/shared/config";

interface StoredData {
  id: string;
  formData: FormDataUpdate;
}

export const saveFormDataToStorage = (id: string, formData: FormDataUpdate) => {
  try {
    const dataToStore: StoredData = {
      id,
      formData,
    };
    localStorage.setItem(`${STORAGE_KEY}_${id}`, JSON.stringify(dataToStore));
  } catch (error) {
    console.error("Error to save Form data to localStorage:", error);
  }
};

export const loadFormDataFromStorage = (
  currentId: string,
): FormDataUpdate | null => {
  try {
    const savedData = localStorage.getItem(`${STORAGE_KEY}_${currentId}`);
    if (savedData) {
      const parsed: StoredData = JSON.parse(savedData);
      if (parsed.id === currentId) return parsed.formData;
    }
  } catch (error) {
    console.error("Error to load Form data from localStorage:", error);
  }
  return null;
};

export const clearFormDataFromStorage = (id?: string) => {
  try {
    localStorage.removeItem(`${STORAGE_KEY}_${id}`);
  } catch (error) {
    console.error("Error to clear Form data from localStorage:", error);
  }
};
