import PageBanner from "../Banner"
import Footer from "../Footer"

const PageContainer = ({ children, bannerTitle = "" }) => {
    return (
        <>
            <header>im header</header>
            {bannerTitle && <PageBanner title={bannerTitle} />}
            {children}
            <Footer />
        </>
    )
}
export default PageContainer
