import React from "react";
import { Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import mockData from "../../../apiData/data.js";

const { Option } = Select;

const Applicants = () => {
  const prefix = (
    <SearchOutlined
      style={{
        fontSize: 16,
        color: "#9D9D9D",
      }}
    />
  );

  const onSearch = (value: any) => console.log(value);
  const handleSelectChange = (value: any) => console.log(value);

  return (
    <div className="applicants-component">
      <div className="search-filter-area">
        <Input
          placeholder="input search text"
          size="large"
          prefix={prefix}
          className="applicants-search-field"
          onChange={onSearch}
        />

        <Select
          defaultValue="descending"
          style={{ width: 120, fontSize: "14px" }}
          onChange={handleSelectChange}
          size="large"
          className="select-field"
        >
          <Option value="ascending">Ascending</Option>
          <Option value="descending">Descending</Option>
        </Select>

        <Select
          defaultValue={mockData.statusTypes[0].value}
          style={{ width: 120, fontSize: "14px" }}
          onChange={handleSelectChange}
          size="large"
        >
          {mockData.statusTypes.map((curr) => {
            return <Option value={curr.value}>{curr.title}</Option>;
          })}
        </Select>
      </div>
    </div>
  );
};

export default Applicants;
