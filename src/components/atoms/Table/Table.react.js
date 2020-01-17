import React from 'react';
import './Table.css';
class Table extends React.Component {
    constructor(props) {
        super(props);
    }
render() {
        let { data } = this.props;
        let { head, body, style } = data;
        style = 'table ' + style;
        return (
            <div className='table_wrapper'>
                <table className={style}>
                    <tr>
                        {head.map(item=><th>{item}</th>)}
                    </tr>                    
                    {body.map(item => <tr>{item.map(_i => <td>{_i}</td>)}</tr>)}
                </table>
            </div>
        );
    }
}
export default Table;