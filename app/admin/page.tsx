"use client";

import Navbar from "../components/Navbar";

export default function AdminDashboard() {
  return (
    <>
      <Navbar role="admin" />

      <div className="p-6 bg-blue-200 min-h-screen">
        <h1 className="text-2xl font-bold mb-6">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white p-4 shadow rounded">
            <h3>Total Users</h3>
            <p>12</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h3>Total Income</h3>
            <p>₹2,50,000</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h3>Total Expenses</h3>
            <p>₹1,75,000</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h3>Net Balance</h3>
            <p>₹75,000</p>
          </div>
        </div>
      </div>
    </>
  );
}
