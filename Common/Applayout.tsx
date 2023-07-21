import React from "react";
import { Grid } from "@mui/material";
import { theme } from "./theme";
import Header from "./UI/Header";
import Footer from "./UI/Footer";
export default function AppLayout(props: any) {
  return (
    <div
      style={{
        display: "flex",
        // flex: 1,
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // justifyContent: "stretch",
        }}
      >
        <Grid item xs={12}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            color: 'black',
          }}
        >
          {props.children}
        </Grid>
        <Footer />
      </div>
    </div>
  );
}

