import React from "react";
import Provider from "./Provider";

const ProviderList = props => {
    return (
        <section className="text-center card">
            <div className="card-header">
                <h3>Please select a Provider!</h3>
            </div>
            <ul className="list-group">
                {
                    props.providers.map(provider => <Provider key={provider.id} id={provider.id} name={provider.name}/>)
                }
            </ul>
        </section>
    );
};

export default ProviderList;
