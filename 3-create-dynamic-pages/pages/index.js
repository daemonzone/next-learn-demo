import Layout from '../components/MyLayout';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
	  <a>{props.title}</a>
    </Link>
  </li>
);
export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Hello Next.js" date="today" />
        <PostLink title="Learn Next.js is awesome"  date="yesterday" />
        <PostLink title="Deploy apps with Zeit"  date="tomorrow" />
      </ul>
    </Layout>
  );
}