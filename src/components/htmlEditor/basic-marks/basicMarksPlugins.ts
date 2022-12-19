import {
  createBoldPlugin,
  createItalicPlugin,
  createUnderlinePlugin
} from "@udecode/plate";
import { plateUI } from "../common/plateUI";
import { createMyPlugins } from "../typescript/plateTypes";

export const basicMarksPlugins = createMyPlugins(
  [createBoldPlugin(), createItalicPlugin(), createUnderlinePlugin()],
  {
    components: plateUI
  }
);
