import styled from 'styled-components'
import { primaryColor } from './Global'

export const Header = styled.div`
    h2 {
        margin-left: 9%;
        display: inline-block;
        position: relative;
        text-transform: uppercase;
        font-weight: 400;
        letter-spacing: 2px;
        &:before {
            content: '';
            position: absolute;
            top: -2px;
            left: -15px;
            width: 11px;
            height: 11px;
            background: ${primaryColor};
        }
    }
    @media(min-width: 800px) {
        background: ${primaryColor};
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10% 0;
        h2 {
            padding-left: 0;
            display: block;
        }
    }
`