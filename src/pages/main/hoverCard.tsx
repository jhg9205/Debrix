import {Grid} from "@mui/material";
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import AirplayIcon from '@mui/icons-material/Airplay';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import BiotechIcon from '@mui/icons-material/Biotech';
const HoverCard = () => {
    return (
        <div>
            <Grid container className='hover_card'>
                <Grid item lg={3} className='hover_card_sub'>
                    <TrackChangesIcon/>
                    <p className='sub_title'>STRATEGIC PLANNING</p>
                    <p className='sub_cont'>Discovery + Design Sprints</p>
                    <p className='sub_cont'>Research, Analytics, & Insights</p>
                    <p className='sub_cont'>Positioning Strategy</p>
                </Grid>
                <Grid item lg={3} className='hover_card_sub'>
                    <AirplayIcon/>
                    <p className='sub_title'>BRAND EXPERIENCE</p>
                    <p className='sub_cont'>Identity + Positioning</p>
                    <p className='sub_cont'>Visual Language + Art Direction</p>
                    <p className='sub_cont'>Design Production + Execution</p>
                </Grid>
                <Grid item lg={3} className='hover_card_sub'>
                    <MobileFriendlyIcon/>
                    <p className='sub_title'>USER EXPERIENCE</p>
                    <p className='sub_cont'>Experience Strategy</p>
                    <p className='sub_cont'>eCommerce + Websites</p>
                    <p className='sub_cont'>Digital Product + Services</p>
                </Grid>
                <Grid item lg={3} className='hover_card_sub'>
                    <BiotechIcon/>
                    <p className='sub_title'>TECHNOLOGY</p>
                    <p className='sub_cont'>Technical Discovery</p>
                    <p className='sub_cont'>Technical Architecture</p>
                    <p className='sub_cont'>CMS Implementation</p>
                </Grid>
            </Grid>
        </div>
    )
}


export default HoverCard