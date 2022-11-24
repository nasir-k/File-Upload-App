import Dashboard from "../Screens/Dashboard/Dashboard";
import FilesView from "../Screens/FilesView/FilesView";
import FileUpload from "../Screens/FileUpload/FileUpload";
import Login from "../Screens/Login/Login";

export const routes = [
  { label: "Default", path: "/", element: Login },
  { label: "Login", path: "/login", element: Login },
  { label: "Dashboard", path: "/dashboard", element: Dashboard },
  { label: "FilesView", path: "/filesView", element: FilesView },
  { label: "FileUpload", path: "/fileUpload", element: FileUpload },
];
