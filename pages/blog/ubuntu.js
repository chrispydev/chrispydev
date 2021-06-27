import { server } from '../../config';
import Image from 'next/image';
import styled from 'styled-components';

import H from '../../components/Heading';
import { useState } from 'react';
import { useEffect } from 'react';

export default function ubuntu() {
  const [ubuntuBlog, setUbuntuBlog] = useState();

  useEffect(async () => {
    const res = await fetch(`${server}/api/blog/ubuntu`, {
      method: 'GET',
      headers: {
        // update with your user-agent
        'User-Agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36',
        Accept: 'application/json; charset=UTF-8',
      },
    });
    const ubuntuBlog = await res.json();
    setUbuntuBlog(ubuntuBlog);
  }, []);
  return (
    <>
      <Wrapper>
        {ubuntuBlog?.map(({ pic, title }, index) => (
          <UbuntuWrapper key={index}>
            <div>
              <Image
                width="600"
                height="340"
                src={`/images/${pic}`}
                alt={title}
                quality={100}
                objectFit="fill"
              />
            </div>
            <H as="h5" underline>
              {title}
            </H>
          </UbuntuWrapper>
        ))}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  width: 80%;
  margin: auto;
`;

const UbuntuWrapper = styled.div`
  margin: 2rem auto;
  width: 80%;
  text-align: center;

  & h5 {
    text-align: left;
    margin-top: 3rem;
  }
`;

// export async function getStaticProps() {
//   const res = await fetch(`${server}/api/blog/ubuntu`, {
//     method: 'GET',
//     headers: {
//       // update with your user-agent
//       'User-Agent':
//         'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36',
//       Accept: 'application/json; charset=UTF-8',
//     },
//   });
//   const ubuntuBlog = await res.json();

//   return {
//     props: { ubuntuBlog },
//   };
// }
