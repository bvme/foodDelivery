import { Container, Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { useState } from "react";
import { CardMedia } from "@mui/material";
import Data from "./FoodData";
type FoodMenuProps = {
  onClose: () => void;
  isVisible: boolean;
};
type FoodItemType = {
  id: number;
  title: string;
  category: string;
  price: number;
  img: any;
  orts: string;
};
function ModalContainer({ isVisible, onClose }: FoodMenuProps) {
  const [count, setCount] = useState<number>(0);
  if (!isVisible) return null;

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleClose = () => {
    onClose();
  };

  // function FoodMenu({ isVisible, onClose }: FoodMenuProps) {
  //   const [count, setCount] = useState<number>(0);
  //   if (!isVisible) return null;

  //   const handleIncrement = () => {
  //     setCount((prevCount) => prevCount + 1);
  //   };

  //   const handleDecrement = () => {
  //     if (count > 0) {
  //       setCount((prevCount) => prevCount - 1);
  //     }
  //   };

  //   const handleClose = () => {
  //     onClose();
  //   };
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          width: "100%",
          height: "100%",
          inset: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={handleClose}
      >
        <Container>
          <Box
            sx={{
              borderRadius: 3,
              width: "931px",
              height: "500px",
              padding: "32px",
              display: "flex",
              gap: "33px",

              backgroundColor: "white",
              backdropBlur: 0,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Box sx={{ width: "500px", height: "500px" }}>
              <img src="Image.png" alt="" />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Box
                onClick={handleClose}
                sx={{
                  width: 384,
                  height: 40,
                  justifyContent: "flex-end",
                  alignItems: "center",
                  display: "flex",
                  cursor: "pointer",
                }}
              >
                <Box
                  sx={{
                    width: "30px",
                    height: "30px",
                    border: "solid 1px gray",
                    borderRadius: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CloseIcon />
                </Box>
              </Box>

              <Box
                sx={{
                  width: "384px",
                  height: "398px",

                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "32px",
                  alignItems: "center",
                }}
              >
                <Box sx={{ width: 384, height: 398 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "32px",
                    }}
                  >
                    <Box>
                      <Typography sx={{ fontWeight: 600 }} variant="h5">
                        Main Pizza
                      </Typography>
                      <Typography>34,800₮</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                      }}
                    >
                      <Typography sx={{ fontWeight: 600 }} variant="h6">
                        {" "}
                        Орц
                      </Typography>
                      <Box
                        sx={{
                          width: "368px",
                          height: "38px",
                          padding: "8px",
                          backgroundColor: "#F6F6F6",
                          borderRadius: 2,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography sx={{ color: "#767676", fontSize: "16px" }}>
                          Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр{" "}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography sx={{ fontWeight: 600 }} variant="h6">
                      Тоо
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      {" "}
                      <Box
                        onClick={handleDecrement}
                        sx={{
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",

                          backgroundColor: "#18BA51",
                          color: "white",
                          borderRadius: 2,
                        }}
                      >
                        <HorizontalRuleIcon />
                      </Box>
                      <Box
                        sx={{
                          width: "254px",
                          height: "40px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontWeight: 400,
                        }}
                      >
                        {count}
                      </Box>
                      <Box
                        onClick={handleIncrement}
                        sx={{
                          width: "40px",
                          height: "40px",
                          borderRadius: 2,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "#18BA51",
                          color: "white",
                        }}
                      >
                        {" "}
                        <AddIcon />
                      </Box>
                    </Box>
                    <Box
                      onClick={handleClose}
                      sx={{
                        width: "384px",
                        height: "48px",
                        color: "white",
                        borderRadius: 2,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#18BA51",
                        cursor: "pointer",
                      }}
                    >
                      <Typography>Сагслах</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
export default ModalContainer;
