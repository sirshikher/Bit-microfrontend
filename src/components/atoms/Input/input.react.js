import React from 'react';
import { Form, Input, Row, Col, Tooltip, Icon } from 'antd';
import './input.scss';

class CustomInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.values;
    const toolTipSpan = item.toolTipSpan ? item.toolTipSpan : 0;

    return (
      <Form.Item label={item.label} >
        <Row>
          <Col span={24 - toolTipSpan}>
           
              <Input
                placeholder={item.placeholder}
                onChange={(e) => item.onChange(e, item.field)}
                disabled={item.disable}
                className={item.tooltipInfo || item.toolTipSpan ? 'set-border-radius' : null}
                autoComplete="off"
              />
        
          </Col>
          {item.tooltipInfo ?
            <Col span={toolTipSpan} className="input-field">
              <div className="tooltip">
                <Tooltip
                  placement="topLeft"
                  title={item.infoContent}
                >
                  <div className="tooltip-icon-view">
                    <Icon
                      type="info-circle"
                    />
                  </div>
                </Tooltip>
              </div>
            </Col> : null}
        </Row>
      </Form.Item>
    );
  }
}

export default CustomInput;