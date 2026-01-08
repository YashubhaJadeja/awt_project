"use client";

import Navbar from "../../components/Navbar";

export default function ReportsAnalytics() {
  return (
    <>
      <Navbar role="admin" />

      <div className="min-h-screen bg-slate-100 p-8">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-800">
            Reports & Analytics
          </h2>
          <p className="text-slate-500">
            Financial insights and summary reports
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="text-slate-500">Total Income</h4>
            <p className="text-2xl font-bold text-green-600">₹2,50,000</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="text-slate-500">Total Expense</h4>
            <p className="text-2xl font-bold text-red-600">₹1,75,000</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="text-slate-500">Net Balance</h4>
            <p className="text-2xl font-bold text-blue-600">₹75,000</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="text-slate-500">Total Projects</h4>
            <p className="text-2xl font-bold text-slate-800">6</p>
          </div>
        </div>

        {/* Charts Section (Static) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Category-wise */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold text-slate-700 mb-4">
              Category-wise Expense Distribution
            </h3>
            <div className="h-40 bg-slate-100 flex items-center justify-center text-slate-400">
              Pie / Bar Chart (Static)
            </div>
          </div>

          {/* Month-wise */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold text-slate-700 mb-4">
              Month-wise Income & Expense
            </h3>
            <div className="h-40 bg-slate-100 flex items-center justify-center text-slate-400">
              Line / Bar Chart (Static)
            </div>
          </div>
        </div>

        {/* Project-wise Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
          <h3 className="font-semibold text-slate-700 p-4">
            Project-wise Income & Expense Summary
          </h3>

          <table className="w-full">
            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="py-2 px-4 text-left">Project</th>
                <th className="py-2 px-4 text-left">Income</th>
                <th className="py-2 px-4 text-left">Expense</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-slate-50">
                <td className="py-2 px-4">Website Development</td>
                <td className="py-2 px-4 text-green-600">₹1,00,000</td>
                <td className="py-2 px-4 text-red-600">₹70,000</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-2 px-4">Mobile App</td>
                <td className="py-2 px-4 text-green-600">₹1,50,000</td>
                <td className="py-2 px-4 text-red-600">₹1,05,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Export Buttons */}
        <div className="flex gap-4">
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
            Export to Excel
          </button>

          <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">
            Export to PDF
          </button>
        </div>
      </div>
    </>
  );
}
