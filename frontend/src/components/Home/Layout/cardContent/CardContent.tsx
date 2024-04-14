import { Container, Card, Box, CardContent, Typography } from "@mui/material";

function Content1() {
  const cardContent = (
    <>
      <CardContent>
        <Box sx={{ fontSize: 8 }} color="text.secondary">
          <img src="book.svg" alt="" />
        </Box>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontSize: "18px", fontWeight: "700" }}
        >
          Хүргэлт төлөв хянах
        </Typography>
        <Typography sx={{ fontSize: "14px" }} color="text.secondary">
          Захиалга бэлтгэлийн явцыг хянах
        </Typography>
      </CardContent>
    </>
  );
  return (
    <Card
      sx={{
        width: "100%",
        height: 140,
        border: "solid 1px gray",
        borderRadius: 4,
        padding: "6px",
        "&:hover": {
          boxShadow: " 8px 4px 8px rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      {cardContent}
    </Card>
  );
}
export default Content1;
