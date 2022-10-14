import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Sort,
  Selection,
  Filter,
  Page,
  Edit,
  Search,
  Toolbar,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";
const Customer = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-gray-600">
      <Header category="page" title="Customer" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Delete", "Search"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Page, Search, Toolbar, Sort, Selection, Edit, Filter]}
        />
      </GridComponent>
    </div>
  );
};

export default Customer;
