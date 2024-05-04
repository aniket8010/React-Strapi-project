import React, { useRef, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { createTodo } from '../Services';
const { TextArea } = Input

const SubmitForm = () => {
    const [loading, setLoading]=useState(false)
    const formRef = useRef(null)
    const onFinish = async (values) => {
        setLoading(true) 
      const data=  await createTodo({ data: values })
        setLoading(false)
        console.log(data)
    };
    return <Form
        ref={formRef}
        name="basic"
        layout='vertical'
        onFinish={onFinish}
        autoComplete="off"
    >
        <Form.Item
            label="Title"
            name="title"
            rules={[
                {
                    required: true,
                    message: 'Please input your Title!',
                },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Author"
            name="author"
            rules={[
                {
                    required: true,
                    message: 'Please input your Author Name!',
                },
            ]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            label="Description"
            name="description"
            rules={[
                {
                    required: true,
                    message: 'Please input your Description!',
                },
            ]}
        >
            <TextArea />
        </Form.Item>
        <Form.Item
        >
            <Button type="primary" htmlType="submit">
                {loading ? "Loading..." : "Submit"}
            </Button>
        </Form.Item>
    </Form>
}
export default SubmitForm;