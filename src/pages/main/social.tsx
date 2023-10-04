import {Grid} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Social = () => {
    return (
        <div className='social'>
            <p style={{fontSize:'18px', marginBottom:'50px', color:'gray'}}>ON SOCIAL NETWORKS</p>
            <div>
                <Grid container className='social_grid'>
                    <Grid item lg={4} className='social_grid_sub'>
                        <FacebookIcon/>
                        <p className='sub_cont'>FACEBOOK</p>
                    </Grid>
                    <Grid item lg={4} className='social_grid_sub'>
                        <TwitterIcon/>
                        <p className='sub_cont'>TWITTER</p>
                    </Grid>
                    <Grid item lg={4} className='social_grid_sub'>
                        <GoogleIcon/>
                        <p className='sub_cont'>GOOGLE PLUS</p>
                    </Grid>
                    {/*<Grid item lg={3} className='social_grid_sub'>*/}
                    {/*    <YouTubeIcon/>*/}
                    {/*    <p className='sub_cont'>YOUTUBE</p>*/}
                    {/*</Grid>*/}
                </Grid>
            </div>
        </div>
    )
}
export default Social