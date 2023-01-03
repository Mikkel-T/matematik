import DefaultPage from "./DefaultPage";

export default class ListPage extends DefaultPage {
  readonly type = "list";

  constructor(vals: DefaultPage) {
    super(vals);
  }
}
