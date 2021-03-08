import React from 'react'
import {Button, Col, Form, Input, Row} from 'antd'
import {Link} from 'react-router-dom'

export const LoginForm: React.FC = () => {
    const onSubmit = () => {

    }

    return (
        <Form onFinish={onSubmit}>
            <Form.Item name="email" rules={[
                {required: true, message: 'Ти забув ввести Email'},
                {type: 'email', message: 'Email не коректний'}
            ]} validateTrigger={'onBlur'}>
                <Input placeholder="Твій Email" type="email"/>
            </Form.Item>
            <Form.Item name="password" rules={[
                {required: true, message: 'Ти забув ввести пароль'},
            ]} validateTrigger={'onBlur'}>
                <Input.Password placeholder="Твій пароль"/>
            </Form.Item>
            <Row>
                <Col span={12}>
                    <Form.Item>
                        <Button
                            htmlType="submit"
                            type="primary"
                            loading={false}
                        >Увійти</Button>
                    </Form.Item>
                </Col>
                <Col span={12} style={{textAlign: 'right'}}>
                    <Link to="/recovery">Не пам'ятаєш пароль?</Link>
                </Col>
            </Row>
            <Link to="/signup">Ще не зареєстрований?</Link>
        </Form>
    )
}
