import React, { Component, createContext } from "react";
import PropTypes from "prop-types";
import { Form, Row, Col, Radio, Button, Checkbox } from "antd";
import { TextArea } from "../../atoms/text-area";
import { Input } from "../../atoms/input";
import { InputSuffix } from "../../atoms/input-suffix";
import { InputNumber } from "../../atoms/input-number";
import { MultipleSelect } from "../../atoms/multiple-select";
import { SingleSelect } from "../../atoms/single-select";
import { Email } from "../../molecules/email";
import { RadioGroup } from "../../atoms/radio-button";
import { SearchList } from "../../molecules/search-list";
import PhoneNumber from "../../molecules/phone-number";
import { Select } from "../../atoms/select/index";
import { TimePicker } from "../../atoms/time-picker/index";
import { DatePicker } from "../../atoms/date-picker/index";
import AutoComplete from '../../atoms/autocomplete';
import StoppageDuration from "../../atoms/stoppage-duration/index";
import SearchSelect from "../../atoms/search-select";
import { SingleSelectSearch } from "../../atoms/single-search-dropdown";

import './form.scss';
import GoogleSearchBar from '../../atoms/Google maps/components/form';
import { Cascader } from "../../atoms/cascader";

const FormContext = createContext({});

const GenFormField = (item, index, form) => {
  const { getFieldDecorator } = form;
  switch (item.type) {
    case "autocomplete":
      return (
        <Col
          offset={item.offset}
          key={index}
          span={item.span}
          style={{ display: "inline-block" }}
        >
          <AutoComplete values={item} form={form} />
        </Col>
      );
    case "input":
      return (
        <Col
          offset={item.offset}
          key={index}
          span={item.span}
          style={{ display: "inline-block" }}
        >
          <Input values={item} form={form} />
        </Col>
      );
    case "text-area":
      return (
        <Col
          offset={item.offset}
          key={index}
          span={item.span}
          style={{ display: "inline-block" }}
        >
          <TextArea values={item} form={form} />
        </Col>
      );
    case "input-suffix":
      return (
        <Col
          offset={item.offset}
          key={index}
          span={item.span}
          style={{ display: "inline-block" }}
        >
          <InputSuffix values={item} form={form} />
        </Col>
      );
    case "cascader":
      return (
        <Col
          offset={item.offset}
          key={index}
          span={item.span}
          style={{ display: "inline-block" }}
        >
          <Cascader values={item} form={form} />
        </Col>
      );
    case "multi-select":
      return (
        <Col
          offset={item.offset}
          key={index}
          span={item.span}
          style={{ display: "inline-block" }}
        >
          <MultipleSelect values={item} form={form} />
        </Col>
      );
    case "single-select":
      return (
        <Col
          offset={item.offset}
          key={index}
          span={item.span}
          style={{ display: "inline-block" }}
        >
          <SingleSelect values={item} form={form} />
        </Col>
      );
    case "single-select-search":
      return (
        <Col
          offset={item.offset}
          key={index}
          span={item.span}
          style={{ display: "inline-block" }}
        >
          <SingleSelectSearch values={item} form={form} />
        </Col>
      );
    case "email":
      return (
        <Col
          offset={item.offset}
          key={index}
          span={item.span}
          style={{ display: "inline-block" }}
        >
          <Email values={item} form={form} />
        </Col>
      );
    case "radio-group":
      return (
        <Col
          offset={item.offset}
          key={index}
          span={item.span}
          style={{ display: "inline-block" }}
        >
          <RadioGroup values={item} form={form} />
        </Col>
      );
    case "search-list":
      return (
        <Col
          offset={item.offset}
          key={index}
          span={item.span}
          style={{ display: "inline-block" }}
        >
          <SearchList values={item} form={form} />
        </Col>
      );

    case "date-picker":
      return (
        <Col
          key={index}
          offset={item.offset}
          span={item.span}
          style={{ display: "inline-block" }}
        >
          <DatePicker values={item} form={form} />
        </Col>
      );
    case "phone-number":
      return (
        <Col
          offset={item.offset}
          key={index}
          span={item.span}
          style={{ display: "inline-block" }}
        >
          <PhoneNumber values={item} form={form} />
        </Col>
      );
    case "select":
      return (
        <Col
          offset={item.offset}
          key={index}
          span={item.span}
          style={{ display: "inline-block" }}
        >
          <Select>
            <Option values={item} form={form} />
          </Select>
        </Col>
      );
    case "time-picker":
      return (
        <Col
          offset={item.offset}
          key={index}
          span={item.span}
          style={{ display: "inline-block" }}
        >
          <TimePicker values={item} form={form} />
        </Col>
      );
    case "stoppage-duration":
      return (
        <Col
          offset={item.offset}
          key={index}
          span={item.span}
          style={{ display: "inline-block" }}
        >
          <StoppageDuration values={item} form={form} />
        </Col>
      );
    case "button":
      return (
        <Col
          offset={item.offset}
          key={index}
          span={item.span}
          style={{ display: "inline-block" }}
        >
          <Button
            type="primary"
            onClick={item.onClick}
            disabled={item.disable ? item.disable : false}
            className={"Button " + item.class ? item.class : ""}
          >
            {item.label}
          </Button>
        </Col>
      );
    case "input-number":
      return (
        <Col
          offset={item.offset}
          key={index}
          span={item.span}
          style={{ display: "inline-block" }}
        >
          <InputNumber values={item} form={form} />
        </Col>
      );
    case "search":
      return (
        <Col key={index} span={item.span} style={{ display: "inline-block" }}>
          <SearchSelect values={item} form={form} />
        </Col>
      );
    case "checkbox":
      return (
        <Col
          offset={item.offset}
          key={index}
          span={item.span}
          style={{ display: "inline-block", ...item.style }}
        >
          {getFieldDecorator(item.field, {
            initialValue: item.value,
            rules: item.rules
          })(
            <Checkbox
              disabled={item.disable ? item.disable : false}
              onChange={e => item.checked ? item.checked(e, item.field) : item.onChange(e.target.checked, item.field)}
              checked={item.value}
              className={item.class ? item.class : ""}
            >
              {item.label}
            </Checkbox>
          )}
        </Col>
      );
    case 'google-search':
      return (
        <Col
          key={index}
          span={item.span}
          style={{ display: 'inline-block' }} >
          <GoogleSearchBar values={item} form={form} />
        </Col>
      )
    case "radio-group-item":
      return (
        <Col
          offset={item.offset}
          key={index}
          span={item.span}
          style={{ display: "inline-block" }}
        >
          {getFieldDecorator(item.field, {
            initialValue: item.value,
            rules: item.rules
          })(
            <Radio.Group onChange={item.onChange} value={item.value}>
              {item.label}
              {item.options.map(radio => {
                return (
                  <Col
                    style={{
                      margin: 0,
                      padding: 0,
                      height: radio.checkBoxlabel ? 60 : 30
                    }}
                    span={item.span}
                  >
                    <Radio
                      style={{
                        margin: 0,
                        padding: 0,
                        height: 60
                      }}
                      className="radio-group-setting"
                      value={radio.value}
                    >
                      {radio.label}
                      <div>
                        {radio.checkBoxlabel ? (
                          <Checkbox
                            style={{
                              margin: 0,
                              padding: 0,
                              height: 30,
                              marginLeft: 60
                            }}
                            disabled={item.value !== "closed"}
                            checked={item.isChecked}
                            onChange={e => item.checked(e, item.field)}
                            className={item.class ? item.class : ""}
                          >
                            {radio.checkBoxlabel}
                          </Checkbox>
                        ) : null}
                      </div>
                    </Radio>
                  </Col>
                );
              })}
            </Radio.Group>
          )}
        </Col>
      );
    default:
      return "";
  }
};

