import Navbar from "../../components/Navbar";

export default function UserManagement() {
  return (
    <>
      <Navbar role="admin" />

      <div className="min-h-screen bg-slate-100 p-8">
        {/* Page Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-800">
            User Management
          </h2>
          <p className="text-slate-500">
            Manage system users and roles
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Role</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b hover:bg-slate-50 transition">
                <td className="py-3 px-4 font-medium text-slate-700">
                  Yashubha
                </td>
                <td className="py-3 px-4 text-slate-600">
                  ym@mail.com
                </td>
                <td className="py-3 px-4">
                  <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
                    User
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-slate-50 transition">
                <td className="py-3 px-4 font-medium text-slate-700">
                  Raj
                </td>
                <td className="py-3 px-4 text-slate-600">
                  raj@mail.com
                </td>
                <td className="py-3 px-4">
                  <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
                    Admin
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
