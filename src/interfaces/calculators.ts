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
    calculations: DefaultCalculatorCalculation[];
    checks?: DefaultCalculatorCheck[];
    text?: Array<(vals: Record<string, number>) => string>;
  };
}

export interface PercentCalculatorPage extends DefaultPage {
  // This uses the percent calculator
  type: "percent_calculator";
  // The calculator object
  calculator: {
    text: string;
    calculations: PercentCalculatorCalculation[];
  };
}

export interface DefaultCalculatorInput {
  name: string;
  label?: string;
}

export interface DefaultCalculatorCheck {
  message: string;
  check(vals: Record<string, number>): boolean;
}

export interface DefaultCalculatorCalculation {
  name: string;
  calc(vals: Record<string, number>): {
    answer?: number | string;
    calculation?: string;
    equation?: string;
  };
}

export interface PercentCalculatorCalculation
  extends DefaultCalculatorCalculation {
  calc(vals: Record<string, number>): {
    answer?: number | string;
    calculation?: string;
  };
}
