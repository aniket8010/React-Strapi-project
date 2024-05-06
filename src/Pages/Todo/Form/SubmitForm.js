import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { globalContext } from '../../../Provider/Provider';
import { createTodo, updateTodo } from '../Services';
import { UPDATE_TODO_FORM_DATA } from '../../../Provider/Actions';
const { TextArea } = Input


const SubmitForm = () => {
    const [loading, setLoading] = useState(false)
    //using context api
    const { values: ReducerValues, dispatch } = useContext(globalContext)
    const formRef = useRef(null)
    const onFinish = async (values) => {
        setLoading(true)
        // await createTodo({ data: values })
        if (ReducerValues?.initialTodoFormData) {
            await updateTodo(ReducerValues?.initialTodoFormData?.id, { data: values })
        } else {
            await createTodo({ data: values })
        }
        await ReducerValues?.refetchTodoDataApi()
        formRef.current.resetFields()
        setLoading(false)
        dispatch({ type: UPDATE_TODO_FORM_DATA, payload: null })
    };

    useEffect(() => {
        if (ReducerValues?.initialTodoFormData) {
            formRef.current?.setFieldsValue(ReducerValues?.initialTodoFormData)
        }
    }, [ReducerValues?.initialTodoFormData])

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
                {loading ? "Loading..." : ReducerValues?.initialTodoFormData ? "Update" : "Submit"}
            </Button>
        </Form.Item>
    </Form>
}
export default SubmitForm;