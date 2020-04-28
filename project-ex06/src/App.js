import React from 'react';

class App extends React.Component {
    render(){
        const message = 'React';
    return (
        <h1>Hello {message}</h1>
    );
    }
}

export { App};