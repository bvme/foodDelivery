import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState, Fragment } from "react";
import { Badge, Button, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useRouter } from "next/router";

type Anchor = "right";

interface FoodItem {
  img: string;
  name: string;
  prise: string;
  ingeredient: string;
  count: number;
}

let food: FoodItem[] = [
  {
    img: "pizza.png",
    name: "Main Pizza",
    prise: "34800₮",
    ingeredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр  ",
    count: 0,
  },
  {
    img: "pizza.png",
    name: "Pizza",
    prise: "30000₮",
    ingeredient:
      "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ,pizdaaa  ",
    count: 0,
  },
];

export const Basket = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => () => {
    setState({ ...state, [anchor]: open });
  };

  const spend = () => {
    let total = 0;
    food.forEach((item) => {
      total += parseInt(item.prise.replace("₮", ""), 10) * item.count;
    });
    return total;
  };

  const handleIncrement = (index: number) => () => {
    const updatedFood = [...food];
    updatedFood[index].count++;
    setFood(updatedFood);
  };

  const handleDecrement = (index: number) => () => {
    const updatedFood = [...food];
    if (updatedFood[index].count > 0) {
      updatedFood[index].count--;
      setFood(updatedFood);
    }
  };

  const setFood = (updatedFood: FoodItem[]) => {
    food = updatedFood;
  };

  const { push } = useRouter();

  const list = (anchor: Anchor) => (
    <>
      <Box
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        sx={{ width: "586px", marginX: "24px" }}
      >
        <Box sx={{ paddingX: "24px", paddingY: "26px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ArrowBackIosIcon></ArrowBackIosIcon>
            <Typography variant="h6" fontWeight={900}>
              Таны сагс
            </Typography>
            <Box sx={{ width: "24px" }}></Box>
          </Box>
        </Box>
        <Box>
          {food.map((el, index) => {
            return (
              <>
                <Box
                  sx={{
                    display: "flex",
                    gap: "16px",
                    paddingX: "16px",
                    paddingY: "40px",
                    borderBottom: "1px solid #D6D8DB",
                    borderTop: "1px solid #D6D8DB",
                  }}
                >
                  <Box
                    sx={{
                      width: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* <img
                      style={{ width: "275px", height: "178px" }}
                      src={`/${el.img}`}
                      alt=""
                    /> */}
                  </Box>
                  <Box
                    sx={{
                      width: "50%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{ fontSize: "18px", fontWeight: "600" }}
                        >
                          {/* {el.name} */}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "18px",
                            fontWeight: "600",
                            color: "#18BA51",
                          }}
                        >
                          {/* {el.prise} */}
                        </Typography>
                      </Box>
                      <ClearIcon></ClearIcon>
                    </Box>
                    <Box>
                      <Typography sx={{ color: "#767676" }}>
                        {/* {el.ingeredient} */}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box
                        sx={{
                          background: "#18BA51",
                          width: "45px",
                          height: "45px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "10px",
                          gap: "8px",
                        }}
                        onClick={handleDecrement(index)}
                      >
                        <RemoveIcon sx={{ color: "white" }}></RemoveIcon>
                      </Box>
                      <Box
                        sx={{
                          width: "45px",
                          height: "45px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography sx={{ fontWeight: "500" }}>
                          {/* {el.count} */}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          background: "#18BA51",
                          width: "45px",
                          height: "45px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "10px",
                        }}
                        onClick={handleIncrement(index)}
                      >
                        <AddIcon sx={{ color: "white" }}></AddIcon>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </>
            );
          })}
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            height: "170px",
            paddingX: "32px",
            paddingTop: "10px",
            paddingBottom: "30px",
            boxShadow: " 0px -4px 8px 0px rgba(187, 190, 205, 0.20)",
            position: "absolute",
            left: "0",
            right: "0",
            bottom: "0",
          }}
        >
          <Box sx={{ width: "50%", height: "50px" }}>
            <Typography
              sx={{ fontSize: "18px", fontWeight: "400", color: "#5E6166" }}
            >
              Нийт төлөх дүн
            </Typography>
            <Typography sx={{ fontSize: "18px", fontWeight: "700" }}>
              {/* {spend()}₮ */}
            </Typography>
          </Box>
          <Button
            sx={{ background: "#18BA51", width: "50%", height: "50px" }}
            variant="contained"
            color="success"
            onClick={() => push("order")}
          >
            Захиалах
          </Button>
        </Box>
      </Box>
    </>
  );

  return ( 
    <></>
    // <Box>
    //   {(["right"] as const).map((anchor) => (
    //     <Fragment>
    //       <Box
    //         onClick={toggleDrawer(anchor, true)}
    //         sx={{
    //           display: "flex",
    //           alignItems: "center",
    //           gap: "8px",
    //           paddingY: "8px",
    //           paddingX: "16px",
    //         }}
    //       >
    //         <Badge badgeContent={1} color="primary">
    //           <ShoppingBasketIcon />
    //         </Badge>
    //         <Typography sx={{ display: "inline-block", fontWeight: "700" }}>
    //           Сагс
    //         </Typography>
    //       </Box>
    //       <Drawer
    //         anchor={anchor}
    //         open={state[anchor]}
    //         onClose={toggleDrawer(anchor, false)}
    //       >
    //         {/* {list(anchor)} */}
    //       </Drawer>
    //     </Fragment>
    //   ))}
    // </Box>
  );
};
