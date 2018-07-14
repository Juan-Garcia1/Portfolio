import React, { Component } from 'react'
import styled from 'styled-components'
import { Container } from '../Styles/Container'
import { primaryColor } from '../Styles/Global';

const BadgeIcon = styled.img`
    width: 8%;
    object-fit: contain;
    display: block;
    margin: 10px 10px 10px 0;
`
const FlexBadges = Container.extend`
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    > * {
        flex: 1 10% 10%;
    }
`
const BadgeDescription = styled.p`
    color: hsl(100,5%, 65%);
    font-weight: 600;
    a {
        text-decoration: none;
        color: ${primaryColor};
    }
`
const Flex = styled.div`
    @media(min-width: 800px){
        display: flex;
        > div:nth-child(2) {
            justify-content: center;
        }
    }
`

class Badges extends Component {
    constructor() {
        super()
        this.state = { 
            badges: []
         }
    }
    fetchBadges() {
        fetch('https://teamtreehouse.com/juangarcia9.json')
        .then(res => res.json())
        .then(data => {
            this.setState({
                badges: data
            })
            // console.log(data)
        })
    }
    componentDidMount() {
        this.fetchBadges()
    }
    render() {
        const { badges } = this.state
        if(badges.length === 0) {
            return ''
        } 

        if(badges) {
            var totalBadges = badges.badges.length
            // SHOW BADGE ICON
            var courseBadges = badges.badges.map(b => (
                <BadgeIcon key={b.id} src={b.icon_url} title={b.name} />
            )).sort((a,b) => b-a)
        }
        
        return (
            <section style={{ padding: '5% 0' }}>
                <Container>
                    <Flex>
                        <div>
                            <h2 style={{ fontWeight:'400', color: '#203a43' }}>Badges</h2>
                            <BadgeDescription>
                                I've earned {totalBadges} badges on <a href='https://teamtreehouse.com/' target='_blank'><strong><i>teamtreehouse</i></strong></a> so far.
                            </BadgeDescription>
                        </div>
                        <FlexBadges>
                            {courseBadges}
                        </FlexBadges>
                    </Flex>
                </Container>
            </section>
        )
    }
}

export default Badges