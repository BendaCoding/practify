import { styled } from "practify/theme";
import { FaCog } from "react-icons/lib/fa";

export const TimeSignature = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
`;

export const Cog = styled.div`
  //Waiting for merge with button colors. Sould use button Colors.
  color: ${({ theme }) => theme.colors.primary};
  &:hover{
    cursor:pointer;
    color: ${({ theme }) => theme.colors.light};
  }

`;
