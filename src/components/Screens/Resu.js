import React from 'react';
import { connect } from "react-redux";
import { Row, Col, Button } from 'antd';
import { Table, Tag, Space } from 'antd';

class Resu extends React.Component {
    state = {}
    render() {
        const columns = [
            {
                title: 'Color Hexa',
                dataIndex: 'colorhex',
                key: 'colorhex',
                render: text => <div style={{ fontSize: "30px" }}>{text}</div>,
            },
            {
                title: 'Background',
                key: 'bgcolor',
                dataIndex: 'bgcolor',
                render: color => <div style={{ backgroundColor: color, padding: "25px 50px" }} ></div>,
            },
            {
                title: 'Porcentagem',
                key: 'porc',
                dataIndex: 'porc',
                render: text => <div style={{ fontSize: "30px" }}>{text}</div>,
            }

        ];

        const data = this.props.cores.map((e,i) => ({
          key: `${i}`,
          colorhex: e.hexadecimal,
          bgcolor: e.hexadecimal,
          porc:`${e.porcentagem} %`

        }));

      
        const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;
        return (<div>
            <Row justify="space-around" align="middle">
                <Col><DemoBox><h1>Resultado</h1></DemoBox></Col>
            </Row>
            <Table columns={columns} dataSource={data} />
        </div>);
    }
}

const mapStateToProps = state => ({
    cores: state.image
});
const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Resu);