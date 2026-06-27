import DashboardLayout from "@/layout/DashboardLayout";
import AddProduct from "@/page/AddProduct";
import { Analytics } from "@/page/Analytics";
import { Dashboard } from "@/page/Dashboard";
import { Menu } from "@/page/Menu";
import {Orders} from "@/page/Orders"
import GustMenu from "@/page/gustMenu"
import  Tables  from "@/page/Tables";
import { Route, Routes } from "react-router-dom";

export default function RouterApp() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="AddProduct" element={<AddProduct/>} />
          <Route path="tables" element={<Tables />} />

          <Route path="menu" element={<Menu/>} />
          <Route path="analytics" element={<Analytics/>} />
        </Route>
        <Route path="gustMenu"  element={<GustMenu/>}/>
      </Routes>
    </div>
  );
}
