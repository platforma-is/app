import axios from "axios";
import { IForm } from "@/shared/types";

export async function deleteFormApi(id: string): Promise<void> {
  await fetch(`/api/form/${id}`, {
    method: "DELETE",
  });
}

export async function activeFormApi(id: string): Promise<void> {
  await fetch(`/api/form/${id}/active`, {
    method: "PUT",
  });
}

export async function unactiveFormApi(id: string): Promise<void> {
  await fetch(`/api/form/${id}/unactive`, {
    method: "PUT",
  });
}

export async function deleteResponseApi(id: string): Promise<void> {
  await fetch(`/api/response/${id}`, {
    method: "DELETE",
  });
}

export async function createFormApi(title: string): Promise<IForm> {
  const response = await axios.post<IForm>(
    `/api/form`,
    JSON.stringify({ title }),
    {
      headers: { "Content-Type": "application/json" },
    },
  );
  return response.data;
}

export async function getForms(): Promise<IForm[]> {
  const response = await axios.get("/api/forms");
  return response.data;
}
