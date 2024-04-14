import { Container, Card, Box, CardContent, Typography } from "@mui/material";
import UnstyledTextareaIntroduction4 from "../Layout/optionDistrict/TextInput";

import NumberInputIntroduction from "../Layout/optionDistrict/NumberInput";
import CustomizedCheckbox from "@/components/Layouts/Checkers";
function OrderHistory() {
  return (
    <Container
      sx={{
        width: "90vw",
        marginY: "100px",
        display: "flex",
        justifyContent: "center",
        gap: "180px",
        backgroundColor: "#FFF",

        alignItems: "center",
      }}
    >
      <Box>
        <Box
          sx={{
            width: "392px",
            padding: "20px",
            height: "681px",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Add shadow
            borderRadius: "10px",
            gap: "16px",
          }}
        >
          {" "}
          <Typography sx={{ fontSize: "20px" }}>Захиалгын түүх</Typography>
          <Box
            sx={{
              width: "100%",
              height: "80px",
              display: "flex",
              gap: "8px",
              alignItems: "center",
              border: "solid 2px black",
              borderBottomColor: "#0468C8",
              borderTopColor: "white",
              borderRightColor: "white",
              borderLeftColor: "white",
            }}
          >
            <CustomizedCheckbox></CustomizedCheckbox>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "198px",
                height: "48px",
                fontSize: "16px",

                color: "#272727",
              }}
            >
              <Typography sx={{}}>Захиалга #23790</Typography>
              <Typography sx={{ color: "#0468C8", fontSize: "14px" }}>
                Хүлээгдэж буй
              </Typography>
            </Box>
            <Typography>2024/04/26</Typography>
          </Box>
          <Box
            sx={{
              width: "392px",
              height: "209px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          ></Box>{" "}
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            width: "392px",
            padding: "20px",
            height: "681px",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Add shadow
            borderRadius: "10px",
            gap: "16px",
          }}
        >
          {" "}
          <Typography sx={{ fontSize: "20px" }}>
            {" "}
            Захиалгын дэлгэрэнгүй
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "80px",
              display: "flex",
              justifyContent: "space-between",

              alignItems: "center",
              border: "solid 2px red",
              borderBottomColor: "#D6D8DB",
              borderTopColor: "white",
              borderRightColor: "white",
              borderLeftColor: "white",
            }}
          >
            <Typography sx={{}}>Food name</Typography>
            <Typography>(1)</Typography>
          </Box>
          <Box
            sx={{
              width: "392px",
              height: "209px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          ></Box>
        </Box>
      </Box>
    </Container>
  );
}

export default OrderHistory;
