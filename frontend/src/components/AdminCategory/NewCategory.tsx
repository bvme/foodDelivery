import { Box, Button, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useGlobalContext } from "../context";
export const NewCategory = () => {
  const { close } = useGlobalContext();
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          background: "rgba(0, 0, 0, 0.50)",
          width: "100vw",
          height: "100vh",
          marginTop: "-66px",
          marginLeft: "-8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "587px", background: "white", borderRadius: "16px" }}>
          <Box
            sx={{
              paddingX: "24px",
              paddingY: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <CloseIcon
              sx={{ cursor: "pointer" }}
              onClick={() => close()}
            ></CloseIcon>
            <Typography sx={{ display: "inline-block" }} variant="h5">
              Create new category
            </Typography>
            <Box sx={{ width: "24px" }}></Box>
          </Box>
          <Box sx={{ padding: "24px" }}>
            <Typography
              sx={{ fontWeight: "500", paddingBottom: "8px" }}
              variant="subtitle2"
            >
              Category name
            </Typography>
            <TextField
              sx={{ width: "100%", background: "#F4F4F4" }}
              label="Placeholder"
              type="text"
              name="name"
              autoComplete="off"
            ></TextField>
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
            >
              clear
            </Button>
            <Button
              sx={{ paddingY: "10px", background: "#393939" }}
              variant="contained"
            >
              Continue
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
