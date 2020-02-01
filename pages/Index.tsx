import axios from 'axios';

import Layout from "../components/layout/Layout";
import ProviderList from "../components/Provider/ProviderList";

const Home = (props) => {
    return (
        <Layout title={"Startseite"}>
            <div className="row">
                <div className="col">
                    <ProviderList providers={props.providers}/>
                </div>
            </div>
        </Layout>
    );
};

Home.getInitialProps = async function (context) {

    const protocol = context.req.headers.referer.split('://')[0];
    const fetch = await axios.get(`${protocol}://${context.req.headers.host}/api/getProviders`);
    const providers = await fetch.data;

    return {providers: [...providers]};
};

export default Home;
