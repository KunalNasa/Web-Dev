import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Admin : Facebook",
    description: "Admin Page : Connects People",
};

export default function AdminLayout({ children }) {
    return (
        <>
            <span>Admin Navbar</span>
            {children}
        </>
    );
}
