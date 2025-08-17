import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getUsers, deleteUser, type User } from "../api/users";

export default function Home() {
  const queryClient = useQueryClient();

  const {
    data: users = [],
    isLoading,
    isError,
    error,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const mutationDelete = useMutation({
    mutationFn: (id: string) => deleteUser(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });

  if (isLoading) return <p>Yuklanmoqda...</p>;
  if (isError)
    return <p className="text-red-500">Xatolik: {(error as Error).message}</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Users List</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border">
              <td className="p-2">{u.name}</td>
              <td className="p-2">{u.email}</td>
              <td className="p-2">{u.phone}</td>
              <td className="p-2">
                <button
                  className="bg-red-500 px-2 py-1 rounded text-white"
                  onClick={() => mutationDelete.mutate(u.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {users.length === 0 && (
            <tr>
              <td className="p-2 text-center" colSpan={4}>
                Hali foydalanuvchilar yo'q
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
