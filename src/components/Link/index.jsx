import { alpha } from '@mui/system'
import { Link as LinkRR } from 'react-router-dom'

const Link = ({ title, to }) => {
    return (
        <LinkRR
            style={{
                textDecoration: 'none',
                color: alpha("#fff", 0.5)
            }}
            to={to}>{title}<br /></LinkRR>
    )
}
export default Link
