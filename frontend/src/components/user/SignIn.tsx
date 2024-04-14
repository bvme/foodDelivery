import {
  Box,
  IconButton,
  OutlinedInput,
  Typography,
  Button,
  InputAdornment,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useState } from "react";
import { Form, Formik, FormikHelpers } from "formik";
import { useRouter } from "next/router";

interface Values {
  email: string;
  password: any;
}

export function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState<Values>({
    email: "",
    password: "",
  });
  const { email, password } = value;
  const isFormFilled = email !== "" && password !== "";
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const { push } = useRouter();
  const router = useRouter();
  async function userValidation() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_ENDPOINT}/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          mode: "cors",
          body: JSON.stringify({ email, password }),
        }
      );
      const logInData = await response.json();
      console.log(logInData);
      router.push("/");
    } catch (error) {
      console.error("error", error);
    }
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "32px",
          gap: "48px",
        }}
      >
        <Typography
          style={{
            fontSize: "28px",
            fontFamily: "sans-serif",
            fontWeight: "700",
            color: "#0D1118",
          }}
        >
          Нэвтрэх
        </Typography>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              setSubmitting(false);
            }, 500);
          }}
        >
          {({ errors, touched }) => (
            <Form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "3rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <Typography
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    И-мэйл
                  </Typography>
                  <OutlinedInput
                    id="email"
                    name="email"
                    placeholder="Имэйл хаягаа оруулна уу"
                    type="email"
                    style={{
                      backgroundColor: "#F7F7F8",
                      width: "24rem",
                      borderRadius: "4px",
                      height: "3rem",
                    }}
                    onChange={(event) =>
                      setValue({ ...value, email: event.target.value })
                    }
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <Typography
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    Нууц үг
                  </Typography>
                  <OutlinedInput
                    id="password"
                    name="password"
                    placeholder="Нууц үг"
                    style={{
                      backgroundColor: "#F7F7F8",
                      width: "24rem",
                      borderRadius: "4px",
                      height: "3rem",
                    }}
                    onChange={(event) =>
                      setValue({ ...value, password: event.target.value })
                    }
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <Typography
                    style={{
                      backgroundColor: "white",
                      border: "none",
                      fontSize: "14px",
                      cursor: "pointer",
                      fontFamily: "sans-serif",
                      paddingLeft: "17rem",
                      fontWeight: "400",
                      fontStyle: "normal",
                    }}
                  >
                    Нууц үг сэргээх
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "32px",
                }}
              >
                <Button
                  style={
                    !isFormFilled
                      ? {
                          width: "24rem",
                          backgroundColor: "#EEEFF2",
                        }
                      : {
                          color: "white",
                          background: "#18BA51",
                          width: "24rem",
                        }
                  }
                  disabled={!isFormFilled}
                  type="submit"
                  onClick={userValidation}
                >
                  Нэвтрэх
                </Button>
                <Typography>Эсвэл</Typography>
                <Button
                  style={{
                    width: "24rem",
                    color: "black",
                    border: "1px solid #18BA51",
                  }}
                  onClick={() => push("signup")}
                >
                  Бүртгүүлэх
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
}
