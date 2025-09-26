import React from "react";
import GetProduct from "../../Hooks/GetProducts";
import GetUsers from "../../Hooks/Getusers";

const Dashboard = () => {
  const { data: Book = [] } = GetProduct();
  const { data: Users = [] } = GetUsers();
  return (
    <React.Fragment>
      <div className="min-w-full min-h-40 bg-white border-2 rounded-2xl shadow-2xl mb-5 bordr-white p-5">
        <h2 className="text-5xl font-bold ml-2">Dashboard</h2>
        <p className="mt-5 text-xl text-gray-500">
          Wellcome to your Admin Panel!Manage your site
        </p>
      </div>
      <div className="flex flex-row gap-4 w-full">
        <div className="w-full bg-blue-600 rounded-xl flex flex-col gap-5 text-left p-5 shadow-2xl">
          <h4 className="text-4xl text-white font-extrabold">Users</h4>
          <span className="text-xl font-bold text-gray-100 font-mono">
            {Users.length}
          </span>
        </div>
        <div className=" w-full bg-red-600 rounded-xl flex flex-col gap-5 text-left p-5 shadow-2xl">
          <h4 className="text-4xl text-white font-extrabold">Products</h4>
          <span className="text-xl font-bold text-gray-100 font-mono">
            {Book.length}
          </span>
        </div>
        <div className="w-full bg-yellow-400 rounded-xl flex flex-col gap-5 text-left p-5 shadow-2xl">
          <h4 className="text-4xl text-white font-extrabold">Sales</h4>
          <span className="text-xl font-bold text-gray-100 font-mono">
            $1205
          </span>
        </div>
        <div className="w-full bg-green-600 rounded-xl flex flex-col gap-5 text-left p-5 shadow-2xl">
          <h4 className="text-4xl text-white font-extrabold">Issues</h4>
          <span className="text-xl font-bold text-gray-100 font-mono">25</span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-5 mt-6">
        <h3 className="text-2xl font-bold mb-4">Latest Orders</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2">Customer</th>
              <th className="border-b p-2">Date</th>
              <th className="border-b p-2">Status</th>
              <th className="border-b p-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Ali</td>
              <td className="p-2">2025-09-20</td>
              <td className="p-2 text-green-600 font-bold">Completed</td>
              <td className="p-2">$120</td>
            </tr>
            <tr>
              <td className="p-2">Sara</td>
              <td className="p-2">2025-09-21</td>
              <td className="p-2 text-yellow-500 font-bold">Pending</td>
              <td className="p-2">$80</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
