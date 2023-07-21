import React, { useState, useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { IconButton, Box } from "@mui/material";
import { theme } from "../theme";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 250) {
      setVisible(true);
    } else if (scrolled <= 250) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window?.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <>
      {visible && (
        <Box
          sx={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            borderRadius: "9px",
            px: 0.2,
            py: 0.2,
            // backgroundColor: theme?.secondaryBlue,
            backgroundColor: '#20C5FA',
          }}
        >
          <IconButton
            title="Back to top"
            onClick={scrollToTop}
            sx={{
              "&:hover": {
                backgroundColor: 'transparent',
              },
              // color: theme?.primaryBlue,
              color: '#ffff',
            }}
          >
            <ArrowUpwardIcon />
          </IconButton>
        </Box>
      )}
    </>
  );
};

export default ScrollButton;