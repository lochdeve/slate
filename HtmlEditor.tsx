import React from "react";
import "./HtmlEditoStyles.css";
import { Check } from "@styled-icons/material/Check";
import { FormatColorText } from "@styled-icons/material/FormatColorText";
import { Link } from "@styled-icons/material/Link";
import { FormatAlignCenter } from "@styled-icons/material/FormatAlignCenter";
import { FormatAlignJustify } from "@styled-icons/material/FormatAlignJustify";
import { FormatAlignLeft } from "@styled-icons/material/FormatAlignLeft";
import { FormatAlignRight } from "@styled-icons/material/FormatAlignRight";
import {
  createBasicElementsPlugin,
  AlignToolbarButton,
  createAlignPlugin,
  createListPlugin,
  createLinkPlugin,
  LinkToolbarButton,
  ColorPickerToolbarDropdown,
  createFontBackgroundColorPlugin,
  createFontColorPlugin,
  createFontSizePlugin,
  MARK_COLOR,
  Plate,
  PlateProvider
} from "@udecode/plate";
import { BasicMarkToolbarButtons } from "./basic-marks/BasicMarkToolbarButtons";
import { BasicElementToolbarButtons } from "./basic-elements/BasicElementToolbarButtons";
import { ListToolbarButtons } from "./list/ListToolbarButtons";
import { linkPlugin } from "./link/linkPlugin";
import { basicNodesPlugins } from "./basic-nodes/basicNodesPlugins";
import { editableProps } from "./common/editableProps";
import { plateUI } from "./common/plateUI";
import { Toolbar } from "./toolbar/Toolbar";
import { createMyPlugins, MyValue } from "./typescript/plateTypes";

const plugins = createMyPlugins(
  [
    ...basicNodesPlugins,
    createFontColorPlugin(),
    createFontBackgroundColorPlugin(),
    createFontSizePlugin(),
    createLinkPlugin(linkPlugin),
    createListPlugin(),
    createAlignPlugin(),
    createBasicElementsPlugin()
  ],
  {
    components: plateUI
  }
);

const AlignToolbarButtons = () => (
  <>
    <AlignToolbarButton value="left" icon={<FormatAlignLeft />} />
    <AlignToolbarButton value="center" icon={<FormatAlignCenter />} />
    <AlignToolbarButton value="right" icon={<FormatAlignRight />} />
    <AlignToolbarButton value="justify" icon={<FormatAlignJustify />} />
  </>
);

interface OnChangeHandler {
  (e: any): void;
}

type Props = {
  initialValue: MyValue | any;
  onChange: OnChangeHandler;
};

const HtmlEditor: React.FC<Props> = ({ initialValue, onChange }) => {
  return (
    <>
      <PlateProvider<MyValue>
        initialValue={initialValue}
        plugins={plugins}
        onChange={onChange}
      >
        {/* <Toolbar>
          <BasicMarkToolbarButtons />
          <ColorPickerToolbarDropdown
            pluginKey={MARK_COLOR}
            icon={<FormatColorText />}
            selectedIcon={<Check />}
          />
          <LinkToolbarButton icon={<Link />} />
          <ListToolbarButtons />
          <AlignToolbarButtons />
          <BasicElementToolbarButtons />
        </Toolbar> */}

        <Plate<MyValue> editableProps={editableProps} />
      </PlateProvider>
    </>
  );
};

export default HtmlEditor;
