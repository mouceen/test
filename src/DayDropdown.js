import React, { Component } from "react";
import DaysVisualised from "./DaysVisualised.js";

class DayDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: "", //selectValue is for storing selected value for buy day
      selectValue2: "" // selectValue2 is for storing selected value for sell day
    };
    this.dropdownChange = this.dropdownChange.bind(this);
    this.dropdownChange2 = this.dropdownChange2.bind(this);
  }

  dropdownChange(dayNum) {
    this.setState({ selectValue: dayNum.target.value });
  }

  dropdownChange2(dayNum2) {
    this.setState({ selectValue2: dayNum2.target.value });
  }

  render() {
    return (
      <div>
        {console.log(this.state.selectValue)}
        {console.log(this.state.selectValue2)}
        <label>
          Choose a day to buy the stock:
          <select id="daydropdown" onChange={this.dropdownChange}>
            <option value="1">Day 1</option>
            <option value="2">Day 2</option>
            <option value="3">Day 3</option>
            <option value="4">Day 4</option>
            <option value="5">Day 5</option>
            <option value="6">Day 6</option>
            <option value="7">Day 7</option>
            <option value="8">Day 8</option>
            <option value="9">Day 9</option>
            <option value="10">Day 10</option>
            <option value="11">Day 11</option>
            <option value="12">Day 12</option>
            <option value="13">Day 13</option>
            <option value="14">Day 14</option>
          </select>
        </label>

        <br />

        <label>
          Choose a day to sell the stock:
          <select id="daydropdown" onChange={this.dropdownChange2}>
            <option value="1">Day 1</option>
            <option value="2">Day 2</option>
            <option value="3">Day 3</option>
            <option value="4">Day 4</option>
            <option value="5">Day 5</option>
            <option value="6">Day 6</option>
            <option value="7">Day 7</option>
            <option value="8">Day 8</option>
            <option value="9">Day 9</option>
            <option value="10">Day 10</option>
            <option value="11">Day 11</option>
            <option value="12">Day 12</option>
            <option value="13">Day 13</option>
            <option value="14">Day 14</option>
          </select>
        </label>

        <DaysVisualised
          buyDate={this.state.selectValue}
          sellDate={this.state.selectValue2}
        />
      </div>
    );
  }
}
export default DayDropdown;
