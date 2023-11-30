import { Box, Container, Typography } from "@mui/material"

const PageBanner = ({ title }) => {
    return (
        <Box bgcolor="primary.main" py={4}
            sx={{
                backgroundImage: `url("/banner-bg.png")`,
                backgroundSize: 'cover',
                backgroundBlendMode: "multiply"
            }}
        >
            <Container sx={{
                textAlign: 'center',
                color: 'white'
            }}>
                <Typography fontWeight={600} mb={3} variant="h4">{title}</Typography>
                <Typography>Əsas səhifə ▶ {title}</Typography>
            </Container>
        </Box>
    )
}
export default PageBanner
