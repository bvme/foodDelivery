import React from "react";
import { useState } from "react";
import ModalContainer from "@/components/Home/ModalContainer";
import Buttons from "../components/Home/Layout/FilterButt";
import {
  Box,
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import Data from "../components/Home/FoodData";
import { getLoginLayout } from "@/components/GetLayOut/LoginLayout";

type FoodItemType = {
  id: number;
  title: string;
  category: string;
  price: number;
  img: any;
};

function FoodMenu() {
  const [showModal, setShowModal] = useState(false);

  const [item, setItems] = useState(Data);
  const menuItems = Array.from(
    new Set(Data.map((val: FoodItemType) => val.category))
  );

  const filterItems = (cat: string) => {
    const newItems = Data.filter((newval) => newval.category === cat);
    setItems(newItems);
  };
  return (
    <>
      <Container
        style={{
          width: "100%",
          height: "100%",
          gap: 30,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 3,
            alignItems: "center",
            width: 1441,
            height: 107,
          }}
        >
          <Buttons
            menuItems={menuItems}
            filterItems={filterItems}
            setItems={setItems}
          />
        </Box>
        <Box
          onClick={() => setShowModal(true)}
          sx={{
            display: "flex",
            width: "1200px",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            paddingBottom: "120px",
            flexWrap: "wrap",
          }}
        >
          {item.map((val) => (
            <Card
              key={val.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "282px",
                height: "256px",
              }}
            >
              <CardMedia
                component="img"
                height="186"
                src={val.img}
                alt=""
                sx={{
                  cursor: "pointer",
                  transition: "transform 200ms ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    transition: "transform 200ms ease-in-out",
                  },
                }}
              />
              <CardContent style={{ paddingLeft: 10, lineHeight: ".75rem" }}>
                <Typography variant="h6">{val.title}</Typography>
                <Typography sx={{ color: "#18BA51" }}>{val.price}</Typography>
              </CardContent>
              {/* <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "282px",
                  height: "56px",

                  paddingLeft: "15px",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box
                    sx={{
                      fontSize: "18px",
                      fontWeight: 600,
                      letterSpacing: "0.05rem",
                    }}
                  >
                    {val.title}
                  </Box>
                  <Box sx={{ fontSize: "18px", color: "#18BA51" }}>
                    {val.price}
                  </Box>
                </Box>
              </Box> */}
            </Card>
          ))}
        </Box>
      </Container>
      <ModalContainer
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      ></ModalContainer>
    </>
  );
}
FoodMenu.getLayout = getLoginLayout;
export default FoodMenu;
