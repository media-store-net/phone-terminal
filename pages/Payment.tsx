import React, {Component} from "react";
import Router from "next/router";
import axios, {AxiosResponse} from 'axios';

import Layout from "../components/layout/Layout";
import Form from "../components/Form/Form";
import {providerInterface} from "../components/Provider/Provider";

class Payment extends Component {

    state = {
        provider: {
            id: null,
            name: ''
        }
    };

    componentDidMount(): void {
        const router = Router;

        const protocol = window.location.protocol;
        const url = protocol + '//' + window.location.hostname + ':' + window.location.port;

        axios.get(`${url}/api/provider?id=${router.query.provider}`)
            .then((response: AxiosResponse) => {
                    response.data.map((prov: providerInterface) => {
                        this.setState({provider: prov})
                    });
                }
            );
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Layout>
                <section className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="card">
                            <div className="card-header text-center">
                                <h3>Please take your Pay</h3>
                            </div>
                            <div className="card-body">
                                <p className="lead">
                                    <strong>Selected Provider: </strong>
                                    <span>{this.state.provider.name}</span>
                                </p>
                                <Form/>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Payment;
