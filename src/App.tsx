import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/routes";

//bom de usar o export sem ser o default
export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

