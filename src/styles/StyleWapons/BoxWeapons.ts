import styled from 'styled-components'


export const BoxWeapons = styled.div`
    display: grid;
    gap:20px;
    grid-template-columns: repeat(2, 1fr);
    margin : 100px 10px 10px 10px;
    padding: 30px 30px;
    @media (max-width: 1600px){
        grid-template-columns: repeat(2, 1fr);
        margin : 100px 10px 10px 10px;
}
  @media (max-width: 400px){
      grid-template-columns: repeat(1, 1fr);
      display: grid;
      justify-items: center;
      gap:5px;
      margin : 80px 2px 2px 2px;
      padding: 10px 2px;
  }
`