import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-image: url("/images/trabalhadores.jpg");
    background-size: cover;
`
export const Formulario = styled.div`
    width: 80%;
    height: 60%;
    margin: 5px auto;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    form{
        display:flex;
        justify-content: center;
        align-items: start;
    }
    div{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: end;
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
        label{
            font-weight: bold;
            color: #555555;
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
        color: white;
        border-radius: 10px;
        border: none;
        background-color: #007bff;
    }
    button:hover{
        background-color: #f9f8fc;
        color: #007bff;
        border: 1px solid #007bff;
        cursor: pointer;
    }
`