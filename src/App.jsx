import {
  Navigate,
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import { Footer, Navbar } from "./components";
import EditModeToolbar from "./components/editing/EditModeToolbar";
import ToastContainer from "./components/admin/ToastContainer";
import { PortfolioProvider } from "./context/PortfolioContext";
import { About, Contact, Home, Projects } from "./pages";
import Admin from "./pages/Admin";
import AdminLoginPage from "./pages/AdminLoginPage";

const PortfolioLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
    <EditModeToolbar />
    <ToastContainer />
  </>
);

const AdminLayout = () => (
  <>
    <Outlet />
    <ToastContainer />
  </>
);

const App = () => {
  return (
    <PortfolioProvider>
      <main className="bg-yellow-100">
        <Router>
          <Routes>
            {/* Admin — no portfolio navbar/footer */}
            <Route element={<AdminLayout />}>
              <Route path="/admin" element={<AdminLoginPage />} />
              <Route path="/admin/dashboard" element={<Admin />} />
            </Route>

            {/* Public portfolio */}
            <Route element={<PortfolioLayout />}>
              <Route index element={<About />} />
              <Route path="about" element={<About />} />
              <Route path="home" element={<Home />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
            </Route>

            <Route path="*" element={<Navigate to="/about" replace />} />
          </Routes>
        </Router>
      </main>
    </PortfolioProvider>
  );
};

export default App;
