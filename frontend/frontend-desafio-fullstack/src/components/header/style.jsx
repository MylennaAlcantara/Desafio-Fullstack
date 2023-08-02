import style from "styled-components";

export const Container = style.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0px;
    z-index:2;
    background-color: white;
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
    @media(max-width: 460px){
        .contatos{
            display: none;
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
    .hamburguer{
        display: none;
    }
    .menu{
        display: flex;
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
        .button{
            display: inline-block;
        }
        .menu-item{
            display: none;
            position: absolute;
            background-color: #f9f8fc;
            width: 160px;
            z-index: 3;
        }
        .button:hover .menu-item{
            display: block;
            button{
                background-color: #f9f8fc;
            }
        }
    }
    @media(max-width: 460px){
        display: flex;
        justify-content: space-around;
        .hamburguer{
            display: flex;
        }
        #menu-desativado{
            display: none;
        }
        #menu{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 30%;
            .menu{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 30%;
                position: relative;
                .button{
                    width: 100px;
                }
                button{
                    width: 100%;
                }
            }
        }
    }
`