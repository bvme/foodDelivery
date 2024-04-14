import { Box, CardContent, Typography, Container, Badge } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useGlobalContext } from "../context";

import { Basket } from "./Basket";
import { useRouter } from "next/router";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "40px",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "200px",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const HeaderUser = () => {
  const { color, setColor } = useGlobalContext();
  const { push } = useRouter();

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingY: "8px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <img src="pineCone.svg" alt="" />

            <Typography
              variant="body2"
              fontWeight={700}
              sx={{
                display: "inline-block",
                paddingX: "16px",
                paddingY: "8px",
                cursor: "pointer",
                color: color.nuur ? "#18BA51" : "inherit",
              }}
              onClick={() => {
                setColor((prevState: any) => ({
                  ...prevState,
                  nuur: true,
                  hool: false,
                  hurgelt: false,
                  sags: false,
                  newtreg: false,
                }));
                push("/");
              }}
            >
              НҮҮР
            </Typography>

            <Typography
              variant="body2"
              fontWeight={700}
              sx={{
                display: "inline-block",
                paddingX: "16px",
                paddingY: "8px",
                cursor: "pointer",
                color: color.hool ? "#18BA51" : "inherit",
              }}
              onClick={() => {
                setColor((prevState: any) => ({
                  ...prevState,
                  nuur: false,
                  hool: true,
                  hurgelt: false,
                  sags: false,
                  newtreg: false,
                }));
                push("foodmenu");
              }}
            >
              ХООЛНЫ ЦЭС
            </Typography>

            <Typography
              variant="body2"
              fontWeight={700}
              sx={{
                display: "inline-block",
                paddingX: "16px",
                paddingY: "8px",
                cursor: "pointer",
                color: color.hurgelt ? "#18BA51" : "inherit",
              }}
              onClick={() => {
                setColor((prevState: any) => ({
                  ...prevState,
                  nuur: false,
                  hool: false,
                  hurgelt: true,
                  sags: false,
                  newtreg: false,
                }));
                push("gooleMap");
              }}
            >
              ХҮРГЭЛТИЙН БҮС
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "8px", padding: "0" }}>
            <Search
              sx={{
                border: "solid",
                width: "260px",
                display: "inline-block",
                borderRadius: "8px",
              }}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Хайх"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <CardContent
              sx={{
                padding: "0",
                color: color.sags ? "#18BA51" : "inherit",
                cursor: "pointer",
              }}
              onClick={() => {
                setColor((prevState: any) => ({
                  ...prevState,
                  nuur: false,
                  hool: false,
                  hurgelt: false,
                  sags: true,
                  newtreg: false,
                }));
              }}
            >
              <Basket></Basket>
            </CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                paddingY: "8px",
                paddingX: "16px",
                cursor: "pointer",
                color: color.newtreg ? "#18BA51" : "inherit",
              }}
              onClick={() => {
                setColor((prevState: any) => ({
                  ...prevState,
                  nuur: false,
                  hool: false,
                  hurgelt: false,
                  sags: false,
                  newtreg: true,
                }));
                push("login");
              }}
            >
              <PersonOutlineIcon sx={{ display: "inline-block" }} />
              <Typography fontWeight={700} sx={{ display: "inline-block" }}>
                Хэрэглэгч
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
