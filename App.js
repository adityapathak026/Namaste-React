import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './src/components/Body';
import Header from './src/components/Header';

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
        </>
    )
}

const heading = React.createElement("h1", { id: 'heading' }, "Hello from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)      