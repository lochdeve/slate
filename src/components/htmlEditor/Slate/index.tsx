import {
  useEditorState,
  serializeHtml,
  deserializeHtml,
  TElement,
  TText,
} from "@udecode/plate";
import React, { useEffect } from "react";

interface SlateProps {
  onChange?: (html: string) => void;
  setInitialValue: (value: (TElement | TText)[]) => void;
}
const Slate: React.FC<SlateProps> = ({ onChange, setInitialValue }) => {
  const editor = useEditorState();
  const initialValue = deserializeHtml(editor!, {
    element:
      '<div class="slate-p">Esto es una prueba con varios puntos:</div><ul class="slate-ul"><li class="slate-li"><div style="position:relative">Punto1</div></li><li class="slate-li"><div style="position:relative">Punto2</div></li></ul>',
  });

  const html = serializeHtml(editor, {
    nodes: editor.children,
  });

  // useEffect(() => {
  //   onChange(html);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [html]);

  useEffect(() => {
    setInitialValue(initialValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValue]);

  return null;
};

export default Slate;
