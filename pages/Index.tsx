import React, {Component} from "react";
import axios, {AxiosResponse} from 'axios';

import Layout from "../components/layout/Layout";
import ProviderList from "../components/Provider/ProviderList";

class Home extends Component {

    state = {
        providers: []
    };

    componentDidMount(): void {

        const protocol = window.location.protocol;
        const url = protocol + '//' + window.location.hostname + ':' + window.location.port;

        axios.get(url + '/api/getProviders')
            .then((response: AxiosResponse) => {
                this.setState({providers: [...response.data]});
            });
    }


    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        return (
            <Layout title={"Startseite"}>
                <div className="row">
                    <div className="col">
                        <ProviderList providers={this.state.providers}/>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Home;
