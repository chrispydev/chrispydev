import styled from 'styled-components';
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';
import { server } from '../config';

function blog({ blog }) {
  return (
    <>
      <BlogWrap>
        {blog?.map(({ pic, title, detail }, index) => (
          <>
            <BlogCard pic={pic} title={title} detail={detail} />
          </>
        ))}
      </BlogWrap>
      <Footer />
    </>
  );
}

const BlogWrap = styled.section`
  width: 80%;
  margin: auto;
  font-size: 1.1rem;
`;

export default blog;

export async function getStaticProps() {
  const res = await fetch(`${server}/api/blog/blog`);
  const blog = await res.json();

  return {
    props: { blog },
  };
}
