import * as React from 'react'
import { ThemeProps, withTheme } from 'styled-components';

export interface IPractifyLogoProps extends ThemeProps<ITheme> {
  color?: string;
  size?: number;
  transition?: string;
  className?: string;
}

export const PractifyLogo: React.SFC<IPractifyLogoProps> = ({
  theme,
  color = theme.colors.spinner.dark,
  size = 30,
  transition = '',
  className = '',
}) => {

  const style = transition ? { style: { transition } } : {};

  return (
    <svg
      viewBox="0 0 913.18 862.11"
      width={`${size}px`}
      height={`${size}px`}
      fill={color}
      className={className}
      {...style}>
      <defs />
      <path
        className="a"
        d="M168.87 116.97C-5.2 275.96-17.41 545.96 141.59 720.06s429 186.27 603 27.28 186.31-429 27.32-603.06-428.96-186.3-603.04-27.31zm443.2 485.24c-93.92 85.78-239.6 79.18-325.38-14.74s-79.18-239.59 14.74-325.41 239.59-79.18 325.37 14.74 79.18 239.63-14.73 325.41z"
      />
      <path
        className="a"
        d="M32.51 485.57c6.78 87.91 38.54 154.7-28.52 202.61-4.83 3.46-4.3 4.6-3.38 7.17 12.94 37.28 53.16 85.15 62.47 95.35l134.16-122.54S25.59 395.69 32.51 485.57z"
      />
      <path
        className="a"
        d="M770.7 142.93c-159-174.08-429-186.3-603.06-27.32s-186.31 429-27.32 603.07 429 186.3 603.07 27.31S929.69 317 770.7 142.93zM625.59 275.49c85.76 93.91 79.16 239.57-14.76 325.37s-239.59 79.2-325.37-14.74-79.18-239.59 14.74-325.37 239.59-79.18 325.39 14.74z"
      />
      <path
        className="a"
        d="M363.97 848.48c-86.93-14.7-150.59-52.37-204.38 10.08-3.88 4.51-5 3.87-7.45 2.72-35.95-16.26-80-60.64-89.3-70.83l134.17-122.54S452.86 863.5 363.97 848.48z"
      />
      <path
        className="a"
        d="M142.48 719.19c159 174.08 429 186.3 603.06 27.32s186.31-429 27.32-603.07-429-186.3-603.07-27.31-186.3 428.99-27.31 603.06zm145.11-132.56c-85.76-93.91-79.16-239.57 14.76-325.37s239.59-79.2 325.37 14.74 79.18 239.59-14.74 325.37-239.59 79.18-325.39-14.74z"
      />
      <path
        className="a"
        d="M549.21 13.64c86.93 14.7 150.59 52.42 204.38-10.08 3.88-4.51 5-3.87 7.45-2.72 36 16.26 80 60.64 89.3 70.83L716.17 194.21S460.32-1.38 549.21 13.64z"
      />
      <path
        className="a"
        d="M744.31 745.15c174.07-158.99 186.28-428.99 27.28-603.09s-429-186.27-603-27.28-186.31 429-27.32 603.06 428.96 186.3 603.04 27.31zM319.08 279.58c83.05-75.86 211.88-70 287.74 13s70 211.88-13 287.74-211.87 70-287.73-13-70.06-211.88 12.99-287.74z"
      />
      <path
        className="a"
        d="M880.67 376.55c-6.78-87.91-38.54-154.7 28.52-202.61 4.83-3.46 4.3-4.6 3.38-7.17-12.94-37.28-53.16-85.15-62.47-95.35L715.94 193.96s171.65 272.47 164.73 182.59z"
      />
    </svg>
  );
}

export default withTheme(PractifyLogo);
