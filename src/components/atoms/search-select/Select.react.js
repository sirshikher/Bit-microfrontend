import React from 'react';
import { Form, AutoComplete, Row, Col, Tooltip, Icon, Input } from 'antd';
import './style.scss';

let self;
class SearchSelect extends React.Component {
  constructor(props) {
    super(props);
    self = this;
    this.state = {
      searchText: ''
    };
    this.isItemClicked = false;
  }

  onItemClick(event, item) {
    item.onChange(event, item.field);
    if (item.popUp && item.popUp === true) {

    } else {
      self.isItemClicked = true;
    }
  }

  onAddClick(e, item) {
    e.preventDefault();
    item.onShowPopUp();
  }

  render() {
    const valueUpdater = (e) => {
      if (self.isItemClicked) {
        self.isItemClicked = false;
        e = '';
      } else {
        setTimeout(() => {
          this.props.form.setFieldsValue({ transporter: e });
        }, 0);
      }
    };

    const item = this.props.values;
    const isDisplayAdd = item.isDisplayAdd != undefined ? item.isDisplayAdd : true;
    let toolTipSpan;
    if (item.tooltipInfo) {
      toolTipSpan = item.toolTipSpan ? item.toolTipSpan : 2;
    } else {
      toolTipSpan = 0;
    }

    return (
      <Form.Item label={item.label} >
        <Row>
          <Col span={24 - toolTipSpan}>
        
              <AutoComplete
                placeholder={item.placeholder}
                value={this.state.searchText}
                dataSource={item.dataSource}
                onSelect={(e) => this.onItemClick(e, item)}
                onSearch={(e) => item.handleSearch(e)}
                className={item.tooltipInfo ? 'set-border-radius' : null}
              >
                <Input
                  value={this.state.searchText}
                  suffix={isDisplayAdd && <Icon type="plus-circle"
                    onClick={(e) => self.onAddClick(e, item)}
                    style={{ color: "#1890ff" }} />}
                />
              </AutoComplete>
          
          </Col>
          {item.tooltipInfo &&
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
            </Col>}
        </Row>
      </Form.Item>
    );
  }
}

export default SearchSelect;
