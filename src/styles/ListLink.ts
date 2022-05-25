import styled from 'styled-components'

const ListLink = styled.div`
    display: flex;
    justify-content : center;
    color: white;
    gap : 2rem;
    @media (max-width: 400px){
      gap:5px;
      justify-content: center;
      justify-items: center;
  }

`

export default ListLink;