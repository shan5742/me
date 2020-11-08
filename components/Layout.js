import { ThemeProvider } from "../context/themeContext";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="w-full min-h-screen bg-primary">
        <Header />
        <main>{children}</main>
        <footer className="text-primary">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://nextjs.org/">NextJS</a>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
