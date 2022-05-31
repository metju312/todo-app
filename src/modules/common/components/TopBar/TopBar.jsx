import React from 'react';
import styled from 'styled-components'
import Logomark from "../../../../components/Logomark";
import {TextMdMedium} from "../../typography/typography.config";
import Link from 'next/link';

function TopBar() {
  return (
    <Container>
      <Content>
        <Link href="/">
          <Logo>
            <Logomark prop={`variant1`}/>
            <LogoAppName>
              <TextMdMedium>TODO App</TextMdMedium>
            </LogoAppName>
          </Logo>
        </Link>
        <Navigation>
          <Link href="/todo">
            <NavigationLink>
              <LinkButton>
                <TextMdMedium>Lista zadań</TextMdMedium>
              </LinkButton>
            </NavigationLink>
          </Link>
          <Link href="/todo">
            <NavigationLink>
              <LinkButton>
                <TextMdMedium>Lista zadań</TextMdMedium>
              </LinkButton>
            </NavigationLink>
          </Link>
        </Navigation>
      </Content>
      <ActionButtons>
        <Link href="/login">
          <ActionButton>
            <LinkButton>
              <TextMdMedium>Zaloguj się</TextMdMedium>
            </LinkButton>
          </ActionButton>
        </Link>
        <Link href="/register">
          <ActionButton>
            <CTAButton>
              <TextMdMedium>Zarejestruj się</TextMdMedium>
            </CTAButton>
          </ActionButton>
        </Link>
      </ActionButtons>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 112px 0px 112px;
  min-height: 80px;
  border-bottom: 1px solid ${props => props.theme.color.gray[100]};
`

const Content = styled.div`
  display: flex;
  width: fit-content;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`

const LogoAppName = styled.span`
  margin-left: 10px;
  margin-right: 40px;
  color: ${props => props.theme.color.gray[700]};
  font-size: 16px;
  letter-spacing: 0em;
  font-family: "Inter";
  font-weight: 500;
  line-height: 24px;
`

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const NavigationLink = styled.span`
  margin-right: 16px;
  color: ${props => props.theme.color.gray[100]};
`

const ActionButtons = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const ActionButton = styled.span`
  margin-left: 10px;
`

const LinkButton = styled.span`
  color: ${props => props.theme.color.gray[500]};
  padding: 10px 18px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.color.gray[50]};
    color: ${props => props.theme.color.gray[600]};
  }
`

const CTAButton = styled.span`
  color: ${props => props.theme.color.white};
  background: ${props => props.theme.color.primary[600]};
  border-radius: 6px;
  padding: 10px 18px;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.color.primary[700]};
  }
`

export default TopBar;