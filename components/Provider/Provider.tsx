import React from "react";
import Link from "next/link";

export interface providerInterface {
    id: number,
    name: string
}

const Provider = (props: providerInterface) => {
    const id = props.id;
    const name = props.name;

    return (
        <li className="list-group-item">
            <Link href={`/payment?provider=${props.id}`}>
                <a>{name} - {id}</a>
            </Link>
            <style jsx>{`
                & :hover {
                    background: rgba(0,0,0,.1);
                }
                
                a {
                    display: block;
                }
                
                a:hover {
                    text-decoration: none;
                    background: transparent;
                }

            `}</style>
        </li>
    );
};

export default Provider;
