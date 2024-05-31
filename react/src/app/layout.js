import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/_components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from "next-themes";
import Footer from "@/_components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AMDSB IT",
  description: "Avon Maitland DSB Information Technology Services",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className="bg-body-secondary">
      <ThemeProvider attribute="data-bs-theme" storageKey="theme">
        <div style={{minHeight: '81.5vh'}}>
        <Navigation />
        {children}
        
        </div>
        <Footer/>
        </ThemeProvider>

        <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
       
        <script
          src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
          crossorigin></script>

        <script
          src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin></script>

        <script>var Alert = ReactBootstrap.Alert;</script>

      </body>
    </html>
    
    
  );
}
