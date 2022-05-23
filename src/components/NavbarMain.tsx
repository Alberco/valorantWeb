import ListLink from "../styles/ListLink";
import Navbar from "../styles/Navbar";
import icon from '../animation/icon1.png'
import { IconImg , LogoMain }from "../styles/IconImg";
import Description from "../styles/Description";
import LinkDiv from "../styles/LinkDiv";
import pathLink from "../tools/archiveUrl";

function NavbarMain() {

    return ( 
        <Navbar>
            <ListLink>
                <LogoMain><IconImg src={icon} alt="" /></LogoMain>
                <span><Description>Valorant</Description></span>
            </ListLink>
            <ListLink>
                {
                    pathLink.map( (item,index) => (
                    <LinkDiv key={index} to={item.url}>
                        <Description>{item.title}</Description>
                    </LinkDiv>
                    ))
                }
            </ListLink>
            <ListLink>
                <div><Description>Donation</Description></div>
                <div><Description>Github</Description></div>
            </ListLink>
        </Navbar>
    );
}

export default NavbarMain;