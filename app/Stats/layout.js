
import NavBar from "@/components/NavBar";
import "../globals.css";
import { Inter, DM_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const dm_Sans = DM_Sans({ subsets: ["latin"], weight: ["300", "400","600","700"] });

export const metadata = {
  title: "Spotify menu",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dm_Sans.className} bg-black`}>
       <NavBar/>
       {children}
      </body>
    </html>
  );
}
