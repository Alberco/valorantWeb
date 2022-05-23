import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BoxCharacter from "../styles/boxCharacter";
import FondoWeb from "../styles/FondoWeb";
import ImgCharacter from "../styles/ImgCharacter";
import { Agents } from "../type";
import iconFail from '../animation/undefied.webp';
import { BoxDe, BoxIz, ButtonSkin, ContentDes, Icon, SkinImg, TitleAgent } from "../styles/styleCharacter/characterStyle";


interface Props {
    result : Agents
}

const URL = `https://valorant-api.com/v1/agents/`;

function Character() {

    const [dataAgent,setDataAgent] = useState<Props["result"]> ()
    const [newImgUrl,setNewImgUrl] = useState<string>("");
    
    let params = useParams()
    
    const id = String(params.agentsId);

    useEffect(()=> {
        getDataAgentsValorant(URL,id)
    },[id])
    
    const getDataAgentsValorant = async (url:string,id:string) => {
        const data = await fetch(url + id);
        const response = await data.json();
        setDataAgent(response.data)
    }

    const updateImg = () => {
        const imgUrl = String(dataAgent?.fullPortrait)
        setNewImgUrl(imgUrl)
    }

    return ( 
        <FondoWeb>
                {
                 <BoxCharacter>
                     <BoxIz >
                        <TitleAgent>{dataAgent?.displayName}</TitleAgent>
                        <ContentDes>{dataAgent?.description}</ContentDes>
                            <div>
                                <ul style={{ height:"100%", overflowY: "hidden", }}>
                                { dataAgent?.abilities.map(item => (
                                    <ContentDes>{item.displayName}<span>
                                        {item.description}
                                        </span><span>
                                            <Icon src={!item.displayIcon ? iconFail : item.displayIcon } />
                                            </span></ContentDes>
                                ))}
                                </ul>
                            </div>
                     </BoxIz>
                     <BoxDe>
                         <ImgCharacter src={ !newImgUrl ?dataAgent?.fullPortrait : newImgUrl } alt="Img no encontrada"  />
                            <div style={{ display: "flex",justifyContent: "center",   }}>
                                <ButtonSkin onClick={updateImg}>
                                    <SkinImg src={dataAgent?.fullPortrait} alt=""/></ButtonSkin>
                                <ButtonSkin onClick={() => {
                                    const imgUrl = String(dataAgent?.fullPortraitV2)
                                    setNewImgUrl(imgUrl)
                                }}><SkinImg src={dataAgent?.fullPortraitV2} alt=""/></ButtonSkin>
                                <ButtonSkin onClick={() => {
                                    const imgUrl = String(dataAgent?.bustPortrait)
                                    setNewImgUrl(imgUrl)
                                }}><SkinImg src={dataAgent?.bustPortrait} alt=""/></ButtonSkin>
                            </div>
                     </BoxDe>
                 </BoxCharacter>
                }
        </FondoWeb>
     );
}

export default Character;