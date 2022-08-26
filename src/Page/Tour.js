import React, { Fragment } from "react";

import css from '../component/styles.module.css';
import { message, Form, Input, InputNumber, Button, Row, Col } from 'antd'
import 'antd/dist/antd.css';

const Tour = () => {

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  /* eslint-disable no-template-curly-in-string */

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /* eslint-enable no-template-curly-in-string */



  const key = 'updatable';
  const openMessage = () => {
    message.loading({ content: 'Loading...', key });
    setTimeout(() => {
      message.success({ content: 'Đặt Tour thành công !', key, duration: 2 });
    }, 1000);
  };



  return (
    <Fragment>
          <div className={css.content_video}>
            <Row style={{ marginBottom: '100px', display: 'flex', justifyContent: 'center', marginTop: '-50px' }}>
              <Col span={16} >
                <Input placeholder="Tìm Kiếm Tour" size='large' />
              </Col>
            </Row>
            <Form {...layout} name="nest-messages" onFinish={openMessage} validateMessages={validateMessages} style={{ marginRight: '260px' }} >
              <Form.Item
                name={['user', 'name']}
                label="Tour"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={['user', 'email']}
                label="Email"
                rules={[
                  {
                    type: 'email',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={['user', 'age']}
                label="Number People"
                rules={[
                  {
                    type: 'number',
                    min: 0,
                    max: 99,
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item name={['user', 'website']} label="Website">
                <Input />
              </Form.Item>
              <Form.Item name={['user', 'introduction']} label="Introduction">
                <Input.TextArea />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
    </Fragment>
  )
}

export default Tour
