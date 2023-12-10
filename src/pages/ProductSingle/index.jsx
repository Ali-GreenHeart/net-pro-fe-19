import { useParams } from "react-router"
import PageContainer from "../../components/PageContainer"
import { Box, Container, Grid, Pagination, Paper, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { productsS } from "../../mockData/products"
import * as React from 'react';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import DevicesCards from "./DevicesCards"

const ProductSingle = () => {
    const [id, setId] = useState(0)
    const [page, setPage] = useState(1)
    const { slug } = useParams()

    useEffect(() => {
        const slugItemId = productsS.find((it) => it.slug === slug).id
        setId(slugItemId)
        setPage(1)
    }, [slug])


    const item = productsS.find((_item) => _item.id === id)
    console.log(item);
    return (
        <PageContainer bannerTitle="VERTIV">
            <Container sx={{py:5}}>
                <Grid container my={3} spacing={{sm:2,md:1, xl:5}}>
                    <Grid xs={12}md={4} item>
                        <Paper sx={{ width: 400, maxWidth: '100%' }}>
                            <MenuList subheader={
                                <Paper sx={{ bgcolor: "primary.main", color: 'info.main', p: 3, fontWeight: 600, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, letterSpacing: 1, mb: 2 }}>Caterogy</Paper>
                            }>
                                <Stack justifyContent={'space-evenly'} flexWrap={'wrap'}>
                                    {
                                        productsS.map(({ id, slug, title }) => {
                                            return (
                                                <>
                                                    <MenuItem disableRipple disableTouchRipple>
                                                        <Link key={id} to={`/products/${slug}`} style={{
                                                            textDecoration: 'none',
                                                            color: item.id === id ? '#435072' : 'rgba(86, 96, 122, 0.5)', fontWeight: 'bold',
                                                            padding: 5,
                                                            width: '100%',
                                                            textWrap: 'wrap'
                                                        }}>
                                                            {title}
                                                        </Link>
                                                    </MenuItem>
                                                    {id !== 5 ?
                                                        <Divider variant="middle" /> : null}
                                                </>
                                            )
                                        })
                                    }
                                </Stack>
                            </MenuList>
                        </Paper>
                    </Grid>
                    <Grid sm={12} md={8} item >
                        <Stack justifyContent={'space-between'} flexWrap={'wrap'} spacing={4}>
                            <Typography variant="h5" color="primary">{item.title}</Typography>
                            <Typography variant="body1" color="primary">{item.body}</Typography>
                            {
                                item.devices.slice((page - 1) * 2, page * 2).map(({ id, name, body, image }) => {
                                    return (
                                        <DevicesCards name={name} id={id} body={body} image={image}/>
                                    )
                                })
                            }
                            <Pagination
                                count={item.devices.length / 2}
                                page={page}
                                onChange={(_, value) => {
                                    setPage(value)
                                }}
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </PageContainer>
    )
}
export default ProductSingle
