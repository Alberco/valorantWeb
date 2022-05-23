import styled from "styled-components";

export const BoxGuns = styled.div`
display: grid;
border: solid 2px white;
border-radius : 10px;
margin: auto 25px;
background: #0C0C17;
padding-bottom: 100px;

`
export const BoxStadist = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
`
export const ImgGuns = styled.img`
width: autp ;
height: 10rem;

`

export const TitleWeapon = styled.p`
font-size: 5rem;
color : white;
font-family :'Staatliches', cursive;
font-weight : bold;
text-align: center;
`

export const TableStats = styled.table`
color: white;
text-align: center;
> tr,td ,th{
    color: white;
    padding: 10px 10px;
    text-align: center;
    font-size: 1.3rem;
}

`

export const BoxSkins = styled.div`
display: grid;
grid-template-columns: repeat(1, 1fr);
justify-content: center;
text-align: center;
align-items: center;
align-content: center;
color: white;
font-family :'Staatliches', cursive;
font-size:2rem;

`