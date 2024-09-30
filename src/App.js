import { Routes, Route } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Layout from "./components/utils/Layout";
import DashboardContent from "./components/dashboard/DashboardContent";
import CompaniesPage from "./pages/CompaniesPage";
import BookingPage from "./pages/BookingPage";
import ProfilePage from "./pages/ProfilePage";
import PaymentPage from "./pages/PaymentPage";
import { FormProvider } from "./context/FormContext";
import ProtectedRoute from "./components/utils/ProtectedRoute";
function App() {
  return (
    <div className="App">
      <FormProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute allowedRoles={["user"]}>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardContent />} />
            <Route path="/companies" element={<CompaniesPage />} />
            <Route path="/bookings" element={<BookingPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/payments" element={<PaymentPage />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </FormProvider>
    </div>
  );
}

export default App;
