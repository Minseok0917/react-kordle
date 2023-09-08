import { createBrowserRouter } from "react-router-dom";
import Kordle from "@/pages/Kordle";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Kordle />,
  },
]);
