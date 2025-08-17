import axios from "axios";

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
}

const API_URL = "https://689e1c313fed484cf876586e.mockapi.io/users";

export const getUsers = async (): Promise<User[]> => {
  const res = await axios.get<User[]>(API_URL);
  return res.data;
};

export const createUser = async (user: Omit<User, "id">): Promise<User> => {
  const res = await axios.post<User>(API_URL, user);
  return res.data;
};

export const deleteUser = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

export const updateUser = async (
  id: string,
  user: Partial<User>
): Promise<User> => {
  const res = await axios.put<User>(`${API_URL}/${id}`, user);
  return res.data;
};
