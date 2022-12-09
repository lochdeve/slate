import React from "react";
import { FormatQuote } from "@styled-icons/material/FormatQuote";
import { Looks3 } from "@styled-icons/material/Looks3";
import { LooksOne } from "@styled-icons/material/LooksOne";
import { LooksTwo } from "@styled-icons/material/LooksTwo";
import {
  BlockToolbarButton,
  ELEMENT_BLOCKQUOTE,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  getPluginType,
  useEventPlateId
} from "@udecode/plate";
import { useMyPlateEditorRef } from "../typescript/plateTypes";

export const BasicElementToolbarButtons = () => {
  const editor = useMyPlateEditorRef(useEventPlateId());

  return (
    <>
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_H2)}
        icon={<LooksOne />}
      />
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_H3)}
        icon={<LooksTwo />}
      />
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_H4)}
        icon={<Looks3 />}
      />
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_BLOCKQUOTE)}
        icon={<FormatQuote />}
      />
    </>
  );
};
