import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState, Fragment } from "react";
import Slide from "@mui/material/Slide";
import { Box, Switch, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

export const CreateFood = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button
        sx={{ background: "#18BA51" }}
        variant="contained"
        color="success"
        onClick={handleClickOpen}
      >
        Add new food
      </Button>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: "24px",
            paddingY: "16px",
            width: "587px",
          }}
        >
          <CloseIcon
            sx={{ cursor: "pointer" }}
            onClick={handleClose}
          ></CloseIcon>
          <Typography sx={{ display: "inline-block" }} variant="h5">
            Create new category
          </Typography>
          <Box sx={{ width: "24px" }}></Box>
        </Box>
        <Box
          sx={{
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <Box>
            <Typography
              sx={{ fontWeight: "500", paddingBottom: "8px" }}
              variant="subtitle2"
            >
              Хоолны нэр
            </Typography>
            <TextField
              sx={{ width: "100%", background: "#F4F4F4" }}
              label="Placeholder"
              type="text"
              name="name"
              autoComplete="off"
            ></TextField>
          </Box>
          <Box>
            <Typography
              sx={{ fontWeight: "500", paddingBottom: "8px" }}
              variant="subtitle2"
            >
              Хоолны ангилал
            </Typography>
            <TextField
              sx={{ width: "100%", background: "#F4F4F4" }}
              label="Placeholder"
              type="text"
              name="name"
              autoComplete="off"
            ></TextField>
          </Box>
          <Box>
            <Typography
              sx={{ fontWeight: "500", paddingBottom: "8px" }}
              variant="subtitle2"
            >
              Хоолны орц
            </Typography>
            <TextField
              sx={{ width: "100%", background: "#F4F4F4" }}
              label="Placeholder"
              type="text"
              name="name"
              autoComplete="off"
            ></TextField>
          </Box>
          <Box>
            <Typography
              sx={{ fontWeight: "500", paddingBottom: "8px" }}
              variant="subtitle2"
            >
              Хоолны үнэ
            </Typography>
            <TextField
              sx={{ width: "100%", background: "#F4F4F4" }}
              label="Placeholder"
              type="text"
              name="name"
              autoComplete="off"
            ></TextField>
          </Box>
          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Switch {...label} defaultChecked />
              <Typography sx={{ fontWeight: "500" }} variant="subtitle2">
                Хямдралтай эсэх
              </Typography>
            </Box>
            <TextField
              sx={{ width: "100%", background: "#F4F4F4" }}
              label="Placeholder"
              type="text"
              name="name"
              autoComplete="off"
            ></TextField>
          </Box>
          <Box>
            <Typography
              sx={{ fontWeight: "500", paddingBottom: "8px" }}
              variant="subtitle2"
            >
              Хоолны зураг
            </Typography>
            <Box
              sx={{
                background: "#f5f5f5",
                padding: "8px",
                width: "50%",
                height: "130px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                gap: "8px",
                border: "1px dashed var(--Border-BorderStrong02, #D6D7DC)",
              }}
            >
              <Typography sx={{ fontWeight: "700" }} variant="body1">
                Add image for the food
              </Typography>
              <Button
                sx={{
                  padding: "12px",
                  background: "#393939",
                }}
                variant="contained"
              >
                Add image
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "16px",
            justifyContent: "end",
            padding: "24px",
          }}
        >
          <Button
            sx={{ paddingX: "8px", paddingY: "10px", color: "#3F4145" }}
            variant="text"
            onClick={handleClose}
          >
            clear
          </Button>
          <Button
            sx={{ paddingY: "10px", background: "#393939" }}
            variant="contained"
            onClick={handleClose}
          >
            Continue
          </Button>
        </Box>
      </Dialog>
    </Box>
  );
};
