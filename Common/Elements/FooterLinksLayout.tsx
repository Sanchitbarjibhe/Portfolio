import React, { ReactNode } from 'react';
import { Box, Grid, Link, Typography } from '@mui/material';

interface FooterLinkProps {
    linksTitle: string;
    href: string;
}

const FooterLinksLayout: React.FC<FooterLinkProps> = ({ linksTitle, href, }) => {
    return (
        <Link
            variant="h6"
            href={href}
            target="_blank" rel="noopener noreferrer"
            sx={{ flexGrow: 1, cursor: 'pointer', color: 'black', fontSize: '14px' }}
        >
            {linksTitle}
        </Link>
    );
};

export default FooterLinksLayout;
