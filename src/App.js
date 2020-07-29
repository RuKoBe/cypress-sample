import { Col, Input, List, Row } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
const { Search } = Input;

export default function App() {
  const [items, setItem] = useState([]);
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1>Simple Shopping List App</h1>
      <Row>
        <Col span={12} push={6}>
          <Search
            id="search"
            placeholder="Enter the name of an item you wanna buy"
            enterButton="+"
            onSearch={(item) => {
              setItem([...items, item]);
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col span={12} push={6}>
          <List
            bordered
            dataSource={items}
            renderItem={(item) => (
              <List.Item
                onClick={(event) => {
                  setItem(removeA([...items], event.target.innerText));
                }}
              >
                {item}
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </div>
  );
}

function removeA(array, keyword) {
  console.log(array);
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] + "/" + keyword);
    if (array[i] !== keyword) newArray.push(array[i]);
  }
  console.log(newArray);
  return newArray;
}
