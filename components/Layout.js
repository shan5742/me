import { ThemeProvider } from "../context/themeContext";
import Header from "../components/Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="flex flex-col w-full min-h-screen bg-primary">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
