/**
 * CircleButton component for rendering a circular button.
 *
 * @description The CircleButton component displays a circular button that can contain child elements, supports additional CSS classes, and handles click events.
 * @props {ReactNode} children - The content to be displayed inside the button (e.g., text, icons).
 * @props {string} [otherClasses] - Optional additional CSS classes to apply to the button for custom styling.
 * @props {function} [onClick] - Optional callback function that is called when the button is clicked.
 */

'use client';

import { MouseEvent, ReactNode } from 'react';

export interface CircleButtonProps {
  children: ReactNode;
  otherClasses?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function CircleButton({
  children,
  otherClasses,
  onClick,
}: CircleButtonProps) {
  return (
    <button
      className={`min-h-[45px] min-w-[45px] rounded-full outline-none grid place-content-center transition-all ${otherClasses}`}
      type="submit"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default CircleButton;
