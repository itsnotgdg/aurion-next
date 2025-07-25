import '@/styles/globals.css';

// O componente raiz da aplicação Next.js. Importa o CSS global para todas as páginas.
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
