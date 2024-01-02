import { Inter } from "next/font/google";
import "./config/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://kit.fontawesome.com/74253e1947.js"
          crossorigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
