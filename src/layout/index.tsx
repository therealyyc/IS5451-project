import {
  Outlet,
} from "react-router-dom";
import styled from "styled-components";
import { Row } from "../components/lib";
import logo from "../assets/images/logo.png";
import SideBar from "./sidebar";


function Layout() {
  return (
    <Container>
      <Header className="container-header">
        <Logo src={logo}></Logo>
        <div>PLANTS</div>
        <div>REPORT</div>
      </Header>
      <ContentContainer className="container-body">
          {/* <SideBar/> */}
        <div className="container-content-wrapper">
          <Outlet/>
        </div>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-color: rgba(74,90,103,1);
  display: flex;
  flex-wrap: wrap;
;
`

const Header = styled(Row)`
  height: 77px;
  border-bottom: 1px solid #F1F4F4;
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  /* padding: 12px 8px; */
  flex: 1 0 100%;

  .contact-us {
    background: #0c185f;
    color: #EDC1B6;
  }
`

const Logo = styled.img`
  width: 130px;
  height: auto;
`;

const ContentContainer = styled.div`
  height: calc(100% - 77px);
  width: 100%;
  display: flex;

  .container-content-wrapper {
    background: #fff;
    flex: 1;
    overflow: overlay;
  }
`

export default Layout

