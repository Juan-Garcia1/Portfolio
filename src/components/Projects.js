import React from 'react'
import styled from 'styled-components'

import { Container } from '../Styles/Container'
import { primaryColor } from '../Styles/Global';

const Project = styled.figure`
    margin: 10px 0;
    overflow: hidden;
    position: relative;
    @media(min-width: 800px) {
        margin: 0px;
        &:hover > figcaption {

            // transform: translateY(0);
            transform: translateX(0);
        }
    }
`
const ProjectThumbnail = styled.img`
    width: 100%;
    height: 100%;
    display: block;
`
const ProjectContent = styled.figcaption`
    padding: 10px 0;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    // height: auto;
    background: #fff;
    transform: translateY(0);
    transition: transform .4s ease;
    @media(min-width: 800px) {
        top: 40%;
        width: 55%;
        height: 20%;
        bottom: initial;
        // transform: translateY(-100%);
        box-shadow: 0 1px 10px gray;
        transform: translateY(-40%);
        transform: translateX(-100%);
        display: flex;
        align-items: center;
        p {
            width: 100%;
            border-left: none;
        }
    }
`
const ProjectTitle = styled.p`
    color: ${primaryColor};
    margin: 0;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    line-height: 30px;
    border-left: solid 5px ${primaryColor};
    // border-left: solid 5px #0f2027;
    // border-right: solid 5px #0f2027;
    border-right: solid 5px ${primaryColor};
    padding-left: 0.80rem;
    text-transform: capitalize;
    letter-spacing: 1px;
    @media(min-width: 800px) {
        font-size: 1.3rem;
        font-weight: 400;
    }
`

const FlexContainer = Container.extend`
    padding-top: 80px;
    padding-bottom: 80px;
    display: flex;
    flex-wrap: wrap;
    > * {
        flex: 1 1 100%;
    }
    @media(min-width: 800px) {
        > * {
            flex-basis: 40%;
        }
    }
`

const Projects = ({ projects }) => {   
    if(projects) {
        var projects = projects.map((project, i) => (
            <Project key={i} >
                    <a href={project.url} target='_blank'>
                        <ProjectThumbnail src={`./images/${project.thumbnail}`} />
                    </a>
                    <ProjectContent>
                        <ProjectTitle>{project.name}</ProjectTitle>
                    </ProjectContent>
                </Project>
        ))
    }
    return (
        <section style={{ background: `${primaryColor}` }}>
            <FlexContainer>{projects}</FlexContainer>
        </section>
    )
}

export default Projects