import styled from 'styled-components';

const bgColor = '#f3f3f3';

export const NavigationContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

   width: 100%;
   height: 100px;
   min-height: 100px;
   position: relative;
   background-color: ${bgColor};
   border-radius: 40px 40px 0 0;

   margin-bottom: auto;
   z-index: 2;
   @media screen and (orientation: portrait) {
      border-radius: 0;
   }
`;

export const ListContainer = styled.ul`
   margin: 0;
   padding: 0;
   box-sizing: border-box;

   margin-top: auto;
   display: flex;
   justify-content: center;
   width: 350px;
`;

export const ListItem = styled.li`
   list-style: none;
   position: relative;
   width: 70px;
   height: 60px;
   z-index: 2;

   .active span {
      background: var(--clr);
      color: ${bgColor};
      transform: translateY(25px);
      position: relative;
      &::before {
         content: '';
         position: absolute;
         top: 50%;
         left: 50%;
         width: 115%;
         height: 115%;
         transform: translate(-50%, -50%);
         background: var(--clr);
         border-radius: 50%;
         filter: blur(5px);
         opacity: 0.5;
      }
   }
`;

export const Link = styled.a`
   cursor: pointer;
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100%;
   width: 100%;
`;

export const Icon = styled.span`
   position: relative;
   display: block;
   width: 55px;
   height: 55px;
   text-align: center;
   line-height: 65px;
   border-radius: 50%;
   color: #222222;
   font-size: 1.5em;
   transition: 0.5s;
   transition-delay: 0s;
`;

export const Indicator = styled.div`
   position: absolute;
   top: 60px;
   width: 70px;
   height: 70px;
   background: ${bgColor};
   border-radius: 50%;
   z-index: 1;
   transition: 0.5s;
   transform: ${({ $activeLink }) => `translateX(${$activeLink * 70 - 140}px)`};

   &::before {
      content: '';
      position: absolute;
      top: 40px;
      left: -25px;
      width: 30px;
      height: 30px;
      background: transparent;
      border-radius: 50%;
      box-shadow: 15px -18px ${bgColor};
   }
   &::after {
      content: '';
      position: absolute;
      top: 40px;
      right: -25px;
      width: 30px;
      height: 30px;
      background: transparent;
      border-radius: 50%;
      box-shadow: -15px -18px ${bgColor};
   }
`;
