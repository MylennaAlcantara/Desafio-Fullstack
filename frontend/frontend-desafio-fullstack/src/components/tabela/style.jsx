import { styled } from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
`

export const Tabela = styled.div`
    height: 80%;
    width: 80%;
    margin: auto;
    table{
        width: 100%;
        height: auto;
        border-collapse:collapse;
        text-align: center;
    }
    th{
        color: #f9f8fc;
        position: sticky;
        top: 0px;
        left: 0px;
        background-color: #007bff;
        border-radius: 5px;
    }
    tbody tr td{
        border-bottom: 1px solid grey;
    }
    tbody tr td:hover{
        cursor: pointer;
    }
`