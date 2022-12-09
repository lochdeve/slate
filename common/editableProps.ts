import { TEditableProps } from "@udecode/plate";
import { MyValue } from "../typescript/plateTypes";

export const editableProps: TEditableProps<MyValue> = {
  spellCheck: false,
  autoFocus: false,
  readOnly: false,
  placeholder: "Type…",
  style: {
    border: "solid #ccc",
    borderWidth: "1px",
    borderRadius: "0px 0px 2px 2px",
    padding: "4px 12px 7px 12px",
    borderColor: "#d9d9d9",
    lineHeight: "20px"
  }
};
