import { Container, Grid } from "@mui/material"
import HomeServiceCard from "../../components/HomeServiceCard"

const Home = () => {
    return (
        <div>
            <Container>
                <Grid container spacing={3}>
                    {
                        ['', '', '', '', '', ''].map(() => {
                            return (
                                <Grid item xs={12} sm={6} md={4}>
                                    <HomeServiceCard />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
        </div>
    )
}
export default Home
