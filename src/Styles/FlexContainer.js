import styled from 'styled-components'

export const FlexContainer = styled.section`
    display: flex;
    flex-direction: column;
    padding: 5% 0;
    @media(min-width: 800px) {
        padding: 0;
        flex-direction: row;
        > div {
            flex-basis: 40%;
        }
    }
`