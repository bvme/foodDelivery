import * as React from "react";
import { Box, Button } from "@mui/material";
import Data from "../FoodData";

type Props = {
  menuItems: string[];
  filterItems: (category: string) => void;
  setItems: React.Dispatch<React.SetStateAction<any[]>>;
};

const Buttons: React.FC<Props> = ({ menuItems, filterItems, setItems }) => {
  return (
    <Box
      sx={{
        width: "100%",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "1200px",
          height: "107px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padddingX: "120px",
          gap: "12px",
        }}
      >
        {menuItems.map((val) => (
          <Button
            color="success"
            sx={{
              color: "black",
              width: "282px",
              height: "43px",
              border: "solid 1px #D6D8DB",
            }}
            key="all"
            onClick={() => filterItems(val)}
          >
            {val}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Buttons;
