import { SvelteComponent } from "svelte";

export interface DefaultPage {
  // Default title, always the one being shown on the cards
  title: string;
  // If set, this is the title being shown on the page
  pageTitle?: string;
  // If set, this is the title in the html <title> element
  SEOtitle?: string;
  // The page descriptions
  description: string;
  // If true, this hides the card from the list views
  hideCard?: boolean;
}

export interface ListPage extends DefaultPage {
  // The type of this is list
  type: "list";
}

export interface BasicCalculatorPage extends DefaultPage {
  // This uses the basic calculator
  type: "basic_calculator";
  // The calculator object
  calculator: {
    inputs: DefaultCalculatorInput[];
    text?: Array<(vals: Record<string, number>) => string>;
    calculate(vals: Record<string, number>): void;
  };
}

export interface PercentCalculatorPage extends DefaultPage {
  // This uses the percent calculator
  type: "percent_calculator";
  // The calculator object
  calculator: {
    text: string;
    calculate(vals: Record<string, number>): void;
  };
}

export interface ShapeCalculatorPage extends DefaultPage {
  // This uses the shape calculator
  type: "shape_calculator";
  // The calculator object
  calculator: {
    component: typeof SvelteComponent;
    calculate?(vals: Record<string, number>): void;
  };
}

export interface DefaultCalculatorInput {
  name: string;
  label?: string;
  placeholder?: string;
}
