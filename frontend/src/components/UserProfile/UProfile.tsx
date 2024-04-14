import {
  Container,
  Avatar,
  Box,
  Typography,
  Button,
  IconButton,
  TextField,
} from "@mui/material";
import { SignOutUser } from "./SignOut";

// import { ThemeProvider, createTheme } from "@mui/system";
import Alert from "@mui/material/Alert";
import { useState, useEffect } from "react";
import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

interface UserDataTypes {
  name: string;
  phone: number | string;
  email: string;
  isEditing: {
    name: boolean;
    phone: boolean;
    email: boolean;
  };
}
export function UserProfile() {
  const [open, setOpen] = useState(false);
  const [save, setSave] = useState(false);
  const [saveUserData, setSaveUserData] = useState<UserDataTypes>();

  const [userData, setUserData] = useState<UserDataTypes>({
    name: "",
    phone: "",
    email: "",
    isEditing: {
      name: false,
      phone: false,
      email: false,
    },
  });

  useEffect(() => {
    prevUserData();
  }, []);
  const prevUserData = async () => {
    try {
      const getUserData = await fetch(
        `${process.env.NEXT_PUBLIC_ENDPOINT}/users/userprofile`,
        {
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          method: "GET",
          mode: "cors",
          // body: JSON.stringify({ ...userData }),
        }
      );
      const response: Promise<UserDataTypes> = await getUserData.json();
      setUserData(await response);
    } catch (err) {
      console.error("Error", err);
    }
  };

  const handleEdit = (field: keyof UserDataTypes) => {
    setUserData((prevData) => ({
      ...prevData,
      isEditing: {
        ...prevData.isEditing,
        [field]: true,
      },
    }));
  };

  // field: keyof UserDataTypes, value: string | number
  const handleSave = async () => {
    try {
      const saveUserData = await fetch(
        `${process.env.NEXT_PUBLIC_ENDPOINT}/users/userprofile`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData), // Send updated user data
        }
      );
      if (!saveUserData.ok) {
        throw new Error("Failed to save user data");
      }
      setSave(true);
    } catch (error) {
      console.error("Error", error);
      // Handle error, e.g., display error message to the user
    }
  };

  //   setUserData((prevData) => ({
  //     ...prevData,
  //     isEditing: {
  //       name: false,
  //       phone: false,
  //       email: false,
  //     },
  //     // name: userData.isEditing.name ? userData.name : prevData.name,
  //     // phone: userData.isEditing.phone ? userData.phone : prevData.phone,
  //     // email: userData.isEditing.email ? userData.email : prevData.email,
  //   }));
  //   setSave(true);
  //   setSaveUserData(userData);
  // };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const theme = {
    color: {
      primary: "#888A99",
      secondary: "#0D1118",
    },

    fontSize: {
      primary: "12px",
      secondary: "16px",
    },
  };

  return (
    <>
      <Box
        sx={{
          m: 0,
          display: "flex",

          alignItems: "center",
          justifyContent: "center",
          pb: "120px",
        }}
      >
        <Container
          sx={{
            height: "100%",
            m: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {save && (
            <Alert
              sx={{
                position: "fixed",
                top: "50px",
                fontSize: "16px",
                zIndex: "1",
                bgcolor: "white",
              }}
              severity="success"
            >
              Мэдээлэл амжилттай хадгалагдлаа.
            </Alert>
          )}

          <Box
            component="section"
            sx={{
              marginTop: "76px",
              width: 432,
              height: 192,
              p: 0,

              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box display="flex" alignItems="center" position={"relative"}>
              <Box
                sx={{
                  borderRadius: "50%",
                  bgcolor: "white",
                  border: "1px solid #EEEFF2",
                  p: "5px",
                  position: "absolute",
                  bottom: 0,
                  zIndex: 1,
                  right: 0,
                }}
              >
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageUpload}
                  id="avatar-upload"
                />
                <label htmlFor="avatar-upload">
                  <EditIcon sx={{ color: "#18BA51" }} />
                </label>
              </Box>
              <Avatar
                sx={{ width: "120px", height: "120px" }}
                alt="Cindy Baker"
                src="/Photo.svg"
              />
            </Box>
            <Typography
              sx={{ marginTop: "40px", fontWeight: 700 }}
              variant="h5"
            >
              {userData.name.valueOf()}
            </Typography>
          </Box>

          <Box
            component="section"
            sx={{
              width: 432,
              height: "100%",
              p: 0,
              border: "1px dashed grey",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <List
              sx={{
                paddingY: "20px",
                width: "100%",
                maxWidth: 360,
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <ListItem sx={{ bgcolor: "#F6F6F6", borderRadius: "4px" }}>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "white", color: "black" }}>
                    <PersonOutlinedIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primaryTypographyProps={{
                    color: theme.color.primary,
                    fontSize: theme.fontSize.primary,
                  }}
                  secondaryTypographyProps={{
                    color: theme.color.secondary,
                    fontSize: theme.fontSize.secondary,
                  }}
                  primary="Таны нэр"
                  secondary={
                    userData.isEditing.name ? (
                      <TextField
                        sx={{ borderStyle: "none" }}
                        value={userData.name}
                        onChange={(e) =>
                          setUserData({ ...userData, name: e.target.value })
                        }
                      />
                    ) : (
                      userData.name
                    )
                  }
                />

                {/* Save button for each data */}

                {/* {userData.isEditing.name ? (
                  <Button onClick={() => handleSave("name", userData.name)}>
                    <CheckCircleOutlineIcon sx={{ color: "#18BA51" }} />
                  </Button>
                ) : ( */}
                <Button>
                  <Avatar sx={{ bgcolor: "#F6F6F6", color: "#18BA51" }}>
                    <EditIcon onClick={() => handleEdit("name")} />
                  </Avatar>
                </Button>
                {/* // )} */}
              </ListItem>
              <ListItem sx={{ bgcolor: "#F6F6F6", borderRadius: "4px" }}>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "white", color: "black" }}>
                    <LocalPhoneOutlinedIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primaryTypographyProps={{
                    color: theme.color.primary,
                    fontSize: theme.fontSize.primary,
                  }}
                  secondaryTypographyProps={{
                    color: theme.color.secondary,
                    fontSize: theme.fontSize.secondary,
                  }}
                  primary="Утасны дугаар"
                  secondary={
                    userData.isEditing.phone ? (
                      <TextField
                        sx={{ borderStyle: "none" }}
                        value={userData.phone}
                        onChange={(e) =>
                          setUserData({ ...userData, phone: e.target.value })
                        }
                      />
                    ) : (
                      userData.phone
                    )
                  }
                />

                <Button>
                  <Avatar sx={{ bgcolor: "#F6F6F6", color: "#18BA51" }}>
                    <EditIcon onClick={() => handleEdit("phone")} />
                  </Avatar>
                </Button>
              </ListItem>

              <ListItem sx={{ bgcolor: "#F6F6F6", borderRadius: "4px" }}>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "white", color: "black" }}>
                    <ForwardToInboxOutlinedIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primaryTypographyProps={{
                    color: theme.color.primary,
                    fontSize: theme.fontSize.primary,
                  }}
                  secondaryTypographyProps={{
                    color: theme.color.secondary,
                    fontSize: theme.fontSize.secondary,
                  }}
                  primary="Имэйл хаяг"
                  secondary={
                    userData.isEditing.email ? (
                      <TextField
                        sx={{ borderStyle: "none" }}
                        value={userData.email}
                        onChange={(e) =>
                          setUserData({ ...userData, email: e.target.value })
                        }
                      />
                    ) : (
                      userData.email
                    )
                  }
                />
                <Button>
                  <Avatar sx={{ bgcolor: "#F6F6F6", color: "#18BA51" }}>
                    <EditIcon onClick={() => handleEdit("email")} />
                  </Avatar>
                </Button>
              </ListItem>
              {/* 
              {userData.isEditing.name ||
              userData.isEditing.phone ||
              userData.isEditing.email ? (
                <Button
                  disabled={false}
                  onClick={() => handleSave("name", userData.name)}
                  variant="contained"
                  sx={{
                    mt: "40px",
                    bgcolor: "#18BA51",
                    color: "white",
                    paddingX: "8px",
                    paddingY: "16px",
                  }}
                >
                  Хадгалах
                </Button>
              ) : (
                <Button
                  disabled={true} // Disable the button when no field is being edited
                  variant="outlined"
                  sx={{
                    mt: "40px",
                    bgcolor: "white",
                    color: "white",
                    paddingX: "8px",
                    paddingY: "16px",
                  }}
                >
                  Хадгалах
                </Button>
              )} */}

              <Button
                disabled={
                  !userData.isEditing.name &&
                  !userData.isEditing.phone &&
                  !userData.isEditing.email
                }
                onClick={handleSave}
                variant="contained"
                sx={{
                  mt: "40px",
                  bgcolor: "#18BA51",
                  color: "white",
                  paddingX: "8px",
                  paddingY: "16px",
                }}
              >
                Хадгалах
              </Button>
              <ListItem sx={{ bgcolor: "white", borderRadius: "4px" }}>
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      bgcolor: "white",
                      color: "black",
                      border: "1px solid #F6F6F6 ",
                    }}
                  >
                    <RestoreOutlinedIcon />
                  </Avatar>
                </ListItemAvatar>
                <Link href={"/OrderHistory"}>
                  <ListItemText
                    secondaryTypographyProps={{
                      color: theme.color.secondary,
                      fontSize: theme.fontSize.secondary,
                    }}
                    secondary="Захиалгын түүх"
                  />
                </Link>
              </ListItem>

              <SignOutUser open={open} onClose={handleClose} />
              <Button onClick={handleClickOpen}>
                <ListItem sx={{ bgcolor: "white", borderRadius: "4px" }}>
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        bgcolor: "white",
                        color: "black",
                        border: "1px solid #F6F6F6 ",
                      }}
                    >
                      <RestoreOutlinedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    secondaryTypographyProps={{
                      color: theme.color.secondary,
                      fontSize: theme.fontSize.secondary,
                    }}
                    secondary="Гарах"
                  />
                </ListItem>
              </Button>
            </List>
          </Box>
        </Container>
      </Box>
    </>
  );
}
