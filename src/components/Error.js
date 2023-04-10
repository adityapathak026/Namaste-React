import { useRouteError } from 'react-router-dom';

const Error = () => {

    const err = useRouteError();
    const { status, statusText, data } = err;

    return (
        <div>
            <h1>Oops!!</h1>
            <h2>{`${status} : ${statusText}`}</h2>
            <h3>{data}</h3>
        </div>
    )
};

export default Error;