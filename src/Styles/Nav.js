import styled from "styled-components";
import { primaryColor } from "./Global";

export const NavBar = styled.nav`
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 18px 0;
  z-index: 1000;
  border-top: solid 8px ${primaryColor};
`;

// export const HamburgerIcon = styled.button`
//     background: none;
//     border: none;
//     font-size: 20px;
//     cursor: pointer;
//     outline: none;
//     color: hsl(0, 0%,90%);
//     transition: color .3s ease-in;
//     &:hover {
//         color: #2C5364;
//     }
//     &.active {
//         color: #2C5364;
//     }
// `;

// export const SideNav = styled.ul`
//     font-family: sans-serif;
//     padding: 0;
//     margin: 0;
//     list-style: none;
//     position: absolute;
//     background: white;
//     top: 100%;
//     left: 0;
//     bottom: 0;
//     height: 100vh;
//     width: 250px;
//     transform: translateX(-100%);
//     transition: transform .35s ease-in-out;
//     &.open-sidenav {
//         transform: translateX(0)
//     }
// `;

// export const SideNavItem = styled.li`
//     padding: 10px 0 10px 18px;
//     border-left: solid 5px transparent;
//     color: gray;
//     &:hover {
//         background: hsl(200,5%,95%);
//     }
// `;
