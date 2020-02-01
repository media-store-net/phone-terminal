import React from "react";
import axios from 'axios';

import {providerInterface} from "../components/Provider/Provider";
import Layout from "../components/layout/Layout";
import Form from "../components/Form/Form";

const Payment = (props) => {

    const provider: providerInterface = props.provider;

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
                                <span>{provider.name}</span>
                            </p>
                            <Form />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

Payment.getInitialProps = async function (context) {

    const protocol: string = context.req.headers.referer.split('://')[0];
    const url: string = `${protocol}://${context.req.headers.host}/api/provider?id=${context.query.provider}`;

    const fetch = await axios.get(url);
    const data: providerInterface[] = await fetch.data;
    if (data) {
        return {provider: data[0]};
    }
};

export default Payment;
