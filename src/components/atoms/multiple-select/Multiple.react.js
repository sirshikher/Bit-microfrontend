import React from "react";
import { Form, Select, Row, Col, Tooltip, Icon, Checkbox } from "antd";
import "./multiSelect.scss";

class CustomMultipleSelect extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.values;
    const { getFieldDecorator } = this.props.form;
    const { Option } = Select;
    const inputSpan = item.tooltipInfo ? 22 : 24;
    const isJSXElement = item.isJSXElement ? item.isJSXElement : false;

    return (
      <Form.Item label={item.label}>
        <Row className={"multi-select"}>
          <Col span={inputSpan}>
            {getFieldDecorator(item.label ? item.label : item.field, {
              initialValue: item.value,
              rules: item.disable ? null : item.rules
            })(
              <Select
                mode="multiple"
                size="default"
                optionLabelProp="label"
                placeholder={
                  item.placeholder ? item.placeholder : "Please select"
                }
                disabled={item.disable}
                className={item.tooltipInfo && "set-border-radius"}
                onChange={e => {
                  !isJSXElement ? item.onChange(e, item.field) : null;
                }}
                onSelect={e => {
                  isJSXElement ? item.onChange(e, event, "select") : null;
                }}
                onDeselect={e => {
                  isJSXElement ? item.onChange(e, event, "deselect") : null;
                }}
                style={{ width: "100%" }}
              >
                {item.options.map((element, index) =>
                  <Option
                    className="disable-tick"
                    key={index}
                    disabled={element.disable}
                    value={element.value}
                    key={`index-${index}`}
                    label={element.label}
                  >
                    {" "}{!isJSXElement
                      ? element.label
                      : <Row type="flex" className="search-results">
                          <Col span={20}>
                            <Checkbox checked={element.is_selected}>
                              {element.label}
                            </Checkbox>
                          </Col>
                          <Col span={2} className="desk-type">
                            {" "}<Icon
                              onClick={e => {
                                item.onChange(element.value, e, "edit");
                              }}
                              type="edit"
                            />{" "}
                          </Col>
                          <Col span={2} className="desk-role">
                            {" "}<Icon
                              onClick={e => {
                                item.onChange(element.value, e, "delete");
                              }}
                              type="delete"
                            />{" "}
                          </Col>
                        </Row>}{" "}
                  </Option>
                )}
              </Select>
            )}
          </Col>
          {item.tooltipInfo &&
            <Col span={2} className="multi-select-field">
              <div className="tooltip">
                <Tooltip placement="topLeft" title={item.infoContent}>
                  <div className="tooltip-icon-view">
                    <Icon type="info-circle" />
                  </div>
                </Tooltip>
              </div>
            </Col>}
        </Row>
      </Form.Item>
    );
  }
}

export { CustomMultipleSelect as MultipleSelect };
