export async function deleteResponseApi(id: string): Promise<void> {
  await fetch(`/api/response/${id}`, {
    method: "DELETE",
  });
}
