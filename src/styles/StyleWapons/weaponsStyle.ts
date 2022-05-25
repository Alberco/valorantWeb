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
    @media (max-width: 1600px){
        
    }
    @media (max-width: 400px){
        width: 320px;
        height: 400px;
        margin:5px;
        padding: 1px;
        align-items : center;
        justify-content: center;
    }
`
export const ImgWeapons = styled.img`
    width: auto;
    height: 8rem;
    @media (max-width: 1600px){
        width:300px;
        height:100px;
}
  @media (max-width: 400px){

  }
    

`
export const Price = styled.p`
    font-size:1.5rem;
    font-family :'Staatliches', cursive;
    color: white;
`