import styled from 'styled-components'

const Navbar = styled.div`
    background-color: #0C0C17;
    display: flex;
    align-items: center;
    justify-content : space-around;
    color: white;
    padding: 0.1rem  2rem ;
    border-bottom: solid 2px white;
    position : fixed;
    z-index: 10000;
    width:100vw;
    @media (max-width: 400px){
        padding: 20px  10px ;
        border-bottom: solid 2px white;
    }

`

export default Navbar;