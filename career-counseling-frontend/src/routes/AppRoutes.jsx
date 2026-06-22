import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import StudentDashboard from "../student/pages/StudentDashboard";
import AdminDashboard from "../admin/pages/AdminDashboard";
import CounselorDashboard from "../counselor/pages/CounsleorDashboard";
import AptitudeTest from "../student/pages/AptitudeTest";
import ProtectedRoute from "../components/ProtectedRoute";
import Assessment from "../pages/Assessment";
import ProfileSetup from "../student/pages/ProfileSetup";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
  path="/student/dashboard"
  element={
    <ProtectedRoute allowedRole="student">
      <StudentDashboard />
    </ProtectedRoute>
  }
/>
<Route
  path="/admin/dashboard"
  element={
    <ProtectedRoute allowedRole="admin">
      <AdminDashboard />
    </ProtectedRoute>
  }
/>
<Route
  path="/counselor/dashboard"
  element={
    <ProtectedRoute allowedRole="counselor">
      <CounselorDashboard />
    </ProtectedRoute>
  }
/>
<Route
  path="/student/test"
  element={
    <ProtectedRoute allowedRole="student">
      <AptitudeTest />
    </ProtectedRoute>
  }
/>
<Route
    path="/student/profile"
    element={
        <ProtectedRoute allowedRole="student">
            <ProfileSetup />
        </ProtectedRoute>
    }
/>
<Route
    path="/assessment"
    element={<Assessment />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;