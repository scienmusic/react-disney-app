import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginPage = () => {
  const auth = getAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/");
      } else if (user && pathname === "/") {
        navigate("/main");
      }
    });
  }, [auth, navigate, pathname]);

  return (
    <Container>
      <Content>
        <Center>
          <LogoOne src="/images/cta-logo-one.svg" alt="" />
          <SignUpLink>지금 가입</SignUpLink>
          <Description>
            영화에 대한 프리미어 액세스를 얻으십시오. 디즈 플러스 가격은 다음
            주부터 1,000원 인상됩니다.
          </Description>
          <LogoTwo src="/images/cta-logo-two.png" alt="" />
        </Center>
        <BgImage />
      </Content>
    </Container>
  );
};

export default LoginPage;

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: realative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;
const Center = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;
const LogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;
const LogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;
const SignUpLink = styled.a``;
