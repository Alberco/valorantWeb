import styled from "styled-components";
import Description from "../Description";


export const TitleAgent = styled.p`
    text-align: center;
    font-size: 3.5rem;
    color : white;
    font-family :'Pathway Gothic One', sans-serif;
    margin: auto auto;
`
export const BoxIz = styled.div`
    margin: auto auto;
    padding-top: 0.1rem;
    background-color: #0C0C17;
    height: 80vh;
    border-radius: 8px 60px ;
    width: 80vw;
    @media (max-width: 1600px){
        padding-top: 4rem;
  }
    
`
export const BoxDe = styled.div`
    padding-top: 4rem;
    background-color: #0C0C17;
    height: 90vh;
    border-radius: 8px 60px ;
    width: 90vw;

    @media (max-width: 1600px){
        height: 90vh;
  }

`
export const ContentDes = styled(Description)`
    font-size: 1.4rem;
    padding: 0px 100px;
    @media (max-width: 1600px){
        font-size: 0.9rem;
        padding: 0px 70px;
  }
    
`

export const Icon = styled.img`
    width:4rem;
    height:3.7rem;
`

export const ButtonSkin = styled.button`
    background:none;
    border:none;
`

export const SkinImg = styled.img`
    width:8rem;
    height:8rem;
    background:#882a20;
    border: solid 1px white;
    cursor: pointer;
`