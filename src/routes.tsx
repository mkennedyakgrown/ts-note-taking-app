import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import NewNote from "./pages/NewNote";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <App /> },
      { path: "/new", element: <NewNote /> },
    ],
  },
];

export default routes;
