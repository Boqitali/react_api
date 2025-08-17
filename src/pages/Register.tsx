import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "../api/users";

const ResponsiveRegister: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }
    mutation.mutate({
      name,
      email,
      phone,
      avatar: `https://i.pravatar.cc/150?u=${email}`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg max-w-md w-full p-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300">
              Phone
            </label>
            <input
              type="text"
              placeholder="+998 90 123 45 67"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
            />
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Yaratilmoqda..." : "Create Account"}
          </button>
        </form>
        <div className="mt-6 text-center text-gray-600 dark:text-gray-400 text-sm">
          Already have an account?{" "}
          <a
            href="#"
            className="text-indigo-600 hover:underline dark:text-indigo-400"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveRegister;
