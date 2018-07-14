import React from 'react'
import styled from 'styled-components'
import { Container } from '../Styles/Container'
import { FlexContainer } from '../Styles/FlexContainer'
import { Header } from '../Styles/Header'

const AboutParagraph = styled.p`
    margin: 0;
    line-height: 1.5;
    font-weight: 600;
    color: hsl(100,5%, 65%);
`
 
const About = ({ about }) => {
    // if(about) {
    //     var about = about.description
    // }
    return (
        <FlexContainer>
            <Header>
                <h2>About</h2>
            </Header>
            <Container>
                <AboutParagraph>{about && about.description}</AboutParagraph>
            </Container>
        </FlexContainer> 
    )
}
   
export default About