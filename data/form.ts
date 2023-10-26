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
