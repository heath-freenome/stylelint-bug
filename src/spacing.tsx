import React from 'react';
import is from '@sindresorhus/is';
import clsx from 'clsx';

import StyledDiv, { css } from './spacing.style';

export interface SpacingProps extends React.HTMLAttributes<HTMLDivElement> {
  /** If provided will generate a left margin of the `Number(left)` in `rem`s */
  left?: number | boolean;
  /** If provided will generate a right margin of the `Number(right)` in `rem`s */
  right?: number | boolean;
  /** If provided will generate a top margin of the `Number(top)` in `rem`s */
  top?: number | boolean;
  /** If provided will generate a bottom margin of the `Number(bottom)` in `rem`s */
  bottom?: number | boolean;
  /** Flag, if truthy, will cause the div to be an inline block */
  inlineBlock?: boolean;
  /** Additional classes to add to the div wrapper */
  className?: string;
  /** The children to apply the spacing wrapper to */
  children?: React.ReactNode;
  /** The optional id of the component */
  id?: string;
}

/** The `Spacing` component will wrap the given `children` within a div that has the requested spacing.
 */
const Spacing = React.forwardRef<HTMLDivElement, SpacingProps>(function Spacing(props: SpacingProps, ref) {
  const { left, right, top, bottom, inlineBlock, children, className, id, ...rest } = props;

  const style: { marginLeft?: string; marginRight?: string; marginTop?: string; marginBottom?: string } = {};
  if (is.number(left) || is.truthy(left)) {
    style.marginLeft = `${Number(left)}rem`;
  }
  if (is.number(right) || is.truthy(right)) {
    style.marginRight = `${Number(right)}rem`;
  }
  if (is.number(top) || is.truthy(top)) {
    style.marginTop = `${Number(top)}rem`;
  }
  if (is.number(bottom) || is.truthy(bottom)) {
    style.marginBottom = `${Number(bottom)}rem`;
  }

  return (
    <StyledDiv
      id={id}
      ref={ref}
      className={clsx(className, { [css.SpacingInlineBlock]: inlineBlock })}
      style={style}
      {...rest}
    >
      {children}
    </StyledDiv>
  );
});

Spacing.displayName = 'ForwardRef(Spacing)';

export default Spacing;
