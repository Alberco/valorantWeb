import styled from 'styled-components'


const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: space-evenly;
    border : solid 2px white;
    border-radius : 40px 10px ;
    background-color : #A41D0E;
    height: 460px;
    width: 300px;
    margin-bottom:30px;
    border: solid 4px white; 
    transition-duration: 0.5s;
    &:hover {
        transform: scale(1.05);
    }
`

export default CardBox;