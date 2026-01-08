"use client";

import Navbar from "../../components/Navbar";

export default function Expenses() {
  return (
    <>
      <Navbar role="user" />

      <div className="min-h-screen bg-slate-100 p-8">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-800">
            My Expenses
          </h2>
          <p className="text-slate-500">
            View your recorded expenses
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Title</th>
                <th className="py-3 px-4 text-left">Amount</th>
                <th className="py-3 px-4 text-left">Date</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b hover:bg-slate-50 transition">
                <td className="py-3 px-4 font-medium text-slate-700">
                  Travel
                </td>
                <td className="py-3 px-4 text-red-600 font-semibold">
                  ₹3,000
                </td>
                <td className="py-3 px-4 text-slate-600">
                  01-01-2026
                </td>
              </tr>

              <tr className="hover:bg-slate-50 transition">
                <td className="py-3 px-4 font-medium text-slate-700">
                  Food
                </td>
                <td className="py-3 px-4 text-red-600 font-semibold">
                  ₹1,200
                </td>
                <td className="py-3 px-4 text-slate-600">
                  03-01-2026
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
