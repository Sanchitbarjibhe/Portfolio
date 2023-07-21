import * as React from "react";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
// import { ButtonElement } from "@/common/elements";
import { theme } from "../theme";
import { ButtonProps, CircularProgress, SxProps } from "@mui/material";

type ConfirmationPopUpProps = {
  callBackOnAccept: any;
  title: string;
  dialogTitlestyle?: SxProps;
  element: React.ReactNode;
  fullWidth?: boolean;
  maxWidth?: DialogProps["maxWidth"];
  open: boolean;
  callBackOnReject: any;
  dialogContentStyle?: SxProps;
  dialogActionStyle?: SxProps;
  cancelBtnTxt?: string;
  cancelBtnStyle?: SxProps;
  acceptBtnStyle?: SxProps;
  acceptBtnTxt?: string;
  cancelBtnVariant?: ButtonProps["variant"];
  acceptBtnVariant?: ButtonProps["variant"];
  dialogContainerStyle?: SxProps;
  showLoader?: boolean;
  showActions?:boolean
};

export const DetailPopup = (props: ConfirmationPopUpProps) => {
  const {
    open,
    callBackOnAccept,
    title,
    dialogTitlestyle,
    element,
    fullWidth,
    maxWidth,
    callBackOnReject,
    dialogContentStyle,
    dialogActionStyle,
    cancelBtnStyle,
    acceptBtnStyle,
    acceptBtnTxt,
    cancelBtnTxt,
    cancelBtnVariant,
    acceptBtnVariant,
    dialogContainerStyle,
    showLoader,
    showActions = true
  } = props;

  const handleClose = () => {
    callBackOnReject();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth={fullWidth || false}
      maxWidth={maxWidth || false}
      sx={{
        ...dialogContainerStyle,
      }}
    >
      <DialogTitle
        id="alert-dialog-title"
        sx={{
          ...{
            fontSize: "18px",
            fontWeight: "bold",
            fontFamily: "Roboto Slam",
            textAlign: "center",
          },
          textAlign: "start",
          ...dialogTitlestyle,
        }}
      >
        {title}
      </DialogTitle>
      <DialogContent
        sx={{
          ...dialogContentStyle,
        }}
      >
        {element}
      </DialogContent>
      {showActions && <><DialogActions
        sx={{
          ...dialogActionStyle,
        }}
      >
      </DialogActions></>}
    </Dialog>
  );
}
