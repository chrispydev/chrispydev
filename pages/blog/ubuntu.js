import { server } from '../../config';

export default function ubuntu() {
  return <div>This is the ubuntu page</div>;
}

export async function getStaticProps() {
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

  return {
    props: { blog },
  };
}
