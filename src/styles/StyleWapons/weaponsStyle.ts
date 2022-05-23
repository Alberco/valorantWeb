import styled from 'styled-components'


export const CardWeapons = styled.div`
    display: flex;
    flex-direction: column;
    align-items : center;
    padding: 5px;
    background: #A41D0E;
    border: solid 4px #504645;
    border-radius: 10px;
    transition: 0.2s;
    margin-right:20px;
    &:hover{
        border: solid 4px white;
        transform: scale(1.05);

    }
`
export const ImgWeapons = styled.img`
    width: auto;
    height: 8rem;

`
export const Price = styled.p`
    font-size:1.5rem;
    font-family :'Staatliches', cursive;
    color: white;
`