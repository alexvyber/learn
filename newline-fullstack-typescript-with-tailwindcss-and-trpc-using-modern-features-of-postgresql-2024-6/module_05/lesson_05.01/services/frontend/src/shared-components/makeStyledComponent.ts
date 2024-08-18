import clsx from 'clsx';
import { createElement, forwardRef } from 'react';

type StyledComponentProps<T extends keyof JSX.IntrinsicElements> = {
  className?: string;
} & React.ComponentProps<T>;

function makeStyledComponent<T extends keyof JSX.IntrinsicElements>(
  Element: T,
  ...predefinedClassNames: string[]
): React.ForwardRefExoticComponent<
  React.PropsWithoutRef<StyledComponentProps<T>> &
    React.RefAttributes<React.ElementRef<T>>
> {
  const predefinedClassName = clsx(...predefinedClassNames);
  const StyledComponent = forwardRef<
    React.ElementRef<T>,
    StyledComponentProps<T>
  >(({ className, ...props }, ref) => {
    const combinedClassName = clsx(predefinedClassName, className);
    return createElement(Element, {
      ref,
      className: combinedClassName,
      ...props,
    });
  });

  StyledComponent.displayName = `Styled${Element}`;
  return StyledComponent;
}

export default makeStyledComponent;
