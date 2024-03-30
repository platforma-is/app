import axios from "axios";

export const formCreate = async (title: string) => {
  // eslint-disable-next-line prettier/prettier
  const response = await axios.post(
    `/api/form`,
    JSON.stringify({ title }),
    {
    headers: { "Content-Type": "application/json" },
  });
  return response;
};
