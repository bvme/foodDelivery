import { Box, Container, Hidden, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
import { useGlobalContext } from "../context";
import { useRouter } from "next/router";

export const Footer = () => {
  const openFacebookInNewTab = () => {
    window.open("https://www.facebook.com/", "_blank", "noreferrer");
  };
  const openInstagramInNewTab = () => {
    window.open("https://www.instagram.com/", "_blank", "noreferrer");
  };
  const openXInNewTab = () => {
    window.open("https://twitter.com/", "_blank", "noreferrer");
  };
  const { color, setColor } = useGlobalContext();

  return (
    <>
      <style>{"body {margin : 0}"}</style>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          background: "#18BA51",
          backgroundImage: `url(https://i.ibb.co/HVcsPm2/background.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container
          sx={{
            height: "545px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                gap: "8px",
                justifyContent: "center",
                paddingBottom: "40px",
              }}
            >
              <img src="pineConew.svg" alt="" />
              <Typography variant="h6" fontWeight={700} sx={{ color: "white" }}>
                Food Delivery
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: "40px",
              }}
            >
              <Link
                href="/"
                style={{ color: "white", fontWeight: "600" }}
                onClick={() => {
                  setColor((prevState: any) => ({
                    ...prevState,
                    nuur: true,
                    hool: false,
                    hurgelt: false,
                    sags: false,
                    newtreg: false,
                  }));
                }}
              >
                Нүүр
              </Link>
              <Link href="" style={{ color: "white", fontWeight: "600" }}>
                Холбоо барих
              </Link>
              <Link
                href="foodmenu"
                style={{ color: "white", fontWeight: "600" }}
                onClick={() => {
                  setColor((prevState: any) => ({
                    ...prevState,
                    nuur: false,
                    hool: true,
                    hurgelt: false,
                    sags: false,
                    newtreg: false,
                  }));
                }}
              >
                Хоолны цэс
              </Link>
              <Link
                href="termsAndCon"
                style={{ color: "white", fontWeight: "600" }}
                onClick={() => {
                  setColor((prevState: any) => ({
                    ...prevState,
                    nuur: false,
                    hool: false,
                    hurgelt: false,
                    sags: false,
                    newtreg: false,
                  }));
                }}
              >
                Үйлчилгээний нөхцөл
              </Link>
              <Link
                href="googleMap"
                style={{ color: "white", fontWeight: "600" }}
                onClick={() => {
                  setColor((prevState: any) => ({
                    ...prevState,
                    nuur: false,
                    hool: false,
                    hurgelt: true,
                    sags: false,
                    newtreg: false,
                  }));
                }}
              >
                Хүргэлтийн бүс
              </Link>
              <Link
                href="privacyPolicy"
                style={{ color: "white", fontWeight: "600" }}
                onClick={() => {
                  setColor((prevState: any) => ({
                    ...prevState,
                    nuur: false,
                    hool: false,
                    hurgelt: false,
                    sags: false,
                    newtreg: false,
                  }));
                }}
              >
                Нууцлалын бодлого
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "18px",
                justifyContent: "center",
                paddingBottom: "40px",
              }}
            >
              <FacebookIcon
                sx={{ color: "white", width: "40px", height: "40px" }}
                onClick={openFacebookInNewTab}
              ></FacebookIcon>

              <InstagramIcon
                sx={{ color: "white", width: "40px", height: "40px" }}
                onClick={openInstagramInNewTab}
              ></InstagramIcon>

              <TwitterIcon
                sx={{ color: "white", width: "40px", height: "40px" }}
                onClick={openXInNewTab}
              ></TwitterIcon>
            </Box>
            <Box sx={{ border: "1px solid white" }}></Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingTop: "40px",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                © 2024 Pinecone Foods LLC
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Зохиогчийн эрх хуулиар хамгаалагдсан.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
