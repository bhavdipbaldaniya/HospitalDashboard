'use client'
import { Provider } from "react-redux";
import Sidebar from "../Component/Sidebar/page";
import "../styles/globals.css";
import '../styles/table.css'
import { store } from "./store";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideSidebarRoutes = ["/login", "/signup"];
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          {hideSidebarRoutes.includes(pathname) ? (
            children
          ) : (
            <Sidebar>{children}</Sidebar>
          )}
        </body>
      </html>
    </Provider>
  );
}
