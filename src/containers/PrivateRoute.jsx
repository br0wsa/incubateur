import React, { lazy } from "react";
import { Route, Navigate } from "react-router-dom";

const Dashboard = lazy(() => import("../pages/User/Dashboard"));
const Chat = lazy(() => import("../pages/User/Chat"));
const Account = lazy(() => import("../pages/User/Account"));

const PrivateRoute = ({ isAuthenticated, redirectPath, children }) => {
  return isAuthenticated ? children : <Navigate to={redirectPath} replace />;
};

const DashboardPrivateRoute = (props) => (
  <PrivateRoute isAuthenticated={props.isAuthenticated} redirectPath="/login">
    <Dashboard {...props} />
  </PrivateRoute>
);

const ChatPrivateRoute = (props) => (
  <PrivateRoute isAuthenticated={props.isAuthenticated} redirectPath="/login">
    <Chat {...props} />
  </PrivateRoute>
);

const AccountPrivateRoute = (props) => (
  <PrivateRoute isAuthenticated={props.isAuthenticated} redirectPath="/login">
    <Account {...props} />
  </PrivateRoute>
);

export { DashboardPrivateRoute, ChatPrivateRoute, AccountPrivateRoute };
