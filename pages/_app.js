import '../styles/global.css';

export default function App({ Component, pageProps }) 
{
    // ...pageProps automatically forwards ALL property values to their matching keys
    return <Component {...pageProps} />;
}