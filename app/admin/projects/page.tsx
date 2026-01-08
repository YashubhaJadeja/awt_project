"use client";

import Navbar from "../../components/Navbar";

export default function ProjectManagement() {
  return (
    <>
      <Navbar role="admin" />

      <div className="min-h-screen bg-slate-100 p-8">
        {/* Header */}
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Project Management
            </h2>
            <p className="text-slate-500">
              Manage company projects
            </p>
          </div>

          {/* Add Project Button */}
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            + Add Project
          </button>
        </div>

        {/* Project Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Project Name</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b hover:bg-slate-50 transition">
                <td className="py-3 px-4 font-medium text-slate-700">
                  Website Development
                </td>
                <td className="py-3 px-4">
                  <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
                    Active
                  </span>
                </td>
                <td className="py-3 px-4 space-x-2">
                  <button className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500">
                    Edit
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>

              <tr className="border-b hover:bg-slate-50 transition">
                <td className="py-3 px-4 font-medium text-slate-700">
                  Mobile App
                </td>
                <td className="py-3 px-4">
                  <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
                    Active
                  </span>
                </td>
                <td className="py-3 px-4 space-x-2">
                  <button className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500">
                    Edit
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-slate-50 transition">
                <td className="py-3 px-4 font-medium text-slate-700">
                  Marketing Campaign
                </td>
                <td className="py-3 px-4">
                  <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700">
                    Inactive
                  </span>
                </td>
                <td className="py-3 px-4 space-x-2">
                  <button className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500">
                    Edit
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
