import { ModalForm } from "@ant-design/pro-components";
import { Button, ConfigProvider, Form } from "antd";
import "./App.css";
import esESIntl from "antd/lib/locale/es_ES";
import HtmlEditor from "./components/htmlEditor";
import {
  createFontColorPlugin,
  createFontBackgroundColorPlugin,
  createFontSizePlugin,
  createLinkPlugin,
  createListPlugin,
  createAlignPlugin,
  createBasicElementsPlugin,
  PlateProvider,
} from "@udecode/plate";
import { basicNodesPlugins } from "./components/htmlEditor/basic-nodes/basicNodesPlugins";
import { plateUI } from "./components/htmlEditor/common/plateUI";
import { linkPlugin } from "./components/htmlEditor/link/linkPlugin";
import {
  createMyPlugins,
  MyValue,
} from "./components/htmlEditor/typescript/plateTypes";

const { Item } = Form;

function App() {
  const initialValue = [
    {
      type: "p",
      children: [
        {
          text: "Esto es una prueba con varios puntos:",
        },
      ],
    },
    {
      type: "ul",
      children: [
        {
          type: "li",
          children: [
            {
              type: "lic",
              children: [
                {
                  text: "Punto1",
                },
              ],
            },
          ],
        },
        {
          type: "li",
          children: [
            {
              type: "lic",
              children: [
                {
                  text: "Punto2",
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  const [form] = Form.useForm();

  return (
    <ConfigProvider locale={esESIntl}>
      <ModalForm
        form={form}
        trigger={<Button>boton</Button>}
        initialValues={{
          description: initialValue,
        }}
      >
        <Item label="Descripcion" name="description">
          <HtmlEditor
            value={form.getFieldValue("description")}
            onChange={(value: any) => {
              form.setFieldValue("description", value);
            }}
            disabled={true}
          />
        </Item>
      </ModalForm>
    </ConfigProvider>
  );
}

export default App;
