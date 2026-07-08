import {
  createBrowserRouter,
  createRoutesFromElements,
  // Navigate,
  Route,
} from "react-router-dom";

import { MainLayout } from "layouts";
import {
  AssignmentPage,
  Assignments,
  CoursesPage,
  DashboardPage,
  DirectSaleTeacherPages,
  GeneralInfoPage,
  LoginPages,
  MessagesPage,
  Reports,
  SalesIncomeManagementPage,
  SalesIncomePage,
  SessionDetails,
  SessionsPage,
  StudentIncomePage,
  StudentsPage,
  Tickets,
  Timeline,
  UploadAssignments,
  WebinarsManagementPages,
} from "pages";
import CourseInfoPage from "pages/Courses/CourseInfo.pages";
import NotFound from "pages/NotFound";
import TicketMessages from "pages/Support/Messages.pages";

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
      <Route path="/student/assignments" element={<MainLayout />}>
        <Route index element={<Assignments />} />
      </Route>
      <Route path="/student/assignments/:id" element={<MainLayout />}>
        <Route index element={<Timeline />} />
      </Route>
      <Route path="/student/assignments/upload/:id" element={<MainLayout />}>
        <Route index element={<UploadAssignments />} />
      </Route>
      <Route path="/student/financial-reports" element={<MainLayout />}>
        <Route index element={<Reports />} />
      </Route>
      <Route path="/student/supports" element={<MainLayout />}>
        <Route index element={<Tickets />} />
      </Route>
      <Route path="/student/supports/:id" element={<MainLayout />}>
        <Route index element={<TicketMessages />} />
      </Route>
    </>,
  ),
);
