import React from "react";
import { FormatBold } from "@styled-icons/material/FormatBold";
import { FormatItalic } from "@styled-icons/material/FormatItalic";
import { FormatUnderlined } from "@styled-icons/material/FormatUnderlined";
import {
  getPluginType,
  MARK_BOLD,
  MARK_ITALIC,
  MARK_UNDERLINE,
  MarkToolbarButton
} from "@udecode/plate";
import { useMyPlateEditorRef } from "../typescript/plateTypes";

export const BasicMarkToolbarButtons = () => {
  const editor = useMyPlateEditorRef();

  return (
    <>
      <MarkToolbarButton
        type={getPluginType(editor, MARK_BOLD)}
        icon={<FormatBold />}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_ITALIC)}
        icon={<FormatItalic />}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_UNDERLINE)}
        icon={<FormatUnderlined />}
      />
    </>
  );
};
