import { styled } from 'practify/theme';
import { Tr as BaseTr } from 'practify/components';
import { CoverCard } from '../../atoms/CoverCard';
import { ProgressBar } from 'practify/components';
interface TrProps {
  active: boolean;
}

export const Tr = styled<TrProps, any>(BaseTr)`
  ${({ theme, active }) => active && `color: ${theme.colors.typo.highlight};`};
`;

export const Name = styled.p`
  font-weight: bold;
  margin: 0;
  align-self: end;
  grid-area: nameArea;
`;

export const Info = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: bold;
  display: inline;
  margin: 0;
`;

export const Description = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small};
  grid-area: descriptionArea;
  color: ${({ theme }) => theme.colors.typo.secondary};
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow:hidden;  
`;

export const Options = styled.div`
  grid-area: optionsArea;
  align-items: center;
  align-self: center;
  justify-content: center;
  padding-left: 2px;
  &:hover {
    background: ${({ theme }) => theme.colors.light};
  }
`;
export const Cover = styled(CoverCard)`
  grid-area: coverArea;
`;

export const Exercise = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr 10% 2rem 20px;
  grid-template-rows: auto auto;

  grid-template-areas:
    "nameArea        nameArea        progressBarArea . optionsArea"
    "descriptionArea descriptionArea progressBarArea . optionsArea";
`;

export const Progress = styled.div`
  width: 100%;
  grid-area: progressBarArea;
  align-self: center;
  justify-self: center;
`;

export const Bullet = styled.div`
  font-weight: bold;
  margin: 0.3em;
  display: inline-block;
`;
