import React from 'react'
import {Button, Col, Form, Input, Row} from 'antd'

export const SignupForm: React.FC = () => {
    return (
        <Form>
            <Row gutter={{md: 12}}>
                <Col span={12}>
                    <Form.Item name="name" rules={[
                        {required: true, message: 'То як тебе, все ж таки, звати? :)'}
                    ]}>
                        <Input placeholder="Як тебе звати?" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name="email" rules={[
                        {required: true, message: 'Ти забув увести Email'},
                        {type: 'email', message: 'Email не коректний'}
                    ]}>
                        <Input placeholder="Твій Email" type="email"/>
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item name="password" rules={[
                {required: true, message: 'Ти ж не хочеш, щоб твій акаунт вкрали? ;)'},
                {min: 8, message: 'Пароль повинен містити щонайменше 8 символів'}
            ]}>
                <Input.Password placeholder="Придумай пароль не менше 8 символів"/>
            </Form.Item>
            <Form.Item name="confirm" rules={[
                {required: true, message: 'Повтори свій пароль'},
                ({ getFieldValue }) => ({
                    validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve()
                        }

                        return Promise.reject(new Error('Паролі не співпадають'))
                    },
                }),
            ]}>
                <Input.Password placeholder="Повтори свій пароль"/>
            </Form.Item>
            <Form.Item style={{marginBottom: 0}}>
                <Button htmlType="submit" type="primary">Зареєструватися</Button>
            </Form.Item>
        </Form>
    )
}
