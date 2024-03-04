import styled from 'styled-components';

export const PageContainer = styled.div`
   width: 100%;
   flex: 1;
   > * {
      width: 100%;
      height: 100%;
      max-height: 680px;
      overflow: scroll;
   }
`;
