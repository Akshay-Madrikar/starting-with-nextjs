import { useRouter } from 'next/router';

export default function PortfolioNameIdPage() {
  const route = useRouter();

  console.log(route.query);
  return (
    <div>
      <h1>PortfolioNameId Page</h1>
    </div>
  );
}
