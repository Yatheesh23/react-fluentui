// Login.js

import React, { useState } from "react";
import {
  Card,
  CardPreview,
  Input,
  Label,
  Button,
  Toaster,
  useToastController,
  useId,
  Toast,
  ToastTitle,
  Spinner,
} from "@fluentui/react-components";
import { customeCardStyles } from "../../common/CustomeStyles";
import { useNavigate } from "react-router-dom";
import "./loginStyles.css";

const Login = () => {
  const cardStyles = customeCardStyles();
  const navigate = useNavigate();
  const toasterId = useId("toaster");
  const { dispatchToast } = useToastController(toasterId);

  const [loading, isLoading] = useState(false);
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    isLoading(true);
    if (
      loginCredentials.email === "admin" &&
      loginCredentials.password === "admin"
    ) {
      dispatchToast(
        <Toast>
          <ToastTitle>Login successfully</ToastTitle>
        </Toast>,
        { intent: "success" }
      );
      setTimeout(() => {
        isLoading(false);
        navigate("/dashboard");
      }, 1000);
    } else {
      setTimeout(() => {
        dispatchToast(
          <Toast>
            <ToastTitle>Invalid credentials..</ToastTitle>
          </Toast>,
          { intent: "error" }
        );
        isLoading(false);
      }, 1000);
    }
  };

  const handleInputChange = (inputType, e) => {
    if (inputType === "email") {
      setLoginCredentials((old) => ({ ...old, email: e.target.value }));
    } else {
      setLoginCredentials((old) => ({ ...old, password: e.target.value }));
    }
  };

  return (
    <>
      <div className="ms-Grid loginMain">
        <Toaster
          toasterId={toasterId}
          position="top-end"
          pauseOnHover
          pauseOnWindowBlur
          timeout={1000}
        />
        <div className="spinnerContainer">
          {loading ? (
            <Spinner labelPosition="below" label="Loading..." />
          ) : null}
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg12 first-col">
            <Card className={cardStyles.card}>
              <CardPreview className={cardStyles.cardHeader}>
                <h1>Login</h1>
                <p style={{ margin: "1em 0" }}>
                  Sign in using official mail id!
                </p>
                <div>
                  <form
                    noValidate
                    autoComplete="off"
                    className={cardStyles.formStyles}
                  >
                    <div>
                      <Label>Email</Label>
                      <Input
                        placeholder="Enter email"
                        type="email"
                        value={loginCredentials.email}
                        onChange={(e) => handleInputChange("email", e)}
                      />
                    </div>
                    <div>
                      <Label>Password</Label>
                      <Input
                        placeholder="Enter password"
                        type="password"
                        value={loginCredentials.password}
                        onChange={(e) => handleInputChange("password", e)}
                      />
                    </div>
                    <div className="loginContainer">
                      <Button
                        onClick={handleLogin}
                        appearance="primary"
                        className={cardStyles.loginBtn}
                      >
                        Login
                      </Button>
                    </div>
                  </form>
                </div>
              </CardPreview>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
