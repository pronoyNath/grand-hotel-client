import {Helmet} from "react-helmet";

const PageTitle = ({title}) => {
    return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        </div>
    );
};

export default PageTitle;