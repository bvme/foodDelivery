import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import { NewCategory } from ".";
import { useGlobalContext } from "../context";
import { CreateFood } from "./CreateFood";

//=====================================
const options = [{ delete: "Delete" }, { edit: "Edit" }];
const ITEM_HEIGHT = 48;
//=====================================
export const AdminMenu = () => {
  const { isOpen, openCNC } = useGlobalContext();

  return (
    <>
      <Box>
        {isOpen && <NewCategory></NewCategory>}
        <Container sx={{ display: "flex", minHeight: "1110px" }}>
          <Box
            sx={{
              width: "22.4%",
              border: "solid",
              paddingX: "24px",
              paddingY: "26px",
            }}
          >
            <Typography
              sx={{ fontWeight: "700", marginBottom: "40px" }}
              variant="h5"
            >
              Food menu
            </Typography>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderRadius: "8px",
                  marginBottom: "26px",
                  border: "solid var(--Stroke-01, #D6D8DB)",
                  paddingX: "16px",
                  paddingY: "8px",
                  cursor: "pointer",
                }}
                onClick={() => openCNC()}
              >
                <AddIcon sx={{ color: "#5E6166" }}></AddIcon>
                <Typography sx={{ fontSize: "18px", color: "#5E6166" }}>
                  Create new category
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "75%",
              border: "solid",
              background: "#f5f5f5",
              paddingLeft: "16px",
              paddingY: "24px",
            }}
          >
            <Box
              sx={{
                paddingY: "16px",
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "32px",
              }}
            >
              <Typography sx={{ fontSize: "22px", fontWeight: "700" }}>
                Breakfast
              </Typography>
              <CreateFood></CreateFood>
            </Box>
            <Box>esrdres</Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
