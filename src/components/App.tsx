import { useEffect, useState } from 'react'
import BottomLight from '../styles/bottom';
import CardBox from '../styles/cardBox';
import Description from '../styles/Description';
import FondoWeb from '../styles/FondoWeb';
import ImagenAgents from '../styles/ImagenAgent';
import ImagenRole from '../styles/ImagenRole';
import LinkDiv from '../styles/LinkDiv';
import ListCard from '../styles/ListCard';
import Title from '../styles/Title';
import { Agents } from '../type';

interface Props {
    result : Array<Agents>
}
const URL = "https://valorant-api.com/v1/agents";

function App (){

    const [listData,setListData] = useState<Props["result"]>([]);

    useEffect(()=> {
        getDataAgentsValorant(URL)
    },[])

    const getDataAgentsValorant = async (url:string) => {
        const data = await fetch(url);
        const response = await data.json();
        setListData([...response.data])
    }

    return (
        <FondoWeb>
            <ListCard >
                {
                    listData
                    .filter(item => item.uuid !== "ded3520f-4264-bfed-162d-b080e2abccf9")
                    .map((item,index) => (
                        <CardBox key={index}>
                            <Title>{item.displayName}</Title>
                            <ImagenAgents src={item.displayIcon} alt="" />
                            <Description>{item.role?.displayName}
                                <span><ImagenRole src={item.role?.displayIcon} alt="" /></span>
                            </Description>
                            <LinkDiv to={`${item.uuid}`}>
                                <BottomLight>
                                    Ver informacion
                                </BottomLight>
                            </LinkDiv>
                        </CardBox>
                    ))
                }
            </ListCard>
        </FondoWeb>
    )
}


export default App;