import style from "styled-components";

export const Container = style.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
        height: 20px;
        width: 20px;
        margin: 0 10px;
    }
`
export const Contato = style.div`
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #f9f8fc;
    label{
        margin: 0 5px;
        color: #555555;
        font-weight: bold;
    }
    .contatos{
        display: flex;
        align-items: center;
        justify-content: space-around;
        div{
            margin: 0 10px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    .redes-sociais{
        display: flex;
        img:hover{
            cursor: pointer;
        }
    }
`
export const NavBar = style.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    h1{
        color: #007bff;
    }
    .menu{
        height: 100%;
        button{
            font-weight: bold;
            background-color: white;
            height: 100%;
            border: none;
            padding: 5px;
            color: #1a1a1a;
        } 
        button:hover{
            cursor: pointer;
            color: #007bff;
        }
    }
`