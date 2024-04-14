import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";

interface Values {
  name: string;
  email: string;
  address: string;
  password: string;
  repassword: string;
}

export function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState<Values>({
    name: "",
    email: "",
    address: "",
    password: "",
    repassword: "",
  });
  const { name, email, address, password, repassword } = value;
  const isFormFilled =
    name !== "" &&
    email !== "" &&
    address !== "" &&
    password !== "" &&
    repassword !== "";

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const router = useRouter();
  async function AddUser() {
    if (password !== repassword) {
      return alert("Password n zurchluu. MUI iin alertiig yaj nemdinbe???");
    }
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/users/signup`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        mode: "cors",
        body: JSON.stringify(value),
      }
    );
    const signUpData = await response.json();
    console.log(signUpData);
    router.push("/");
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          gap: "3rem",
        }}
      >
        <Typography
          sx={{
            color: "#0D1118",
            fontWeight: "700",
            fontSize: "28px",
            fontFamily: "sans-serif",
          }}
        >
          Бүртгүүлэх
        </Typography>
        <Formik
          initialValues={{
            name: "",
            email: "",
            address: "",
            password: "",
            repassword: "",
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
                  gap: "1rem",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    Нэр
                  </Typography>
                  <OutlinedInput
                    id="name"
                    name="name"
                    placeholder="Нэрээ оруулна уу"
                    style={{
                      backgroundColor: "#F7F7F8",
                      border: "#ECEDF0",
                      width: "24rem",
                      height: "3rem",
                    }}
                    onChange={(event) =>
                      setValue({ ...value, name: event.target.value })
                    }
                    value={name}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    Имэйл
                  </Typography>
                  <OutlinedInput
                    id="NewEmail"
                    name="NewEmail"
                    placeholder="И-мэйл хаягаа оруулна уу"
                    style={{
                      backgroundColor: "#F7F7F8",
                      border: "#ECEDF0",
                      width: "24rem",
                      height: "3rem",
                    }}
                    onChange={(event) =>
                      setValue({ ...value, email: event.target.value })
                    }
                    type="email"
                    value={email}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    Хаяг
                  </Typography>
                  <OutlinedInput
                    id="address"
                    name="address"
                    placeholder="Та хаягаа оруулна уу"
                    style={{
                      backgroundColor: "#F7F7F8",
                      border: "#ECEDF0",
                      width: "24rem",
                      height: "3rem",
                    }}
                    onChange={(event) =>
                      setValue({ ...value, address: event.target.value })
                    }
                    value={address}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    Нууц үг
                  </Typography>
                  <OutlinedInput
                    id="NewPassword"
                    name="NewPassword"
                    placeholder="Нууц үгээ оруулна уу"
                    style={{
                      backgroundColor: "#F7F7F8",
                      border: "#ECEDF0",
                      width: "24rem",
                      height: "3rem",
                    }}
                    onChange={(event) =>
                      setValue({ ...value, password: event.target.value })
                    }
                    value={password}
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
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    Нууц үг давтах
                  </Typography>
                  <OutlinedInput
                    placeholder="Нууц үгээ оруулна уу"
                    style={{
                      backgroundColor: "#F7F7F8",
                      border: "#ECEDF0",
                      width: "24rem",
                      height: "3rem",
                    }}
                    onChange={(event) =>
                      setValue({ ...value, repassword: event.target.value })
                    }
                    value={repassword}
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
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                }}
              >
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Үйлчилгээний нөхцөл зөвшөөрөх"
                />
                <Button
                  style={
                    !isFormFilled
                      ? {
                          backgroundColor: "#EEEFF2",
                          width: "24rem",
                        }
                      : {
                          color: "white",
                          backgroundColor: "#18BA51",
                          width: "24rem",
                        }
                  }
                  disabled={!isFormFilled}
                  type="submit"
                  onClick={AddUser}
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
