import { Box, Grid, Typography } from '@mui/material'
import { SkillsCircle } from '@/src/constants';
import CircularProgressBar from '@/Common/Elements/CircularProgressBar';
import SubHeader from '@/Common/Elements/SubHeader';



export default function Skills() {
  return (
    <>
      <SubHeader>SKILLS</SubHeader>
      <Grid container sx={{ justifyContent: 'space-evenly', }}>
        <Grid lg={12} md={8} item sx={{ boxShadow: '3px 39px 72px rgba(111, 194, 240, 0.2)', display: 'contents', height: '100%' }}>
          {SkillsCircle.map((item: any, idx: number) =>
            <CircularProgressBar key={idx} percentage={item.progress} icon={item.icon} />
          )}
        </Grid>
      </Grid>
    </>
  )
}
