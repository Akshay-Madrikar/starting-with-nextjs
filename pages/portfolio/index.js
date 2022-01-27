import Link from 'next/link';

export default function PortfolioPage() {
  const clients = [
    { id: 1, name: 'Akshay' },
    { id: 2, name: 'Akash' },
  ];

  return (
    <div>
      <h1>Portfolio Page</h1>
      {clients.map((client) => (
        <li key={client.id}>
          <Link href={`/portfolio/${client.id}`}>{client.name}</Link>
        </li>
      ))}
    </div>
  );
}
