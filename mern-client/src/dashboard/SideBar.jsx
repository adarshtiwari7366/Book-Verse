
import React, { useContext } from 'react'
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiKey, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { MdAdminPanelSettings } from "react-icons/md";

import userImg from "../assets/profile.jpg"
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const SideBar = () => {
  const {logOut}=useContext(AuthContext);
    const location=useLocation();
    const navigate=useNavigate();
    const from=location.state?.from?.pathname || "/";
    const handleLogout=()=>{
        logOut().then(() => {
            // alert("Sign Out Successful!!")
            navigate(from,{replace:true})
          }).catch((error) => {
            // An error happened.
          });
    }
    // handleLogout();
  return (
    <Sidebar aria-label="Sidebar with content separator example">
      {/* <Sidebar.Logo href="#" icon={HiKey} className='w-3 h-3'>
           <p className='ml-5'>  Admin</p>
      </Sidebar.Logo> */}
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        {/* <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
          Dashboard
        </Sidebar.Item> */}
        <Sidebar.Item href="/admin/dashboard/manage" icon={MdAdminPanelSettings}>
          <p className='font-bold text-black text-xl'>Admin</p>
        </Sidebar.Item>
        <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
          Upload Book
        </Sidebar.Item>
        <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
          Manage Books
        </Sidebar.Item>
        {/* <Sidebar.Item href="/login" icon={HiUser}>
          Sign In
        </Sidebar.Item> */}
        <Sidebar.Item  onClick={handleLogout} href='#' icon={HiArrowSmRight}>
          Sign Out
        </Sidebar.Item>
        {/* <Sidebar.Item href="#" icon={HiArrowSmRight}>
          Sign In
        </Sidebar.Item> */}
        {/* <Sidebar.Item href="#" icon={HiTable}>
          Sign Up
        </Sidebar.Item> */}
      </Sidebar.ItemGroup>
      <Sidebar.ItemGroup>
        <Sidebar.Item href="#" icon={HiChartPie}>
          Upgrade to Pro
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={HiViewBoards}>
          Documentation
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={BiBuoy}>
          Help
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar>
  )
}

export default SideBar