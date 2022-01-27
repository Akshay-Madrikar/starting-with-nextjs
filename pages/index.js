import Link from 'next/link';
import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();
  const loadPortfolio = () => {
    router.push({
      pathname: 'portfolio/[id]/[projectId]',
      query: { id: 'Akshay', projectId: 'Android Projects' },
    });
  };
  return (
    <div>
      <h1>Hello Home Page2</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio Page</Link>
        </li>
        <li>
          <Link href="/about">About Page</Link>
        </li>
      </ul>

      <button onClick={loadPortfolio}>Load portfolio</button>
    </div>
  );
}
