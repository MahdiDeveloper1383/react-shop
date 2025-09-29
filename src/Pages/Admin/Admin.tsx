import { lazy, useState } from "react";
import Sidbar from "../../Components/Admin/sidebar";


const Dashboard = lazy(() => import("../../Components/Admin/Dashboard"));
const Products_dashboard =lazy(() => import("../../Components/Admin/Products"));
const Users_dashboard = lazy(() => import("../../Components/Admin/Users"));
const Admin_panel = () => {
  const [acive_page,setactive_page] = useState('Dashboard')

  const renderPage = ()=>{
    switch(acive_page){
      case 'Dashboard':
        return <Dashboard/>
      case 'Products':
        return <Products_dashboard/>
      case 'Users':
        return <Users_dashboard/>
      default:
        return <Dashboard/>
    }
  }
  return (
    <div className="flex h-screen gap-4 p-4 bg-gray-100">
      <Sidbar onSetPage={setactive_page}/>
      <div className="flex-1 h-full bg-white rounded-2xl shadow-lg p-6 overflow-auto ">
        {renderPage()}
      </div>
    </div>
  );
};

export default Admin_panel;
