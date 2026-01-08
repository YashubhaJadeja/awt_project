"use client";

import Navbar from "../components/Navbar";

export default function UserDashboard() {
  return (
    <>
      <Navbar role="user" />

      <div className="p-6 bg-green-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-6">
          User Dashboard
        </h1>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow rounded">
            <h3>Total Income</h3>
            <p>₹25,000</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h3>Total Expenses</h3>
            <p>₹12,000</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h3>Balance</h3>
            <p>₹13,000</p>
          </div>
        </div>
      </div>
    </>
  );
}
