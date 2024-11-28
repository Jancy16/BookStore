import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiInbox, HiOutlineCloudUpload, HiUser, HiTable, HiChartPie } from "react-icons/hi";
import { useContext } from "react";
import { AuthContext } from "../contects/AuthProvider";

const SideBar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Logo href="/" className="text-white">
        {/* Optionally, you can display a title here like "Admin Panel" */}
        <p>Dashboard</p>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideBar;
