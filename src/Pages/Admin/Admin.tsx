import Dashboard from "../../Components/Admin/Dashboard";
import Products_dashboard from "../../Components/Admin/Products";
import Sidbar from "../../Components/Admin/sidebar";
import Users_dashboard from "../../Components/Admin/Users";
const Admin_panel = () => {
  return (
    <div className="flex h-screen gap-4 p-4 bg-gray-100">
      <Sidbar />
      <div className="flex-1 h-full bg-white rounded-2xl shadow-lg p-6 overflow-auto ">
        <Products_dashboard/>
      </div>
    </div>
  );
};

export default Admin_panel;
