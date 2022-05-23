import styled from 'styled-components'

const BottomLight = styled.button`
    text-align: center;
    font-family :'Staatliches', cursive;
    padding: 20px 60px;
    margin:10px 20px;
    border: solid 2px black;
    background-color: black;
    border-radius:5px;
    color:white;
    font-size:1.1rem;
    transition: all 0.8s; 
    &:hover {
        background-color:#1B1515;
        border: solid 2px white;
        cursor: pointer;
    }

`;

export default BottomLight;