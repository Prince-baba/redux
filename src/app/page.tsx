import ClientProvider from './ClientProvider'; // Import the client-side provider
import Counter from '../components/Counter';

export default function Home() {
  return (
    <ClientProvider>
      <h1>Home Page</h1>
      <Counter />
    </ClientProvider>
  );
}
