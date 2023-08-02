import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
`
export const Formulario = styled.div`
    width: 100%;
    height: 60%;
    margin: 5px auto;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    background-color: #007bff;
    position: relative;

    &&:before{
        content: ' ';
        position: absolute;
        background-image: url("/images/profissoes.jpg");
        background-size: cover;
        opacity: 0.6;
        width: 100%;
        height: 100%;
        z-index:1;
    }

    h2{
        z-index: 2;
    }
    form{
        z-index: 1;
        display:flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
    }
    div{
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: end;
        select,
        input{
            height: 30px;
            width: 300px;
            margin: 5px;
            border: none;
            border-radius: 5px 5px 0 0;
            background-color: #f9f8fc;
            border-bottom: 1px solid #555555;
        }
        input[type=checkbox]{
            width: 30px;
        }
        label{
            font-weight: bold;
            color: Black;
        }
        select:focus,
        input:focus{
            border-bottom: 2px solid #007bff;
            outline: 0;
            box-shadow: 3px 3px 6px #555555;
        }
    }
    button{
        height: 40px;
        width: 100px;
        margin: 5px;
        color: white;
        border-radius: 10px;
        border: none;
        background-color: #007bff;
        z-index: 1;
    }
    button:hover{
        background-color: #f9f8fc;
        color: #007bff;
        border: 1px solid #007bff;
        cursor: pointer;
    }
`