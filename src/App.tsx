import { ToastContainer } from "react-toastify";
import { RoutesMain as Routes } from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Routes />
      <ToastContainer autoClose={1000} />
    </div>
  );
};
