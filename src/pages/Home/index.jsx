import { Container, Grid } from "@mui/material"
import HomeServiceCard from "../../components/HomeServiceCard"
import services from "../../mockData/services"

const Home = () => {
    return (
        <div>
            <Container>
                <Grid container spacing={3}>
                    {
                        services.map(({ id, body, title }) => {
                            return (
                                <Grid key={id} item xs={12} sm={6} md={4}>
                                    <HomeServiceCard body={body} title={title} />
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
