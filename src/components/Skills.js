import React from 'react'
import styled from 'styled-components'
import { Container } from '../Styles/Container'
import { primaryColor } from '../Styles/Global';

const Section = styled.section`
    background: ${primaryColor};
    @media(min-width: 800px) {
        background: linear-gradient(90deg, ${primaryColor} 92%, #fff 8%);
    }
`

const SkillList = styled.ul`
    margin: 0;
    padding: 40px 0;
    list-style: none;
    @media(min-width:800px) {
        padding: 40px 20px;
        display: flex;
        flex-wrap: wrap;
        li {
            flex-basis: 50%;
        }
    }
`
const SkillName = styled.p`
    margin: 0;
    padding: 10px 0;
    color: #fff;
`

const SkillLevel = styled.div`
    width: ${props => `${props.width}%`};
    background-color: #fff;
    color: #fff;
`

const Skills = ({ skills }) => {
    if(skills) {
        var skills =  skills.map((skill, i) => (
            <li key={i}>
                <SkillName>{skill.name}</SkillName>
                <div>
                    <SkillLevel width={skill.level}>{skill.level}</SkillLevel>
                </div>
            </li>
        ))
    }
    return (
        <Section>
            <Container>
                <SkillList>{skills}</SkillList>
            </Container>
        </Section>
    )
}


export default Skills