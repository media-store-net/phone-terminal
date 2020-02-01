import React from "react";
import Head from "./Head";

const Header = (props) => {

    return (
        <section className="row">
            <div className="col text-center">
                <h1>Phone-Paymaent Terminal</h1>
            </div>
            <style jsx>
                {`
                h1 {
                    margin: 20px;
                }
                `}
            </style>
        </section>
    );
};

export default Header;
