import React from "react";
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";
import { kanbanData, kanbanGrid } from "../data/dummy";
import { Header } from "../components";

const Kanban = () => {
  return (
    <div className="m-2 p-2 mt-24 md:m-10 md:p-10 bg_white rounded-3xl dark:bg-gray-600">
      <Header category="App" title="Kanban" />
      <KanbanComponent
        id="Kanban"
        dataSource={kanbanData}
        cardSettings={{ contentField: "Summary", headerField: "Id" }}
        keyField="Status"
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Kanban;
