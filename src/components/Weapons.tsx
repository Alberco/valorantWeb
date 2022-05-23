import { useEffect, useState } from "react";
import FondoWeb from "../styles/FondoWeb";
import { BoxWeapons } from "../styles/StyleWapons/BoxWeapons";
import { Weapon } from "../type";
import BottomLight from "../styles/bottom";
import Title from "../styles/Title";
import LinkDiv from "../styles/LinkDiv";
import { CardWeapons, ImgWeapons, Price } from "../styles/StyleWapons/weaponsStyle";

const URL = "https://valorant-api.com/v1/weapons"

interface Props {
    weapon: Array<Weapon>
}   

function Weapons() {

    const [newWeapon,setNewWeapon] = useState<Props["weapon"]>([])

    useEffect(() => {
        getDataWeaponValorant(URL)
    },[])

    const getDataWeaponValorant = async (url:string) => {
        const data = await fetch(url);
        const response = await data.json();
        setNewWeapon([...response.data])
    }

    return ( 
        <FondoWeb>
            <BoxWeapons>
                {
                    newWeapon.map(item => (
                        <CardWeapons key={item.uuid}>
                            <Title>{item.displayName}</Title>
                            <ImgWeapons src={item.displayIcon} alt="" />
                            <Price>$ { !item.shopData?.cost ? "No COST " : item.shopData?.cost }</Price>
                            <LinkDiv to={item.uuid}>
                                <BottomLight>Ver informacion</BottomLight>
                            </LinkDiv>
                        </CardWeapons>
                    ))
                }
            </BoxWeapons>
        </FondoWeb>
     );
}

export default Weapons;