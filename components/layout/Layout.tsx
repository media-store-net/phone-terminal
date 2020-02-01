import "../../styles.scss";
import Head from "../Header/Head";
import Header from "../Header/Header";

const Layout = props => {
    return (
            <section>
                {/*<Head title={props.title} />*/}
                <Header/>
                <div className="container">
                    {props.children}
                </div>

            </section>
    );
};

export default Layout;
