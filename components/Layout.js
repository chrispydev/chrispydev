import GlobalStyle from '../styles/global';
import HtmlHead from './HtmlHead';
import styled from 'styled-components';

function Layout({ children }) {
  return (
    <PageWrapper>
      <GlobalStyle />
      <HtmlHead />
      <main>{children}</main>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  max-width: 1440px;
  min-width: 375px;
  margin: auto;
`;

export default Layout;
