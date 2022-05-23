import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FondoWeb from "../styles/FondoWeb";
import { BoxGuns, BoxSkins, BoxStadist, ImgGuns, TableStats, TitleWeapon } from "../styles/weapon/weaponStyles";
import { Weapon } from "../type";

const URL = "https://valorant-api.com/v1/weapons/"

interface Props {
    result : Weapon
}

function WeaponGuns () {
    
    let params = useParams() 

    const [newGuns,setNewGuns] = useState<Props["result"]> ()

    const id = String(params.weaponsId)

    useEffect(()=> {
        getDataGunsValorant(URL,id)
    },[id])

    const getDataGunsValorant = async (url:string,id:string) => {
        const data = await fetch(url + id);
        const response = await data.json();
        setNewGuns(response.data)
    }


    return ( 
        <FondoWeb>
            <BoxGuns>
                <TitleWeapon>{newGuns?.displayName}</TitleWeapon>
                <BoxStadist>
                    <TableStats>
                        <tr style={{ background: "#A41D0E" }}>
                            <th scope="row"></th>
                            <th>Weapon Stats</th>
                        </tr>
                        <tr>
                            <th>Cost</th>
                            <td>{newGuns?.shopData.cost}</td>
                        </tr>
                        <tr>
                            <th>Category</th>
                            <td>{newGuns?.shopData.categoryText}</td>
                        </tr>
                        <tr>
                            <th>Fire rate</th>
                            <td>{newGuns?.weaponStats.fireRate}</td>
                        </tr>
                        <tr>
                            <th>Magazine Size</th>
                            <td>{newGuns?.weaponStats.magazineSize}</td>
                        </tr>
                        <tr>
                            <th>Run Speed Multiplier</th>
                            <td>{newGuns?.weaponStats.runSpeedMultiplier}</td>
                        </tr>
                        <tr>
                            <th>Equip Time Seconds</th>
                            <td>{newGuns?.weaponStats.equipTimeSeconds}</td>
                        </tr>
                        <tr>
                            <th>Reload Time Seconds</th>
                            <td>{newGuns?.weaponStats.reloadTimeSeconds}</td>
                        </tr>
                        <tr>
                            <th>Shot Gun Pellet Count</th>
                            <td> {newGuns?.weaponStats.shotgunPelletCount}</td>
                        </tr>
                    </TableStats>
                    <TableStats>
                        <tr style={{ background: "#A41D0E" }}>
                             <th scope="row"></th>
                            <th>Damage Ranges</th>
                        </tr>
                        {
                            newGuns?.weaponStats.damageRanges.map(i => (
                                <>
                                <tr>
                                    <th>{i.rangeStartMeters === 0 ? "No Armor": "Armor"}</th>
                                </tr>
                                    <tr>
                                        <th>Distance initial</th>
                                        <td>{i.rangeStartMeters}</td>
                                    </tr>
                                    <tr>
                                            <th>Distance end </th>
                                        <td>{i.rangeEndMeters}</td>
                                    </tr>
                                    <tr>
                                            <th>Head Damege </th>
                                        <td>{i.headDamage}</td>
                                    </tr>
                                    <tr>
                                            <th>Body Damege </th>
                                        <td>{i.bodyDamage}</td>
                                    </tr>
                                    <tr>
                                    <th>Leg Damege </th>
                                        <td>{i.legDamage}</td>
                                    </tr>
                                </>
                            ))
                        }
                    </TableStats>
                </BoxStadist>
                <TitleWeapon>Skins </TitleWeapon>
                <BoxSkins>

                {
                    newGuns?.skins.map(i =>(
                        <div>
                            <p>{i.displayName}</p>
                            <ImgGuns src={i.displayIcon} alt="" />
                        </div>
                    ))
                }
                </BoxSkins>
            </BoxGuns>

        </FondoWeb>
     );
}

export default WeaponGuns;