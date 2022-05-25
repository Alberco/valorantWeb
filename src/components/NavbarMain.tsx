import ListLink from "../styles/ListLink";
import Navbar from "../styles/Navbar";
import icon from '../animation/icon1.png'
import { IconImg , LogoMain }from "../styles/IconImg";
import Description from "../styles/Description";
import LinkDiv from "../styles/LinkDiv";
import pathLink from "../tools/archiveUrl";
import styled from 'styled-components'

const Titulos = styled(Description)`
    @media (max-width: 400px){
        display: none;
  }
`
const TituloReserva = styled(Description)`

    @media (max-width: 1980px){
        display: none;
    }

    @media (max-width: 1600px){
        display: none;
    }

    @media (max-width: 400px){
        display: block;
        font-size: 1.2rem;
    }
`

function NavbarMain() {

    return ( 
        <Navbar>
            <ListLink>
                <LogoMain><IconImg src={icon} alt="" /></LogoMain>
                <span><Titulos>Valorant</Titulos></span>
            </ListLink>
            <ListLink>
                {
                    pathLink.map( (item,index) => (
                    <LinkDiv key={index} to={item.url}>
                        <TituloReserva>{item.title}</TituloReserva>
                    </LinkDiv>
                    ))
                }
                {
                    pathLink.map( (item,index) => (
                    <LinkDiv key={index} to={item.url}>
                        <Titulos>{item.title}</Titulos>
                    </LinkDiv>
                    ))
                }
            </ListLink>
            <ListLink>
                <div><Titulos>Donation</Titulos></div>
                <div><Titulos>Github</Titulos></div>
            </ListLink>
        </Navbar>
    );
}

export default NavbarMain;