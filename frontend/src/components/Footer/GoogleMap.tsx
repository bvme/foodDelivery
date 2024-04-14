import { Box, Container, Typography } from "@mui/material";

export const GoogleMap = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container sx={{ marginTop: "30px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="map.png" alt="" />
          </Box>
          <Box
            sx={{
              display: "flex",
              paddingY: "16px",
              marginTop: "20px",
              gap: "8px",
            }}
          >
            <img src="Star.svg" alt="" />
            <Typography fontWeight={700} sx={{ fontSize: "22px" }}>
              Хүргэлтийн бүс дэх хаягууд
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "24px", marginBottom: "50px" }}>
            <Box
              sx={{
                padding: "24px",
                width: "50%",
                borderRadius: "16px",
                boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.05)",
              }}
            >
              <Box>
                <Typography
                  sx={{ paddingY: "16px" }}
                  variant="h6"
                  fontWeight={600}
                >
                  А бүс
                </Typography>
                <Box sx={{ border: "1px solid #18BA51" }}></Box>
              </Box>
              <Box sx={{ display: "flex", gap: "16px", marginTop: "16px" }}>
                <Box
                  sx={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <Typography>Нархан хотхон</Typography>
                  <Typography>26-р байр</Typography>
                  <Typography>26-р байр</Typography>
                  <Typography>45-р байр</Typography>
                  <Typography>3-р байр</Typography>
                  <Typography>Хоймор хотхон</Typography>
                  <Typography>Хоймор хотхон</Typography>
                </Box>
                <Box
                  sx={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <Typography>Нархан хотхон</Typography>
                  <Typography>26-р байр</Typography>
                  <Typography>26-р байр</Typography>
                  <Typography>45-р байр</Typography>
                  <Typography>3-р байр</Typography>
                  <Typography>Хоймор хотхон</Typography>
                  <Typography>Хоймор хотхон</Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                padding: "24px",
                width: "50%",
                borderRadius: "16px",
                boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.05)",
              }}
            >
              <Box>
                <Typography
                  sx={{ paddingY: "16px" }}
                  variant="h6"
                  fontWeight={600}
                >
                  А бүс
                </Typography>
                <Box sx={{ border: "1px solid #18BA51" }}></Box>
              </Box>
              <Box sx={{ display: "flex", gap: "16px", marginTop: "16px" }}>
                <Box
                  sx={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <Typography>Нархан хотхон</Typography>
                  <Typography>26-р байр</Typography>
                  <Typography>26-р байр</Typography>
                  <Typography>45-р байр</Typography>
                  <Typography>3-р байр</Typography>
                  <Typography>Хоймор хотхон</Typography>
                  <Typography>Хоймор хотхон</Typography>
                </Box>
                <Box
                  sx={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <Typography>Нархан хотхон</Typography>
                  <Typography>26-р байр</Typography>
                  <Typography>26-р байр</Typography>
                  <Typography>45-р байр</Typography>
                  <Typography>3-р байр</Typography>
                  <Typography>Хоймор хотхон</Typography>
                  <Typography>Хоймор хотхон</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
