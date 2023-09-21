import NavBar from "@/components/NavBar";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import { Inter, DM_Sans } from "next/font/google";
import Provider from "@/context/client_provider";

const inter = Inter({ subsets: ["latin"] });
const dm_Sans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata = {
  title: "Spotify menu",
  description: "",
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className={`${dm_Sans.className} bg-black`}>
        <Provider session={session}>
          <NavBar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
