import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LinkDiv = styled(Link)`
    border: solid 1px transparent;
    text-decoration : none;
    transition: 0.5s;
    &:hover {
        transform: scale(1.05);
    }
`

export default LinkDiv;