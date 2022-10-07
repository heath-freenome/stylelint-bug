import { styled } from '@mui/material/styles';

const PREFIX = 'Spacing';

export const css = {
  SpacingInlineBlock: `${PREFIX}-InlineBlock`,
};

const StyledDiv = styled('div')({
  [`&.${css.SpacingInlineBlock}`]: {
    display: 'inline-block',
    color: "black", // Comment this out to see stylelint work with no errors
  },
});

export default StyledDiv;
