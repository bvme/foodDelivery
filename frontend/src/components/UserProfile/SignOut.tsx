import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

type SignOutUserPropsType = {
  onClose: () => void;
  open: boolean;
};

export function SignOutUser({
  onClose,
  open,
}: SignOutUserPropsType): React.JSX.Element {
  return (
    <>
      <Dialog
        sx={{
          overflow: "hidden",
          borderRadius: "20px",
        }}
        open={open}
        onClick={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          sx={{ width: "384px", margin: 0 }}
          id="alert-dialog-title"
        ></DialogTitle>
        <DialogContent
          sx={{
            PaddingX: "5px",
            bgcolor: "white",
            borderRadius: "20px",
            alignText: "center",
          }}
        >
          <DialogContentText
            sx={{
              marginY: "40px",
              fontSize: "20px",

              fontWeight: 600,
              lineHeight: "30px",
              color: "black",
            }}
            id="alert-dialog-slide-description"
          >
            Та системээс гарахдаа итгэлтэй байна уу?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", p: 0, mt: "20px" }}>
          <Button
            sx={{
              flex: 1,
              backgroundColor: "rgba(24, 186, 81, 0.20) !important",
              color: "#8B8E95",
              height: "30%",
              borderRadius: 0,
              py: "15px",
            }}
            onClick={onClose}
          >
            Тийм{" "}
          </Button>
          <Button
            sx={{
              flex: 1,
              backgroundColor: "#18BA51 !important",
              color: "secondary.contrastText",
              height: "30%",
              borderRadius: 0,
              marginLeft: "0 !important",
              py: "15px",
            }}
            onClick={onClose}
            autoFocus
          >
            Үгүй
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
