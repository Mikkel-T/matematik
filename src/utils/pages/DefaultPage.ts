export default abstract class DefaultPage {
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

  constructor({
    title,
    pageTitle,
    SEOtitle,
    description,
    hideCard,
  }: DefaultPage) {
    this.title = title;
    this.pageTitle = pageTitle;
    this.SEOtitle = SEOtitle;
    this.description = description;
    this.hideCard = hideCard;
  }
}
