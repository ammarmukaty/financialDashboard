import React from "react";
import {
  HtmlEditor,
  Link,
  Inject,
  Image,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";
import { EditorData } from "../data/dummy";
import { Header } from "../components";
const Editor = () => {
  return (
    <div className="m-2 p-2 mt-24 md:m-10 md:p-10 bg_white rounded-3xl dark:bg-gray-600">
      <Header category="App" title="Kanban" />
      <RichTextEditorComponent>
        <EditorData />
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
