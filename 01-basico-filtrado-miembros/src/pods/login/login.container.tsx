import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../router";
import { Login } from "./login.component";

//Container - Logica de negocio
export const LoginContainer = () => {
  const navigate = useNavigate();

  const onLogin = (username: string, password: string) => {
    if (username === "admin" && password === "test") {
      navigate(appRoutes.menu);
    } else {
      alert("User: admin / Password: test");
    }
  };

  return (
    <>
      <Login onLogin={onLogin}></Login>
    </>
  );
};
