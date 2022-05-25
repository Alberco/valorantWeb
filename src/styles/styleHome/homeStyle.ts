import styled from 'styled-components'

export const BoxHome = styled.div`
    display: flex;
    justify-content: space-between;
    border: solid 3px white; 
    justify-items: center;
    border-radius: 20px;
    text-align: center;
    align-items: center;
    margin: auto 10rem;
    background: #0C0C17;
    height: 48rem; 
    color: white;
    columns: 2;
    margin-top: 93px;
    @media (max-width: 1600px){
        
    }
    @media (max-width: 400px){
        margin: 100px 1rem 20px 1rem;
        flex-direction: column;
        gap: 50px;
    }
`
export const HomeTitle = styled.p`
    padding : 2px 30px;
    font-size: 4rem;
    text-align : center;
    font-family :'Staatliches', cursive;
    font-weight : bold;
    color: #fff;
    @media (max-width: 1600px){
        
    }
    @media (max-width: 400px){
        font-size: 2rem;
    }
`

export const Box = styled.div`
    flex-basis: 50%;
    text-align: center;
`
export const ImgAgen = styled.img`
    height: 90vh;
    @media (max-width: 1600px){
        
    }
    @media (max-width: 400px){
        height: 300px;
    }
`
export const BottomD = styled.button`
    background:#A41D0E;
    padding: 20px 50px;
    font-family :'Staatliches', cursive;
    color: white;
    font-size: 1.4rem;
    &:hover {
        transition: 1s;
        background-color:#a41d0eca;
        border: solid 2px white;
        cursor: pointer;
    }

`