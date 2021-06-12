import HtmlHead from './HtmlHead';
import styled from 'styled-components';

import NavigationBar from '../components/NavigationBar';

function Layout({ children }) {
  return (
    <PageWrapper>
      <HtmlHead />
      <NavigationBar />
      <main>{children}</main>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  max-width: 1440px;
  min-width: 320px;
  margin: auto;
`;

export default Layout;
