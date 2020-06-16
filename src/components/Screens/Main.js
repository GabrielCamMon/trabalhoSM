import React from 'react';
import { connect } from "react-redux";
import { Row, Col, Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import UploadImg from './UploadImg';
import { Link } from "react-router-dom";
import { startAddImage } from "../../store/action/image"
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    startupload =  (image) => {
    this.props.startAddImage(image);
    }
    render() {
        const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;
        return (
            <div>
                <Row justify="space-around" align="middle">
                    <Col><DemoBox><h1>CAPTADOR DE CORES</h1></DemoBox></Col>
                </Row>
                <Row justify="space-around" align="middle">
                    <Col span={200}>
                        <DemoBox value={50}><UploadImg startupload={this.startupload} /></DemoBox>
                    </Col>
                </Row>
                <Row justify="space-around" align="middle">
                    <Col>
                        <DemoBox>
                            <Link to="/resultado">
                                <Button style={{ width: '400px' }} type="primary" icon={<SendOutlined />}>
                                    Send
                            </Button>
                            </Link>
                        </DemoBox>
                    </Col>
                </Row>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    startAddImage: image => dispatch(startAddImage(image))
});

export default connect(
    undefined,
    mapDispatchToProps
)(Main);
