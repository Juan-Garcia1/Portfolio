import React from 'react'
import styled from 'styled-components'
import { Container } from '../Styles/Container'
import { primaryColor } from '../Styles/Global';

const Flex = styled.div`
    padding: 20px 0;
    display: flex;
    justify-content: center;
    }
    @media(min-width: 800px) {
        justify-content: flex-end;
    }
`
const SocialNavLinks = styled.nav`
    a {
        color: #fff;
        padding: 10px;
        margin: 0 5px;
    }
`

const Footer = ({ social }) => {
    const socialLinks = social && social.map((s, i) => (
        <a key={i} href={s.url} title={s.name}><i className={s.className}></i></a>
    ))
    
    return(
        <footer style={{background: `${primaryColor}`}}>
            <Container>
                <Flex>
                    <SocialNavLinks>
                        {socialLinks}
                    </SocialNavLinks>
                </Flex>
            </Container>
        </footer>
    )
}

export default Footer