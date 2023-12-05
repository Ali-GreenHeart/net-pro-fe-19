import { useParams } from "react-router"
import PageContainer from "../../components/PageContainer"
import { Box, Container, Grid, Pagination, Paper, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const data = [
    {
        id: 0,
        slug: 'uninterruptible-power-supplies',
        title: 'Uninterruptible Power Supplies',
        devices: [
            { name: 'name1' },
            { name: 'nUninterruptibleame2' },
            { name: 'Uninterruptiblename3' },
            { name: 'nUninterruptibleame4' },
            { name: 'nUninterruptibleame5' },
            { name: 'nUninterruptibleame6' },
            { name: 'name7Uninterruptible' },
            { name: 'nUninterruptibleame8' },
            { name: 'Uninterruptiblename9' },
            { name: 'name10Uninterruptible' },
            { name: 'name11Uninterruptible' },
            { name: 'name12Uninterruptible' }
        ]
    },
    {
        id: 1,
        slug: 'dc-power-systems',
        title: 'DC Power Systems',
        devices: [
            { name: 'DCname1' },
            { name: 'DCname2' },
            { name: 'DCname3' },
            { name: 'DCname4' },
            { name: 'naDCme5' },
            { name: 'name6DC' },
            { name: 'DCname7' },
            { name: 'DCname8' },
            { name: 'name9DC' },
            { name: 'name10DC' },
            { name: 'name11DC' },
            { name: 'name12DC' }
        ]
    },
    {
        id: 2,
        slug: 'power-distribution',
        title: 'Power Distribution',
        devices: [
            { name: 'name1Power' },
            { name: 'Powername2' },
            { name: 'Powername3' },
            { name: 'Powername4' },
            { name: 'name5Power' },
            { name: 'name6Power' },
            { name: 'name7Power' },
            { name: 'name8Power' },
            { name: 'name9Power' },
            { name: 'name10Power' },
            { name: 'name11Power' },
            { name: 'name12Power' }
        ]
    },
    {
        id: 3,
        slug: 'industrial-ac-and-dc-systems',
        title: 'Industrial AC and DC Systems',
        devices: [
            { name: 'Industrialname1' },
            { name: 'Industrialname2' },
            { name: 'Industrialname3' },
            { name: 'Industrialname4' },
            { name: 'Industrialname5' },
            { name: 'name6Industrial' },
            { name: 'name7Industrial' },
            { name: 'Industrialname8' },
            { name: 'name9Industrial' },
            { name: 'name10Industrial' },
            { name: 'name11Industrial' },
            { name: 'name12Industrial' }
        ]
    },
    {
        id: 4,
        slug: 'static-transfer-switches',
        title: 'Static Transfer Switches',
        devices: [
            { name: 'name1Static' },
            { name: 'Staticname2' },
            { name: 'Staticname3' },
            { name: 'Staticname4' },
            { name: 'name5Static' },
            { name: 'name6Static' },
            { name: 'name7Static' },
            { name: 'name8Static' },
            { name: 'name9Static' },
            { name: 'name10Static' },
            { name: 'name11Static' },
            { name: 'name12Static' }
        ]
    },
    {
        id: 5,
        slug: 'power-control-and-monitoring',
        title: 'Power Control and Monitoring',
        devices: [
            { name: 'name1Power' },
            { name: 'Powername2' },
            { name: 'Powername3' },
            { name: 'Powername4' },
            { name: 'name5Power' },
            { name: 'name6Power' },
            { name: 'name7Power' },
            { name: 'name8Power' },
            { name: 'name9Power' },
            { name: 'name10Power' },
            { name: 'name11Power' },
            { name: 'name12Power' }
        ]
    },
]

const ProductSingle = () => {
    const [id, setId] = useState(0)
    const [page, setPage] = useState(1)
    const { slug } = useParams()

    useEffect(() => {
        const slugItemId = data.find((it) => it.slug === slug).id
        setId(slugItemId)
        setPage(1)
    }, [slug])


    const item = data.find((_item) => _item.id === id)
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
                                    data.map(({ id, slug, title }) => {
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
