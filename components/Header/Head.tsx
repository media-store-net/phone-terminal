import React from "react";
import head from "next/head";

const Head = (props) => {
    const initTitle = "Phone-Terminal";

    return (
        <head>
            <title>{`${initTitle} - ${props.title}`}</title>
        </head>
    );
};

export default Head;
