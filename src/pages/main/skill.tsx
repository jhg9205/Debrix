import {Grid, Slider, styled} from "@mui/material";
import img1 from '@images/common/img1.jpg'

const Skill = () => {
    return (
        <div>
            <Grid container className='skill'>
                <Grid item lg={3} className='skill_first'>
                    <p>WEB:D DESIGN</p>
                    <p>WORKS FULLY</p>
                    <p>RESPONSIBLE</p>
                    <p>PERFORMANCE</p>
                    <p>ORIENTED</p>
                </Grid>
                <Grid item lg={4} className='skill_second'>
                    <img src={img1}/>
                </Grid>
                <Grid item lg={5} className='skill_third'>
                    <p style={{fontSize:'14px', fontWeight:'600', paddingBottom:'20px'}}>CHECK OUR SKILLS</p>
                    <AirbnbSlider defaultValue={95}/>
                    <p className='sub_cont'>SYSTEM INTEGRATION - 10 YEARS EXPERIENCE</p>
                    <AirbnbSlider defaultValue={90}/>
                    <p className='sub_cont'>BIG DATA - 5 YEARS EXPERIENCE</p>
                    <AirbnbSlider defaultValue={88}/>
                    <p className='sub_cont'>SOLUTION - 2 YEARS EXPERIENCE</p>
                    <AirbnbSlider defaultValue={93}/>
                    <p className='sub_cont'>FRAMEWORK - 10 YEARS EXPERIENCE</p>
                </Grid>
            </Grid>
        </div>
    )
}
export default Skill

const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: '#000000',
    height: 3,
    padding: '0',
    '& .MuiSlider-track': {
        height: 3,
    },
    '& .MuiSlider-rail': {
        color: theme.palette.mode === 'dark' ? '#5b5b5b' : '#a0a0a0',
        opacity: theme.palette.mode === 'dark' ? undefined : 1,
        height: 3,
    },
}));