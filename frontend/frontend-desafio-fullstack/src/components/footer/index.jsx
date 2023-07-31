import React from "react";
import {Container} from "./style"

export const Footer = () => {
    return(
        <Container>
            <label>by Mylenna Alcantara | 2023</label>
            <div>
                <label>Email: </label>
                <label style={{color: "#CCC"}}>mylenna.a.a.corinthiana@gmail.com</label>
                <label>Whatsapp: </label>
                <label style={{color: "#CCC"}}>(81) 9 9359-0099</label>
            </div>
            <div>
                <img src="/images/icones/instagram_icon.png"/>
                <img src="/images/icones/github_icon.png"/>
                <img src="/images/icones/linkedin_icon.png"/>
            </div>
        </Container>
    )
}