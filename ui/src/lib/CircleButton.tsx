'use client';

import { MouseEvent, ReactNode } from 'react';

/* eslint-disable-next-line */
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
