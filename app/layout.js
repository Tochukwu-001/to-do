import { Inter, Lato } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({subsets: ["latin"], weight: ["100", "400", "900"]})

export const metadata = {
  title: "ToDo app",
  description: "A todo App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
