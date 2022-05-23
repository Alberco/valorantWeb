import styled from 'styled-components'


const ListCard = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px 140px;
  justify-items: center;
  align-items: center;
  place-content: center;

  @media (max-width: 1600px){
    grid-template-columns: repeat(4, 1fr);
    gap:20px;
  }
`

export default ListCard