import styled from 'styled-components'


const ListCard = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 100px 140px;
  justify-items: center;
  align-items: center;
  place-content: center;

  @media (max-width: 1600px){
    grid-template-columns: repeat(4, 1fr);
    gap:20px;
  }
  @media (max-width: 400px){
    grid-template-columns: repeat(1, 1fr);
    gap:20px;
    padding: 100px 14px 14px 14px;
    justify-items: center;
    align-items: center;
    place-content: center;
  }
  
`

export default ListCard