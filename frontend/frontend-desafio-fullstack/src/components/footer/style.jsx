import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 20%;
    background-color: #1a1a1a;
    display: flex;
    flex-direction: column;
    align-items: center;
    label{
        color: #555555;
        font-weight: bold;
        margin: 5px;
    }
    img{
        width: 20px;
        height: 20px;
        margin: 5px;
    }
    img:hover{
        cursor: pointer
    }
`