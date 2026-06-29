import {
  createBrowserRouter,
  createRoutesFromElements,
  // Navigate,
  Route,
} from "react-router-dom";

import { MainLayout } from "layouts";
import {
  DashboardPage,
  StudentsPage,
  SalesIncomePage,
  GeneralInfoPage,
  StudentIncomePage,
  MessagesPage,
  SalesIncomeManagementPage,
  AssignmentPage,
  CoursesPage,
  WebinarsManagementPages,
  DirectSaleTeacherPages,
  LoginPages,
  SessionsPage,
  SessionDetails,
} from "pages";
import NotFound from "pages/NotFound";
import CourseInfoPage from "pages/Courses/CourseInfo.pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="*" element={<NotFound />} />
      <Route path="/student/auth" element={<LoginPages />} />
      <Route path="/student" element={<MainLayout />}>
        <Route index element={<DashboardPage />} />
      </Route>
      <Route path="/student/dashboard" element={<MainLayout />}>
        <Route index element={<DashboardPage />} />
      </Route>
      <Route path="/student/students" element={<MainLayout />}>
        <Route index element={<StudentsPage />} />
      </Route>
      <Route path="/student/students/:id" element={<MainLayout />}>
        <Route index element={<AssignmentPage />} />
      </Route>
      <Route path="/student/courses" element={<MainLayout />}>
        <Route index element={<CoursesPage />} />
      </Route>
      <Route path="/student/courses/:id" element={<MainLayout />}>
        <Route index element={<CourseInfoPage />} />
      </Route>
      <Route path="/student/messages" element={<MainLayout />}>
        <Route index element={<MessagesPage />} />
      </Route>
      <Route
        path="/student/marketing/sales-income-management"
        element={<MainLayout />}
      >
        <Route index element={<SalesIncomeManagementPage />} />
      </Route>
      <Route
        path="/student/marketing/webinars-management"
        element={<MainLayout />}
      >
        <Route index element={<WebinarsManagementPages />} />
      </Route>
      <Route
        path="/student/marketing/direct-sale-teacher"
        element={<MainLayout />}
      >
        <Route index element={<DirectSaleTeacherPages />} />
      </Route>
      <Route
        path="/student/financial-reports/sales-income"
        element={<MainLayout />}
      >
        <Route index element={<SalesIncomePage />} />
      </Route>
      <Route
        path="/student/financial-reports/student-income"
        element={<MainLayout />}
      >
        <Route index element={<StudentIncomePage />} />
      </Route>
      <Route path="/student/account/contracts" element={<MainLayout />}>
        <Route index element={<GeneralInfoPage />} />
      </Route>
      <Route path="/student/account/bank-info" element={<MainLayout />}>
        <Route index element={<GeneralInfoPage />} />
      </Route>
      <Route path="/student/account/general-info" element={<MainLayout />}>
        <Route index element={<GeneralInfoPage />} />
      </Route>
      <Route path="/student/sessions" element={<MainLayout />}>
        <Route index element={<SessionsPage />} />
      </Route>
      <Route path="/student/sessions/:id" element={<MainLayout />}>
        <Route index element={<SessionDetails />} />
      </Route>
    </>,
  ),
);
