import React from "react"
import axios from "axios"
import { Form, Input, Button, Row, Card, Layout } from "antd"

const tabList = [
  {
    key: "register",
    tab: "Sign Up",
  },
  {
    key: "login",
    tab: "Sign In",
  },
]

class LoginForm extends React.Component {
  constructor(props: any) {
    super(props)
  }

  state = {
    cardTab: tabList[0].key,
  }

  render() {
    return (
      <Layout style={{ backgroundColor: "#d8e5f2" }}>
        <Row align="middle" justify="center" style={{ minHeight: "100vh" }}>
          <Card
            tabList={tabList}
            activeTabKey={this.state.cardTab}
            onTabChange={(key) => {
              this.setState({ cardTab: key })
            }}
          >
            <Form
              style={{ width: "500px" }}
              onFinish={async (values) => {
                const { username, password } = values

                const result = await axios.post(
                  `http://localhost:8080/${this.state.cardTab}`,
                  {
                    username,
                    password,
                  }
                )
                console.log(result.data)
              }}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              {this.state.cardTab === "register" && (
                <Form.Item
                  label="Confirm Password"
                  name="password2"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(rule, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve()
                        }

                        return Promise.reject(
                          "The two passwords that you entered do not match!"
                        )
                      },
                    }),
                  ]}
                >
                  <Input.Password />
                </Form.Item>
              )}
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  {this.state.cardTab === "register" ? "Sign Up" : "Sign In"}
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Row>
      </Layout>
    )
  }
}

export default LoginForm
