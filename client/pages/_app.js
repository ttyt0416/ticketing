import 'bootstrap/dist/css/bootstrap.css';
//global css like bootstrap can be imported only on this _app.js(ts) file

export default ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}