import styled from "styled-components";

export const Contaneir = styled.div`
display: grid;
height: 100vh;
grid-template-rows: 12vh 88vh;

`

 export const Main = styled.div`
 grid-row: 2/3;
 display: grid;
 justify-content: center;
 align-items: center;
 grid-template-columns: 50vw 50vw;
 margin-top: 30px;
 

 `

export const Logo = styled.div`
grid-column: 1/2;
grid-row: 1/2;
align-items: center;
justify-content: center;
display: flex;




 img{
   height: 90px;
   width: 110px;
   
   
} 



`

export const GridBoxServices = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   margin-top: 30px;
`

export const Tags = styled.div`
grid-column: 2/4;
display: flex;
justify-content: flex-end;
align-items: center;
color: white;


h3{
   margin-right: 20px;
   color: black;


}


`

export const Header = styled.div`
height: 100px;
grid-row: 1/2;
display: grid;
grid-template-columns: 15vw 55vw 30vw;
grid-column: 1/2;
background-image: linear-gradient(180deg, #7fdeff, #eabaf6 );








`


 export const Box = styled.div` 
 display: flex;
 height: 120%;
 width: 160%;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 
 border-radius: 20px;
 
 

 input{
    width: 50%;
    margin-bottom: 10%;
    margin-top: 20px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom:0.5px solid black;
    

 }

 select{
    margin-bottom: 15px;
    border-radius: 5px;

 }

 h2{
   font-family: 'Plus Jakarta Sans', sans-serif;
    color: black;
 }

 button{
    border-radius: 8px;
    background-color: white;
    
   
 }

 `

 export const Left = styled.div`
 display: flex;
 justify-content: space-around;
 align-items: center;
 grid-row: 1/2;
 grid-column: 1/2;
 flex-direction: column;
 height: 100%;
 background-color:  #f5f5f5;
 background-image: linear-gradient(180deg, #7fdeff, #eabaf6 );

 
 
 
 

 `

 export const Descricao = styled.div`
 
 h1{
   font-style: italic;
 }
 
 `

 export const Fotodescricao =  styled.div`
 
 height: 57vh;


 img{
    height: 100%;
    width: 100%;

 }

 `

 export const Right = styled.div`
 display: flex;
 grid-row: 1/2;
 grid-column: 2/3;
 align-items: center;
 justify-content: center;
 
 `

 export const TextsHomePage = styled.div`
   margin-top: 60px;
 `
 
export const BarraDePesquisa = styled.div`
   margin-top: 40px;
`

 


