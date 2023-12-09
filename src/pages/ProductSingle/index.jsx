import { useParams } from "react-router"
import PageContainer from "../../components/PageContainer"
import { Box, Container, Grid, Pagination, Paper, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { products } from "../../mockData/products"



const ProductSingle = () => {
    const [id, setId] = useState(0)
    const [page, setPage] = useState(1)
    const { slug } = useParams()

    useEffect(() => {
        const slugItemId = products.find((it) => it.slug === slug).id
        setId(slugItemId)
        setPage(1)
    }, [slug])


    const item = products.find((_item) => _item.id === id)
    return (
        <PageContainer bannerTitle="VERTIV">
            <Container>
                <Grid container my={3}>
                    <Grid xs={12} sm={6} md={4} item>
                        <Paper elevation={0}
                            sx={(theme) => ({
                                borderRadius: 2,
                                border: `1px solid ${theme.palette.primary.light}`,
                            })}
                        >
                            <Typography
                                variant="h5"
                                color="white"
                                bgcolor="primary.main"
                            // sx={{
                            //     borderTopLeftRadius: 'inherit',
                            //     borderTopRightRadius: 'inherit',
                            // }}
                            >Category</Typography>
                            <Stack>
                                {
                                    products.map(({ id, slug, title }) => {
                                        return (
                                            <Link key={id} to={`/products/${slug}`}>{title}</Link>
                                        )
                                    })
                                }
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid xs={12} sm={6} md={8} item>
                        {
                            <Typography>{item.title}</Typography>
                        }
                        {
                            item.devices.slice((page - 1) * 3, page * 3).map(({ name }) => {
                                return (
                                    <Box py={4} key={name}>
                                        <Typography>{name}</Typography>
                                    </Box>
                                )
                            })
                        }
                        <Pagination
                            count={item.devices.length / 3}
                            page={page}
                            onChange={(_, value) => {
                                setPage(value)
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </PageContainer>
    )
}
export default ProductSingle
