import {
  Box,
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import ModalContainer from "../../ModalContainer";
import { useRouter } from "next/router";
function SaleFood2({}) {
  const images = [
    "soupp.jpeg",
    "pexels-julie-aagaard-2097090.jpg",
    "beard.jpeg",
    "burger.webp",
  ];
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  return (
    <Container maxWidth="xl">
      <Box style={{ width: "1200px", height: "274px", gap: "24px" }}>
        <Box
          style={{
            display: "flex",
            width: "1200px",

            height: "64px",
            alignItems: "center",
            justifyContent: "space-between",

            paddingRight: "5px",
          }}
        >
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M8.18645 2.60351C9.15292 -0.00834179 12.8471 -0.00833988 13.8136 2.60351L14.8427 5.38482C15.1466 6.20598 15.794 6.85341 16.6152 7.15727L19.3965 8.18645C22.0083 9.15292 22.0083 12.8471 19.3965 13.8136L16.6152 14.8427C15.794 15.1466 15.1466 15.794 14.8427 16.6152L13.8136 19.3965C12.8471 22.0083 9.15292 22.0083 8.18644 19.3965L7.15727 16.6152C6.85341 15.794 6.20598 15.1466 5.38482 14.8427L2.60351 13.8136C-0.00834179 12.8471 -0.00833988 9.15292 2.60351 8.18645L5.38482 7.15727C6.20598 6.85341 6.85341 6.20598 7.15727 5.38482L8.18645 2.60351Z"
                fill="#18BA51"
              />
            </svg>
            <Typography sx={{ fontWeight: 600, fontSize: "22px" }} variant="h5">
               Хямдралтай
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              color: "green",
              gap: 1,
              alignItems: "center",
            }}
          >
            <Typography
              onClick={() => router.push("/FoodMenu")}
              sx={{
                color: "#18BA51",
                fontSize: "14px",
                cursor: "pointer",
                "&:hover": {
                  color: "#228B22",
                },
              }}
            >
              Бүгдийг харах
            </Typography>

            <img src="botton.svg" alt="" />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
            cursor: "pointer",
          }}
        >
          {images.map((image, index) => (
            <Card
              key={index}
              sx={{
                width: "282px",
                height: "276px",
                display: "flex",
                flexDirection: "column",
              }}
              onClick={() => setShowModal(true)}
            >
              <CardMedia
                component="img"
                height="186"
                image={image}
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
                <Typography variant="h6">Өглөөний хоол</Typography>
                <Typography sx={{ color: "#18BA51" }}>14,800₮</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
      <ModalContainer
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      ></ModalContainer>
    </Container>
  );
}

export default SaleFood2;
