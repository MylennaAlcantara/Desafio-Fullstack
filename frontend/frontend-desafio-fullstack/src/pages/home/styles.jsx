import style from "styled-components";

export const Container = style.div`
    width: 100%;
    height: 100%;
    #imagem-inicio{
        background-color: #007bff;
        width: 100%;
        height: 80%;
        position: relative;
    }
    #imagem-inicio:before{
        content: ' ';
        position: absolute;
        background-image: url(/images/trabalhadores2.jpg);
        background-size: cover;
        opacity: 0.6;
        width: 100%;
        height: 100%;
        z-index:1;
    }
`
export const Explain = style.div`
    width: 100%;
    .image-opacity{
        margin: 5px 5%;
        content: ' ';
        position: relative;
        width: 45%;
        height: 100%;
        background-color: #007bff;
        z-index:5;
    }
    img{
        position: relative;
        width: 100%;
        height: 100%;
        opacity: 0.6;
    }
    

    .profissionais{
        width: 100%;
        display: flex;
        align-items: center;
        .texto{
            h3{
                color: #007bff;
            }
            p{
                color: #1a1a1a;
            }
            margin: auto;
            width: 30%;
            display: flex;
            flex-direction: column;
            aling-items: center;
            justify-content: center;
        }
    }
    .profissoes{
        width: 100%;
        display: flex;
        align-items: center;
        .texto{
            h3{
                color: #007bff;
            }
            p{
                color: #1a1a1a;
            }
            margin: auto;
            width: 30%;
            display: flex;
            flex-direction: column;
            aling-items: center;
            justify-content: center;
        }
    }
`