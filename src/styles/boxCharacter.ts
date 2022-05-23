import styled from 'styled-components'

const BoxCharacter = styled.div`
    display: flex;    
    background-color: #0C0C17;
    height: 100vh;
    border-radius: 8px 60px ;
    width: 90vw;
    border : solid 2px #A41D0E;
    margin: auto auto;
    padding-bottom: 180px;

    @media (max-width: 1600px){
        height: 80vh;
  }
`

export default BoxCharacter;