import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography, Box, Grid } from '@mui/material';
import SubHeader from '@/Common/Elements/SubHeader';

export default function qualification() {
    return (
        <Box >
            <SubHeader>QUALIFICATION</SubHeader>
            <Timeline position="alternate" sx={{ paddingTop: '50px', paddingBottom: '50px', }}>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot sx={{ background: '#20C5FA' }} />
                        <TimelineConnector sx={{ background: '#20C5FA' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '0', px: 2 }}>
                        <Typography variant="subtitle1" component="span">
                            Master's in Computer Application
                        </Typography>
                        <Typography

                            sx={{ m: 'auto 0' }}
                            variant="body2"
                            color="text.secondary"
                        >2016-2020</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ background: '#20C5FA' }} />
                        <TimelineDot sx={{ background: '#20C5FA' }} />
                        <TimelineConnector sx={{ background: '#20C5FA' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="subtitle1" component="span">
                            Front-End developer
                        </Typography>
                        <Typography

                            sx={{ m: 'auto 0' }}
                            variant="body2"
                            color="text.secondary"
                        >2020-2021</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ background: '#20C5FA' }} />
                        <TimelineDot sx={{ background: '#20C5FA' }} />
                        <TimelineConnector sx={{ background: '#20C5FA' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="subtitle1" component="span">
                            UI/UX Designer
                        </Typography>
                        <Typography
                            sx={{ m: 'auto 0' }}
                            variant="body2"
                            color="text.secondary"
                        >2021-2022</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ background: '#20C5FA' }} />
                        <TimelineDot sx={{ background: '#20C5FA' }} />
                        <TimelineConnector sx={{ background: '#20C5FA' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="subtitle1" component="span">
                            Web developer
                        </Typography>
                        <Typography
                            sx={{ m: 'auto 0' }}
                            variant="body2"
                            color="text.secondary"
                        >2022-2023</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Box>
    )
}
