import Head from 'next/head';
import Navbar from './Navbar';
import { ThemeProvider } from "@material-ui/styles";  //material-ui customization
import theme from "../src/Theme";

const Layout = (props) => (
    <ThemeProvider theme={theme}>
    <div>
        <Head>
            <title>BitzBall</title>
        </Head>

        <Navbar/>

        {/*because we will use this as a wrapper*/}
        <div>
            {props.children}
        </div>

        <style global jsx>{`
              body {
                margin: 0;
                font-family: Poppins, sans-serif;
              }
            `}
        </style>
    </div>
    </ThemeProvider>
);

export default Layout;
