export interface providerInterface {
    id: number,
    name: string
}

const Provider = (props: providerInterface) => {
    const id = props.id;
    const name = props.name;

    return (
        <li className="list-group-item">
            <a href={`/payment?provider=${props.id}`}>{name} - {id}</a>
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
