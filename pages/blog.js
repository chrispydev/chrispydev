// import { useState, useEffect } from 'react';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';
import { server } from '../config';

function blog() {
  const [blog, setBlog] = useState();

  useEffect(async () => {
    const res = await fetch(`${server}/api/blog`, {
      method: 'GET',
      headers: {
        // update with your user-agent
        'User-Agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36',
        Accept: 'application/json; charset=UTF-8',
      },
    });
    const blog = await res.json();
    setBlog(blog);
  }, []);
  return (
    <>
      {blog?.map(({ pic, title, detail, link }, index) => (
        <BlogWrap key={index}>
          <>
            <BlogCard pic={pic} title={title} detail={detail} link={link} />
          </>
        </BlogWrap>
      ))}
      <Footer />
    </>
  );
}

const BlogWrap = styled.section`
  width: 80%;
  margin: auto;
  font-size: 1.1rem;

  @media (max-width: 425px) {
    max-width: 100%;
  }
`;

export default blog;

// export async function getStaticProps() {
//   const res = await fetch(`${server}/api/blog`, {
//     method: 'GET',
//     headers: {
//       // update with your user-agent
//       'User-Agent':
//         'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36',
//       Accept: 'application/json; charset=UTF-8',
//     },
//   });
//   const blog = await res.json();

//   return {
//     props: { blog },
//   };
// }
