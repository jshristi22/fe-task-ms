import React from "react";
import { useState } from "react";
import data from "../data/dataTable.json";
import "./data_table.css";

export default function DataTable() {
  const [filterValue, setFilterValue] = useState("");
  const [filterColName, setFilterColName] = useState("0");

  return (
    <div className="dataTable">
      <div className="header">
        <h1>Data table of MoneySukh</h1>
        <div className="filterContainer">
          <select
            value={filterColName}
            onChange={(e) => {
              setFilterColName(e.target.value);
            }}
            placeholder="Select column name"
          >
            <option value="0" selected>
              Select Column name
            </option>
            {Object?.keys(data?.[0])?.map((key) => {
              if (key !== "") return <option value={key}>{key}</option>;
            })}
          </select>
          <input
            disabled={filterColName === "0"}
            placeholder="Enter value"
            value={filterValue}
            onChange={(e) => {
              const value = e.target.value.trim().toUpperCase();
              setFilterValue(value);
            }}
          />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            {Object?.keys(data?.[0])?.map((key) => {
              if (key !== "") return <th>{key}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((obj) => {
            if (filterColName !== "0" && filterValue) {
              if (obj[filterColName].toString().includes(filterValue))
                return (
                  <tr>
                    {Object.keys(obj).map((key) => {
                      if (key !== "") return <td>{obj[key]}</td>;
                    })}
                  </tr>
                );
            } else {
              return (
                <tr>
                  {Object.keys(obj).map((key) => {
                    if (key !== "") return <td>{obj[key]}</td>;
                  })}
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}
