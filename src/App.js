import { Routes, Route } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Layout from "./components/utils/Layout";
import DashboardContent from "./components/dashboard/DashboardContent";
import CompaniesPage from "./pages/CompaniesPage";
import BookingPage from "./pages/BookingPage";
import ProfilePage from "./pages/ProfilePage";
import PaymentPage from "./pages/PaymentPage";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import OTPVerification from "./components/auth/OTPVerification";
import SeatSelectionPage from "./pages/SeatSelectionPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardContent />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/bookings" element={<BookingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/payments" element={<PaymentPage />} />
          <Route path="/seat-selection" element={<SeatSelectionPage />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp-verification" element={<OTPVerification />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
