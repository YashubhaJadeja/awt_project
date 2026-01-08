"use client";

import Navbar from "../../components/Navbar";

export default function CategoryManagement() {
  return (
    <>
      <Navbar role="admin" />

      <div className="min-h-screen bg-slate-100 p-8">
        {/* Header */}
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Category Management
            </h2>
            <p className="text-slate-500">
              Manage expense and income categories
            </p>
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            + Add Category
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Category Name</th>
                <th className="py-3 px-4 text-left">Type</th>
                <th className="py-3 px-4 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b hover:bg-slate-50">
                <td className="py-3 px-4">Travel</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 text-sm bg-red-100 text-red-700 rounded">
                    Expense
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 text-sm bg-green-100 text-green-700 rounded">
                    Active
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4">Salary</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 text-sm bg-blue-100 text-blue-700 rounded">
                    Income
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 text-sm bg-green-100 text-green-700 rounded">
                    Active
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
