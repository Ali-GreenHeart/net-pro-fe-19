import PageBanner from "../Banner"
import Footer from "../Footer"
import { Header } from "../Header"

const PageContainer = ({ children, bannerTitle = "" }) => {
    return (
        <>
            <Header/>
            {bannerTitle && <PageBanner title={bannerTitle} />}
            {children}
            <Footer />
        </>
    )
}
export default PageContainer
