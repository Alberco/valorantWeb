import styled from 'styled-components'


export const BoxWeapons = styled.div`
    display: grid;
    gap:20px;
    grid-template-columns: repeat(2, 1fr);
    margin : 0px 100px;
    padding: 30px 30px;
    @media (max-width: 1600px){
        grid-template-columns: repeat(2, 1fr);
        margin : 0px 1rem;
  }
`