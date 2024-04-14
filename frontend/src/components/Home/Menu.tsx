import { useState } from "react";
import Content1 from "./Layout/cardContent/CardContent";
import Content2 from "./Layout/cardContent/CardContent2";
import Content3 from "./Layout/cardContent/CardContent3";
import Content4 from "./Layout/cardContent/CardContent4";
import { Container, Card, Box, CardContent, Typography } from "@mui/material";
import SaleFood from "./Layout/salefood/SaleFood";
import SaleFood2 from "./Layout/salefood/SaleFood2";
import SaleFood3 from "./Layout/salefood/SaleFood3";
import SaleFood4 from "./Layout/salefood/SaleFood4";
import FoodMenu from "./ModalContainer";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Box
        style={{
          width: "100%",
          height: "100%",

          display: "flex",
          flexDirection: "column",
          gap: "125px",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            width: "100%",
            height: "77vh",
            backgroundColor: "#18BA51",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: `url(https://i.ibb.co/HVcsPm2/background.png)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Container
            sx={{
              display: "flex",
              position: "absolute",
              gap: 25,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <Box
                sx={{
                  color: "white",
                  fontSize: 27,
                  width: 384,
                  height: 114,
                  lineHeight: "1rem",
                }}
              >
                <Typography variant="h2">Pinecone</Typography>
                <Typography variant="h2">Food Delivery</Typography>
              </Box>
              <Box
                sx={{
                  borderBottom: "solid",
                  borderBlockColor: "#D1D7DB",
                  width: 383,
                }}
              ></Box>
              <Typography
                sx={{
                  color: "white",
                  width: 384,
                  height: 114,
                  fontSize: 22,
                  letterSpacing: "0.1rem",
                }}
              >
                Horem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Box>
            <Box sx={{ position: "relative" }}>
              <img src="image 13.png" alt="" />
              <Box sx={{ position: "absolute", top: 170, left: 300 }}>
                <img src="image 12.png" alt="" />
              </Box>
            </Box>
          </Container>
        </Card>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "47px",
            width: 1200,
            cursor: "pointer",
          }}
        >
          <Content1></Content1>
          <Content2></Content2>
          <Content3></Content3>
          <Content4></Content4>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "80px",
            flexDirection: "column",
            paddingBottom: "120px",
          }}
        >
          <SaleFood></SaleFood>
          <SaleFood2></SaleFood2>
          {/* <SaleFood3></SaleFood3>
          <SaleFood4></SaleFood4> */}
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
