import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout";
import LayoutNew from "../layout/index_new";
import Login from "../pages/login";
import { AuthProvider, RequireAuth } from "./auth";
import ProjectDetail from "../pages/project-detail";
import { PROJECT_STATUS } from "../types/enumeration";
import ProjectManagement from "../pages/project-management/project-management";
// import { Dashboard } from "../pages/dashboard-bak/dashboard";
import  Dashboard  from "../pages/dashboard"

const APPRouter = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<LayoutNew />}>
            {/* <Route
              path="/project/:projectId"
              element={
                <RequireAuth>
                  <ProjectDetail
                    project={{
                      name: "Project A",
                      company_name: "Company Name",
                      status: PROJECT_STATUS.IN_PROGRESS,
                    }}
                  />
                </RequireAuth>
              }
            /> */}
            {/* <Route
              path="/proj-management"
              element={
                <RequireAuth>
                  <ProjectManagement />
                </RequireAuth>
              }
            /> */}
            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default APPRouter;
