import React from "react";
import { Card } from "antd";
import Input from "../../atoms/Input/index.js";
import Button from "../../atoms/Button/index.js";
const { Meta } = Card;
const Inputval = {
  type: "input",
  placeholder: "Name",
  label: "Rule Name",
  rules: [
    {
      whitespace: true,
      required: true,
      message: "Rule name is needed"
    }
  ],
  field: "ruleName",
  // tooltipInfo: true,
  infoContent: "TOOLTIP.RULE_NAME",
  toolTipSpan: 2
};
const selectval = {
  type: "single-select",
  options: [],
  labelName: "Branch",
  rules: [
    {
      whitespace: true,
      required: true,
      message: "Type is required"
    }
  ],
  field: "branchtype",
  span: 12
};
const styles = {
  fontFamily: "sans-serif",
  padding: "1rem"
};
class CustomCard extends React.Component {
    onClick = () =>{
        console.log("Cliked");
    }

  render() {
    return (
      <>
        <div style={styles}>
          <Card
            title="With Button"
            extra={<Button onClick={this.onClick}>Test</Button>}
          >
            <Input values={Inputval} />
            <Button values={selectval} />
          </Card>
          <br />
        </div>
      </>
    );
  }
}
export default CustomCard;
