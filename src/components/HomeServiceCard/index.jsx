import HandymanRoundedIcon from '@mui/icons-material/HandymanRounded';
import { Card, CardContent, IconButton, Typography } from "@mui/material"


const HomeServiceCard = () => {
    return (
        <Card sx={{
            borderRadius: '16px',
            borderBottom: '10px solid transparent',
            minWidth: 275,
            "&:hover": {
                borderBottomColor: 'primary.main'
            }
        }}>
            <CardContent>
                <IconButton sx={{ bgcolor: 'secondary.light' }}>
                    <HandymanRoundedIcon color='primary' />
                </IconButton>
                <Typography my={1} variant='h6' fontWeight={700}>
                    Avadanlıqların quraşdırılması və konfiqurasiyası
                </Typography>
                <Typography variant='body'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam ullamcorper aliquet non, ut id sit eros integer.
                </Typography>
            </CardContent>
        </Card>
    )
}
export default HomeServiceCard
