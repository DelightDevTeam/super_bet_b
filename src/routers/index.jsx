import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/Home";
import ExchangePage from "../pages/Exchange";
import ExchangeBank from "../pages/ExchangeBank";
import TopUpPage from "../pages/TopUp";
import WithDrawPage from "../pages/WithDraw";
import ProfilePage from "../pages/Profile";
import HistoryPage from "../pages/History";
import WinLossReportPage from "../pages/WinLossReport";
import Login from "../pages/Auth/Login";
import Games from "../pages/Games";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/games/:provider/:type",
        element: <Games />,
      },
      {
        path: "/exchange",
        element: <ExchangePage />,
      },
      {
        path: "/exchange-bank",
        element: <ExchangeBank />,
      },
      {
        path: "/top-up",
        element: <TopUpPage />,
      },
      {
        path: "/with-draw",
        element: <WithDrawPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/history",
        element: <HistoryPage />,
      },
      {
        path: "/win-loss-report",
        element: <WinLossReportPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default routers;
