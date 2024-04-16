import {
  Avatar,
  Button,
  Card,
  Col,
  Divider,
  Dropdown,
  Form,
  Grid,
  Input,
  Layout,
  Menu,
  Row,
  Space,
  Steps,
  Table,
  Tag,
  TimePicker,
  Typography,
} from "antd";
import "./styles/dashboard.css";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { HiOutlineHome } from "react-icons/hi";
import { GoOrganization } from "react-icons/go";
import { BsPerson } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import { faker } from "@faker-js/faker";
import ButtonGroup from "antd/es/button/button-group";
import dayjs from "dayjs";

const generateData = () => {
  const dat = [];
  for (let i = 0; i < 34; i++) {
    dat.push({
      id: faker.datatype.number(1000),
      name: faker.name.fullName(),
      email: faker.internet.email(),
      status: Math.random() > 0.5 ? true : false,
    });
  }
  return dat;
};

const data = generateData();

function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className="container">
      <Header className="header">
        <div style={{ display: "flex", alignItems: "center" }}>
          <GiHamburgerMenu
            onClick={() => setCollapsed(!collapsed)}
            size={27}
            style={{ marginRight: 20 }}
          />
          <div className="brand">Dashboard</div>
        </div>
      </Header>
      <Layout>
        <Sider collapsed={collapsed} theme="light">
          <Menu
            mode="inline"
            items={[
              {
                label: "Home",
                key: "home",
                icon: <HiOutlineHome />,
                children: [
                  {
                    label: "Add profile",
                    key: "add_profile",
                    icon: <BsPerson />,
                  },
                  { label: "All users", key: "all_users", icon: <BsPerson /> },
                ],
              },
              {
                label: "About us",
                key: "about_us",
                icon: <GoOrganization />,
              },
            ]}
          />
        </Sider>
        <Content className="content">
          <Space direction="horizontal">
            <Card>
              <Space direction="horizontal">
                <AiOutlineMoneyCollect />
                <small>Total sales</small>
              </Space>
              <Typography.Title>$234344</Typography.Title>
            </Card>
            <Card>
              <Space direction="horizontal">
                <AiOutlineMoneyCollect />
                <small>Total sales</small>
              </Space>
              <Typography.Title>$2344</Typography.Title>
            </Card>
            <Card>
              <Space direction="horizontal">
                <AiOutlineMoneyCollect />
                <small>Total sales</small>
              </Space>
              <Typography.Title>$34344</Typography.Title>
            </Card>
          </Space>
          <Divider />
          <Card>
            <Avatar
              size={"large"}
              src="https://w1.pngwing.com/pngs/386/684/png-transparent-face-icon-user-icon-design-user-profile-share-icon-avatar-black-and-white-silhouette.png"
            />
            <Form
              onFinish={(values) => {
                console.log(values);
              }}
              layout="vertical"
            >
              <Form.Item name={"name"} label={"Name"}>
                <Input />
              </Form.Item>
              <Form.Item name={"email"} label={"Email"}>
                <Input type="email" />
              </Form.Item>
              <Form.Item name={"password"} label={"Password"}>
                <Input type="password" />
              </Form.Item>
              <Form.Item name={"time"} label="Time">
                <TimePicker
                  defaultValue={dayjs("12:08:23", "HH:mm:ss")}
                ></TimePicker>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Sign up
                </Button>
              </Form.Item>
            </Form>
          </Card>
          <Card>
            <Steps
              current={1}
              items={[
                { title: "Signup", description: "Please sign up" },
                {
                  title: "Buy subscription",
                  description: "Buy some subscription",
                },
                {
                  title: "Fill the form",
                  description: "Fill the form",
                },
              ]}
            />
          </Card>
          <Row gutter={10}>
            <Col span={6}>
              <Card>
                <Typography.Title>dhsdfs</Typography.Title>
              </Card>
            </Col>
            <Col span={18}>
              <Card>
                <Typography.Title>dhsdfs</Typography.Title>
              </Card>
            </Col>
          </Row>
          <Row gutter={10} style={{ marginTop: 10 }}>
            <Col span={18}>
              <Table
                dataSource={data}
                columns={[
                  { dataIndex: "id", title: "ID", key: "id", fixed: true },
                  {
                    dataIndex: "name",
                    title: "Name",
                    key: "name",
                  },
                  { dataIndex: "email", title: "Email", key: "email" },
                  {
                    dataIndex: "status",
                    title: "Status",
                    render: (val) =>
                      val ? <Tag>Active</Tag> : <Tag>Not Active</Tag>,
                  },
                  {
                    title: "Actions",
                    render: () => (
                      <ButtonGroup>
                        <Button>Edit</Button>
                        <Button type="primary" danger>
                          Delete
                        </Button>
                      </ButtonGroup>
                    ),
                  },
                ]}
              />
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
