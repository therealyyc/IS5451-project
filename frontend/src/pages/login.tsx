import {
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useAuth } from "../router/auth";
import { generateUserId } from "../utils/id";
import styled from "styled-components";
import { Row } from "../components/lib";
import { Button, Form, Input } from 'antd';
// import logo from "../assets/images/logo.png";
// import loginCoverBg from '../assets/images/login-cover-v2.png';
import loginCover from '../assets/images/login_cover.avif'
import { User } from "../types/common";


type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const from = location.state?.from?.pathname || "/";

  function handleSubmit(values: any) {
    const { username } = values
    const currentUser = { username, uguid: generateUserId(), firstname: 'Test', lastname: 'User', position: 'Team Lead' } as User

    auth.signin(currentUser, () => {
      // navigate(from, { replace: true });
      navigate("/dashboard");
    });
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Container>
      <Header between>
        <Logo></Logo>
        <Button className="contact-us" type="primary"> Contact Us </Button>
      </Header>
      <LeftPanel>
        <StyledImage src={loginCover}/>
      </LeftPanel>
      <RightPanel>
        <LoginFormWrapper>
          <div className="welcome-text">Welcome Back</div>
          <span className="welcome-subtitle">Take Care of Your Plants</span>
          <Form
            className="login-form"
            name="basic"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            style={{ maxWidth: 400 }}
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            requiredMark={false}
          >
            <Form.Item<FieldType>
              label="USERNAME"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input size="large"/>
            </Form.Item>
            <Form.Item<FieldType>
              label="PASSWORD"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password size="large"/>
            </Form.Item>
            <Form.Item wrapperCol={{ span: 24 }}>
              <Button className="login-submit-button" type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          <div className="sign-up-text">No Account yet? <span className="sign-up-link">Sign Up here</span></div>
        </LoginFormWrapper>
      </RightPanel>
    </Container>
  );
}

export default Login

const Container = styled.section`
  width: 100%;
  height: 100vh;
  /* background: #53626D; */
  background-color: #ebebeb;
  display: flex;
  flex-wrap: wrap;
;
`

const Header = styled(Row)`
  height: 77px;
  border-bottom: 1px solid #F1F4F4;
  background-color: #1abc9c;
  box-sizing: border-box;
  width: 100%;
  padding: 22px 40px;
  /* padding: 12px 8px; */
  flex: 1 0 100%;

  .contact-us {
    background: #f1c40f;
    color: #ffffff;
  }
`

const Logo = styled.img`
  width: 130px; // You can set the width as required
  height: auto; // Keeps the aspect ratio of the image
  // Add any other styles you need
`;

const LeftPanel = styled.section`
  flex: 1 0 822px;
  /* 
  background-size: 100% 100%; // or contain, depending on your need
  background-repeat: no-repeat;
  background-position: center; */
`

const BackgroundImg = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
`

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RightPanel = styled.section`
  flex: 1 0 690px;
  display: flex;
  height: calc(100% - 77px);
  justify-content: center;
  align-items: center;
  background: #fff;
`

const LoginFormWrapper = styled.div`
  padding: 40px 60px;

  .welcome-text {
    color: #27ae60;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .welcome-subtitle {
    display: inline-block;
    margin-bottom: 40px;
    color: #1abc9c;
    font-size: 20px;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
  }

  .login-form {
    .ant-form-item-label label{
      color: #1abc9c;
      font-size: 12px;
      font-weight: 500;
      height: 20px;
    }
  }

  .login-submit-button {
    width: 100%;
    border-radius: 4px;
    background: #2ecc71;
    margin: 12px 0;
  }

  .sign-up-text {
    color: #F1F4F4;
    font-size: 12px;
    font-weight: 400;

    .sign-up-link {
      font-size: 12px;
      font-weight: 700;
      text-decoration-line: underline;
      cursor: pointer;
    }
  }
`