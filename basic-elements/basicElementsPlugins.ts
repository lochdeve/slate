import {
  createBlockquotePlugin,
  createHeadingPlugin,
  createParagraphPlugin
} from "@udecode/plate";
import { plateUI } from "../common/plateUI";
import { createMyPlugins } from "../typescript/plateTypes";

export const basicElementsPlugins = createMyPlugins(
  [createBlockquotePlugin(), createHeadingPlugin(), createParagraphPlugin()],
  {
    components: plateUI
  }
);
