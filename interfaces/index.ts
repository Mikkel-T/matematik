import { ReactNode } from 'react';

export type LayoutProps = {
  children: ReactNode;
};

export type InputProps = {
  name: string;
  placeholder?: string;
  label?: string | ReactNode;
  value: string;
  onChange(e: string): void;
};

export type CalculatorProps = {
  inputs?: InputProps[];
  calculate(): void;
  answers: AnswerProps[];
  children?: ReactNode;
};

export type AnswerProps = {
  name: string | ReactNode;
  answer?: string | ReactNode;
  calculation?: string | ReactNode;
};

export type FractionProps = {
  t: string | number | ReactNode;
  n: string | number | ReactNode;
};

export type Pages = {
  name: string;
  path: string;
};

export type LinkProps = {
  href: string;
  text: string | ReactNode;
};

export type ListProps = {
  list: Pages[];
  title: string;
};
