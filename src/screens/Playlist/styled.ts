import { breakpoint, styled } from 'practify/theme';

export const Desc = styled.p`
  ${breakpoint.md} {
    grid-column: 1/4;
  }
`;

export const Hero = styled.div`
  display: grid;
  padding: 1rem;
  grid-gap: 01rem;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;

  ${breakpoint.md} {
    grid-template-columns: 200px auto;
    grid-template-rows: 200px auto;
    grid-gap: 1rem;
    justify-items: start;
    align-items: end;
  }
`;

export const Tags = styled.div`
  margin-bottom: 0.5rem;
  ${breakpoint.md} {
    grid-column: 2/3;
    grid-row: 1/2;
    margin: 6px;
  }
`;

export const Infos = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: auto;
  ${breakpoint.md} {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto 40px;
    justify-items: start;
    align-items: end;
  }
`;

export const Cover = styled.div`
  width: 40%;
  max-width: 200px;
  ${breakpoint.md} {
    height: 200px;
    width: 200px;
  }
`;

 export const Buttons = styled.div`
 margin:0 -.5em;
    ${breakpoint.md} {
      grid-column: 1/3;
    }
 
 `;
