import React from 'react'
import styled from 'styled-components'

import { createMarkup } from '../helperFunctions'
import { Container } from '../Styles/Container'

// #0f2027, #203a43

const Header = styled.header`
    height: 70vh;
    background: linear-gradient(0deg, rgba(15, 32, 39,.8), rgba(32, 58, 67,.8)), url('../../images/chicago.jpg') no-repeat center center;
    background-size: cover;
    display: flex;
    align-items: center;
    @media(min-width: 800px) {
        height: 100vh;
    }
`;

const HeaderTitle = styled.h2`
    color: #fff;
    font-size: 1.8rem;
    margin: 0;
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 5px;
    @media(min-width: 800px) {
        font-size: 4.2rem;
    }
`;

const HeaderBio = styled.p`
    max-width: 540px;
    font-weight: 600;
    line-height: 1.5;
    color: hsl(200, 90%, 90%);
    a {
        color: #fff;
        /*color: #203a43;*/
        /* background-color: #fff;*/
        text-decoration: none;
        padding: 3px 8px;
        /*border-radius: 4px;*/
        font-style: italic;
        margin-left: -6px;
        &:after {
            content: '\f1cb';
            font-family: 'FontAwesome';
            font-weight: normal;
            margin-left: 5px;
            color: #fff;
            font-style: normal;
        }
    }
`;

const SocialList = styled.ul`
    padding: 0;
`;
const SocialItems = styled.a`
    color: #fff;
    text-decoration: none;
    margin-right: 12px;
    padding: 10px;
`
const SocialIcon = styled.i`
    font-size: 1.1em;
    &:hover {
        color: hsl(200, 90%, 90%);
    }
`;

const Home = ({main, social}) => {        
    if(main && social) {
        var title = main.title
        var bio = main.bio
        var socialLinks = social.map((s,i) => (               
            <SocialItems key={i} href={`${s.url}`} target="_blank" title={s.name}>
                <SocialIcon className={s.className}></SocialIcon>
            </SocialItems>
        ))
    }

    return (
        <Header>
            <Container>
                <HeaderTitle>{title}</HeaderTitle>
                <HeaderBio dangerouslySetInnerHTML={createMarkup(bio)} />
                <SocialList>{socialLinks}</SocialList>
            </Container>
        </Header>
    )
}

export default Home