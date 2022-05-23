import FondoHome from "../styles/FondoHome";
import fd from '../animation/img.png'
import { BottomD, Box, BoxHome, HomeTitle, ImgAgen } from "../styles/styleHome/homeStyle";


function Home() {
    return ( 
        <FondoHome>
            <BoxHome>
                <Box>
                    <HomeTitle>Welcome to the Valorant Game page, where you will find information about agents, weapons and much more</HomeTitle>
                    <BottomD>Descargar</BottomD>
                </Box>
                <Box>
                    <ImgAgen src={fd} alt=""/>
                </Box>
            </BoxHome>
        </FondoHome>
     );
}

export default Home;