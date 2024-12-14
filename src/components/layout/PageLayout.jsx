import Navbar from "./Navbar";
import Footer from "./Footer";
import "./PageLayout.css";

export default function PageLayout({ children }) {
  return (
    <div className="page-layout">
      <Navbar />
      <main className="main-content">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
