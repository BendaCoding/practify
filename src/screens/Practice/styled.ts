import { styled, breakpoint } from "practify/theme";

export const Screen = styled.div`
  width: 100%;
  min-height: calc(100vh - 50px);
  display: grid;
  grid-template-rows: 3px 0.2fr 60% .1fr 1fr 3fr;
  grid-row-gap: 5px;
  text-align: center;

  grid-template-areas:
    "SteppedProgressBar"
    "heading"
    " exercise"
    "info"
    "description"
    "transportArea";

  ${breakpoint.lg`
    align-items: start;
    text-align: left;
    grid-template-columns: 200px 3fr 2fr 300px;
    grid-template-rows: 220px auto auto auto 3px;

    grid-template-areas:
      "avatar               heading              transportArea        playlist"
      ".                    exercise             exercise             playlist"
      ".                    info                 info                 playlist"
      ".                    description          description          playlist"
      "SteppedProgressBar   SteppedProgressBar   SteppedProgressBar   SteppedProgressBar";
  `}
  ${breakpoint.xl`
    align-items: start;
    text-align: left;
    grid-template-columns: 200px 3fr 2fr auto 300px;
    grid-template-rows: 220px auto auto auto 3px;

    grid-template-areas:
      "avatar               heading              transportArea        .                     playlist"
      ".                    exercise             exercise             .                     playlist"
      ".                    info                 info                 .                     playlist"
      ".                    description          description          .                     playlist"
      "SteppedProgressBar   SteppedProgressBar   SteppedProgressBar   SteppedProgressBar   SteppedProgressBar";
  `}
`;

export const HeadingArea = styled.div`
  grid-area: heading;
  display: flex;
  flex-direction: column;

  ${breakpoint.md`
    align-items: flex-start;
    justify-self: start;
    margin-left: 1rem;
  `}

  ${breakpoint.lg`
    align-self: center;
  `}
`;

export const AvatarArea = styled.div`
  display: none;
  
  ${breakpoint.lg`
    display: block;
    padding: 24px 12px 12px;
    background-size: cover;
    background-position: center;
    grid-area: avatar;
  `}
`;

export const Aside = styled.aside`
  margin-left: ${props => `${props.theme.space[3]}px`};
  padding-top: ${props => `${props.theme.space[3]}px`};
  grid-area: playlist;
  align-self: start;
  display: none;

  ${breakpoint.lg`
    display: block;  
  `}
`;

export const Description = styled.div`
  margin: 0px 20px;
  grid-area: description;
  ${breakpoint.md`
    text-align:left;
  `}
  
  ${breakpoint.lg`
    margin: 24px 0 48px;
  `}
`;

export const TransportControls = styled.div`
  grid-area: transportArea;
  text-align: center;
  align-self: center;
`;

export const ExerciseArea = styled.div`
  grid-area: exercise;
  height: 100%;
`;

export const InfoArea = styled.div`
  grid-area: info;
`;















