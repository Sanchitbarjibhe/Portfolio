import React, { ReactNode } from 'react';
import Button from '@mui/material/Button';
import { Box, ListItem, ListItemButton, ListItemText } from '@mui/material';

interface SectionButtonProps {
  id: string;
  children: ReactNode;
  paddingTop: any;
}

const PageNavigation: React.FC<SectionButtonProps> = ({ id, paddingTop, children }) => {
  return (
    <>
      <Box sx={{ paddingTop }} id={id}>
        {children}
      </Box>
    </>
  );
};

export default PageNavigation;
