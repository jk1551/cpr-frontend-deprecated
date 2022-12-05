import Nav from 'components/Navbar/Nav'
import '../styles/globals.css'
import fetch from 'isomorphic-unfetch'
import Router from 'next/router'
import { parseCookies } from 'nookies'
import Footer from '../components/Footer/Footer'
import routes from '../components/Navbar/Routes.json';

function MyApp({ Component, pageProps, loggedIn, navigation }) {

  return (
<>
<Nav navigation={navigation} loggedIn={loggedIn} />
<Component {...pageProps} />
<Footer />
</>
  ) 
}

function redirectUser(ctx, location) {
  if (ctx.req) {
      ctx.res.writeHead(302, { Location: location });
      ctx.res.end();
  } else {
      Router.push(location);
  }
}

MyApp.getInitialProps = async ({Component, ctx}) => {
  let pageProps = {}
  const jwt = parseCookies(ctx).jwt;

  const navigation = routes
  // update these routes to either return only public routes or return authenticated routes as well
  let loggedIn = false;

  if(jwt) {
    loggedIn = true;
  }
  
  if (!jwt) {
    if (!ctx.pathname === "/" || !ctx.pathname === '/marketplace') {
        redirectUser(ctx, "/login");
    }
}

  return { pageProps, loggedIn, navigation }

}

export default MyApp
