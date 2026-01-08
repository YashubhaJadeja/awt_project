"use client";

import Navbar from "../../components/Navbar";

export default function AddExpense() {
  return (
    <>
      <Navbar role="user" />

      <div className="min-h-screen bg-slate-100 p-8">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-800">
            Add Expense / Income
          </h2>
          <p className="text-slate-500">
            Record your expense or income details
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-lg shadow p-6 max-w-3xl">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Date */}
            <div>
              <label className="block mb-1 font-medium text-slate-700">
                Date
              </label>
              <input
                type="date"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Type */}
            <div>
              <label className="block mb-1 font-medium text-slate-700">
                Type
              </label>
              <select className="w-full border rounded px-3 py-2">
                <option>Expense</option>
                <option>Income</option>
              </select>
            </div>

            {/* Category */}
            <div>
              <label className="block mb-1 font-medium text-slate-700">
                Category
              </label>
              <select className="w-full border rounded px-3 py-2">
                <option>Travel</option>
                <option>Food</option>
                <option>Stay</option>
                <option>Purchase</option>
              </select>
            </div>

            {/* Subcategory */}
            <div>
              <label className="block mb-1 font-medium text-slate-700">
                Subcategory
              </label>
              <select className="w-full border rounded px-3 py-2">
                <option>Taxi</option>
                <option>Train</option>
                <option>Bus</option>
              </select>
            </div>

            {/* Project */}
            <div>
              <label className="block mb-1 font-medium text-slate-700">
                Project
              </label>
              <select className="w-full border rounded px-3 py-2">
                <option>Website Development</option>
                <option>Mobile App</option>
                <option>Marketing Campaign</option>
              </select>
            </div>

            {/* Amount */}
            <div>
              <label className="block mb-1 font-medium text-slate-700">
                Amount
              </label>
              <input
                type="number"
                placeholder="Enter amount"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            {/* Attachment */}
            <div className="md:col-span-2">
              <label className="block mb-1 font-medium text-slate-700">
                Attachment (Bill / Receipt)
              </label>
              <input
                type="file"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            {/* Remarks */}
            <div className="md:col-span-2">
              <label className="block mb-1 font-medium text-slate-700">
                Remarks
              </label>
              <textarea
                rows={3}
                placeholder="Optional notes..."
                className="w-full border rounded px-3 py-2"
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="md:col-span-2 flex gap-4">
              <button
                type="button"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Save
              </button>

              <button
                type="reset"
                className="bg-gray-300 text-gray-800 px-6 py-2 rounded hover:bg-gray-400"
              >
                Reset
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}
