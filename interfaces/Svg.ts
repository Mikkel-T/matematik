import { ChangeEvent, ReactNode } from 'react';

export type SvgProps = {
  children: ReactNode;
  height: string | number;
  width: string | number;
};

export type PathProps = {
  d: string;
  className: string;
};

export type CircleProps = {
  x: string | number;
  y: string | number;
  r: string | number;
  className: string;
};

export type TextProps = {
  x: string | number;
  y: string | number;
  text: string | number;
};

export type InputProps = {
  name: string;
  value: string;
  readOnly: boolean;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  placeholder?: string;
  className?: string;
  min?: number;
};
