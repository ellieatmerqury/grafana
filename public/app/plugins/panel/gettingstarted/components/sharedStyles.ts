import { css } from '@emotion/css';

import { GrafanaTheme2 } from '@grafana/data';

export const cardStyle = (theme: GrafanaTheme2, complete: boolean) => {
  const completeGradient = 'linear-gradient(to right, #5182CC 0%, #245BAF 100%)';
  const darkThemeGradients = complete ? completeGradient : 'linear-gradient(to right, #f05a28 0%, #fbca0a 100%)';
  const lightThemeGradients = complete ? completeGradient : 'linear-gradient(to right, #FBCA0A 0%, #F05A28 100%)';
  const merquryThemeGradients = complete ? completeGradient : 'linear-gradient(to right, #7C6A7A 0%, #C9ADA7 100%)';

  const borderGradient = theme.isDark ? darkThemeGradients : theme.isLight ? lightThemeGradients : merquryThemeGradients;

  return `
      background-color: ${theme.colors.background.secondary};
      margin-right: ${theme.spacing(4)};
      border: 1px solid ${theme.colors.border.weak};
      border-bottom-left-radius: ${theme.shape.borderRadius(2)};
      border-bottom-right-radius: ${theme.shape.borderRadius(2)};
      position: relative;
      max-height: 230px;

      ${theme.breakpoints.down('xxl')} {
        margin-right: ${theme.spacing(2)};
      }
      &::before {
        display: block;
        content: ' ';
        position: absolute;
        left: 0;
        right: 0;
        height: 2px;
        top: 0;
        background-image: ${borderGradient};
      }
`;
};

export const cardContent = css`
  padding: 16px;
`;
