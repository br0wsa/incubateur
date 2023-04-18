import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types"; // Add this import

const Dashboard = lazy(() => import("../pages/User/Dashboard"));
const Chat = lazy(() => import("../pages/User/Chat"));
const Account = lazy(() => import("../pages/User/Account"));

const PrivateRoute = ({ isAuthenticated, redirectPath, children }) => {
  return isAuthenticated ? children : <Navigate to={redirectPath} replace />;
};

// Add the propType for PrivateRoute
PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  redirectPath: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const DashboardPrivateRoute = (props) => (
  <PrivateRoute isAuthenticated={props.isAuthenticated} redirectPath="/login">
    <Dashboard {...props} />
  </PrivateRoute>
);

DashboardPrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const ChatPrivateRoute = (props) => (
  <PrivateRoute isAuthenticated={props.isAuthenticated} redirectPath="/login">
    <Chat {...props} />
  </PrivateRoute>
);

ChatPrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const AccountPrivateRoute = (props) => (
  <PrivateRoute isAuthenticated={props.isAuthenticated} redirectPath="/login">
    <Account {...props} />
  </PrivateRoute>
);

AccountPrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export { DashboardPrivateRoute, ChatPrivateRoute, AccountPrivateRoute };