const chunkArray = (array, chunk_size) => {
  let index = 0;
  const arrayLength = array.length;
  let tempArray = [];
  let chunk = [];
  for (index = 0; index < arrayLength; index += chunk_size) {
    chunk = array.slice(index, index + chunk_size);
    tempArray.push(chunk);
  }
  return tempArray;
};

export const FormField = ({ fields, itemCount }) => {
  const length = itemCount ? itemCount : 2;
  const numberOfRows =
    fields.length % length === 0
      ? fields.length / length
      : parseInt(fields.length / length, 10) + 1;
  const rows = Array.from(Array(numberOfRows), (d, i) => i);
  const chunkedArray = chunkArray(fields, length);
  return rows.map((row, indexForRow) => {
    return (
      <Row gutter={16} key={row}>
        {chunkedArray[indexForRow].map((item, index) => {
          const isShow =
            Object.keys(item).indexOf("isShow") > -1 ? item.isShow : true;
          if (!isShow) {
            return;
          }
          return (
            <React.Fragment key={index}>
              <FormContext.Consumer>
                {props => GenFormField(item, index, props.form)}
              </FormContext.Consumer>
            </React.Fragment>
          );
        })}
      </Row>
    );
  });
};

FormField.propTypes = {
  /** fields is array of fields which contains the form fields with their properties */
  fields: PropTypes.array.isRequired,
  /** itemCount is number which help to divide items in number of column */
  itemCount: PropTypes.number
};

class CustomEntityForm extends Component {
  componentDidMount = () =>
    this.props.setForm && this.props.setForm(this.props.form);

  render = () => (
    <Form>
      <FormContext.Provider value={{ form: this.props.form }}>
        {this.props.children}
      </FormContext.Provider>
    </Form>
  );
}

CustomEntityForm.propTypes = {
  /** function which help to set form state */
  setForm: PropTypes.func
};

export const CustomForm = Form.create({ name: "form" })(CustomEntityForm);
