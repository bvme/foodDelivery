import {
  Box,
  IconButton,
  OutlinedInput,
  Typography,
  Button,
  InputAdornment,
  Modal,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useState } from "react";

export function SiModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState("");
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "32px",
            gap: "48px",
            width: "fit-content",
            height: "fit-content",
            backgroundColor: "white",
            borderRadius: "1rem",
          }}
        >
          <Typography
            style={{
              fontSize: "28px",
              fontFamily: "sans-serif",
              fontWeight: "bold",
            }}
          >
            Нэвтрэх
          </Typography>
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
                Имэйл
              </Typography>
              <OutlinedInput
                placeholder="Имэйл хаягаа оруул"
                style={{
                  backgroundColor: "#F7F7F8",
                  width: "24rem",
                  borderRadius: "4px",
                  border: "1px #ECEDF0",
                  height: "3rem",
                }}
                onChange={(event) => setValue(event.target.value)}
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
                placeholder="Нууц үг"
                style={{
                  backgroundColor: "#F7F7F8",
                  width: "24rem",
                  borderRadius: "4px",
                  border: " #ECEDF0",
                  height: "3rem",
                }}
                onChange={(event) => setValue(event.target.value)}
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
                !value
                  ? {
                      width: "24rem",
                      color: "gray",
                      backgroundColor: "#EEEFF2",
                    }
                  : {
                      color: "white",
                      background: "#18BA51",
                      width: "24rem",
                    }
              }
              disabled={!value}
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
            >
              Бүртгүүлэх
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
