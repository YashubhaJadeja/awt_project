"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar({ role }: { role: string }) {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("role");
    router.push("/login");
  };

  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <h1 className="font-bold">Expense Manager</h1>

      <div className="flex gap-4 items-center">
       {role === "admin" && (
  <>
    <Link href="/admin">Dashboard</Link>
    <Link href="/admin/users">Users</Link>
    <Link href="/admin/projects">Projects</Link>
    <Link href="/admin/categories">Categories</Link>
    <Link href="/admin/subcategories">Subcategories</Link>
    <Link href="/admin/reports">Reports</Link>

  </>
)}


        {role === "user" && (
  <>
    <Link href="/user">Dashboard</Link>
    <Link href="/user/expenses">Expenses</Link>
    <Link href="/user/add-expense">Add Expense</Link>
  </>
)}


        <button
          onClick={logout}
          className="bg-red-600 px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
