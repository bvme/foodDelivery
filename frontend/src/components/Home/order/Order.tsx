import { Container, Card, Box, CardContent, Typography } from "@mui/material";

import { useState } from "react";

import UnstyledSelectIntroduction from "../Layout/optionDistrict/District";
import UnstyledSelectIntroduction2 from "../Layout/optionDistrict/District";
import UnstyledSelectIntroduction3 from "../Layout/optionDistrict/District";
import UnstyledTextareaIntroduction4 from "../Layout/optionDistrict/TextInput";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import NumberInputIntroduction from "../Layout/optionDistrict/NumberInput";
import CustomizedCheckbox from "@/components/Layouts/Checkers";
function Order() {
  const [checked, setChecked] = useState(false);
  const [check, setCheck] = useState(false);
  const handleChange = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setChecked(event.target.checked);
  };

  const handleChange1 = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setCheck(event.target.checked);
  };
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            width: "392px",
            height: "60px",

            paddingX: "20px",
            paddingY: "16px",
            display: "flex",
            gap: "16px",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Add shadow
          }}
        >
          <CustomizedCheckbox></CustomizedCheckbox>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: "14px", color: "#8B8E95" }}>
              Алхам 1
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              Хаягийн мэдээлэл оруулах
            </Typography>
            <Typography sx={{ fontSize: "16px", color: "#0468C8" }}>
              Хүлээгдэж байна
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "392px",
            padding: "20px",
            height: "621px",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Add shadow
            borderRadius: "10px",
            gap: "40px",
          }}
        >
          <Box
            sx={{
              width: "392px",
              height: "209px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <Typography>Хаяг аа оруулна уу</Typography>
            <UnstyledSelectIntroduction></UnstyledSelectIntroduction>
            <UnstyledSelectIntroduction2></UnstyledSelectIntroduction2>
            <UnstyledSelectIntroduction3></UnstyledSelectIntroduction3>
          </Box>
          <Box
            sx={{
              width: "392px",
              height: "209px",
              display: "flex",
              flexDirection: "column",
              gap: "32px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <Typography>Нэмэлт мэдээлэл</Typography>
              <UnstyledTextareaIntroduction4></UnstyledTextareaIntroduction4>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <Typography>Утасны дугаар*</Typography>
              <NumberInputIntroduction></NumberInputIntroduction>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              Төлбөр төлөх
              <Box
                sx={{
                  display: "flex",
                  fontSize: "16px",
                  justifyContent: "space-between",
                  color: "#8B8E95",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox checked={checked} onChange={handleChange} />
                  }
                  label="Бэлнээр"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={check} onChange={handleChange1} />
                  }
                  label="Картаар"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            width: "392px",
            height: "60px",

            paddingX: "20px",
            paddingY: "16px",
            display: "flex",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            backgroundColor: "white",
            gap: "16px",
          }}
        >
          <CustomizedCheckbox></CustomizedCheckbox>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: "14px", color: "#8B8E95" }}>
              Алхам 2
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              Захиалга баталгаажуулах
            </Typography>
            <Typography sx={{ fontSize: "16px", color: "#0468C8" }}>
              Хүлээгдэж байна
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "392px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            padding: "20px",
            height: "621px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "384px",
              height: "153px",
              border: "solid 1px #D6D8DB",
              display: "flex",
              borderLeft: "none",
              borderRight: "none",
              justifyContent: "center",
              alignItems: "center",

              paddingY: "16px",
              gap: "16px",
            }}
          >
            <Box sx={{}}>
              <img
                style={{
                  width: "204px",
                  height: "131px",
                  display: "flex",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                src="Image (1).png"
                alt=""
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                  Main Pizza
                </Typography>
                <Typography
                  sx={{ color: "#18BA51", fontSize: "18px", fontWeight: "600" }}
                >
                  34,800₮
                </Typography>
              </Box>
              <Typography sx={{ fontSize: "14px", color: "#767676" }}>
                Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box
                sx={{
                  width: "187px",
                  height: "54px",

                  fontSize: "18px",
                }}
              >
                <Typography sx={{}}>Нийт төлөх дүн</Typography>
                <Typography sx={{ fontWeight: 700 }}>34,800₮</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "187px",
                height: "54px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "rgba(28, 32, 36, 0.24)",
                backgroundColor: "#EEEFF2",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor: "#BBC2C9",
                },
              }}
            >
              <Typography>Захиалах</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
export default Order;
