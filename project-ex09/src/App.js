import React, { Fragment, Component } from 'react';

class App extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            keyword: '',
            contents: '',
            birthYear: '',
        }
    }
    onInputChanged(event) {
        console.log(event.target.value);
        this.setState({
            keyword: event.target.value,
            contents: event.target.value
        });
    }

    onSelectChanged(event) {
        this.setState({
            birthYear: event.target.value
        });
    }

    render() {
        return (
            <div>
                <div>
                    검색: <input type='text' value={this.state.keyword} onChange={this.onInputChanged.bind(this)} />
                </div>
                <div>
                    내용:<textarea value={this.state.contents} onChange={this.onInputChanged.bind(this)} />
                </div>
                <div>
                    생년:
                <select value={this.state.birthYear} onChange={this.onSelectChanged.bind(this)}>
                        <option value='1984'>1984년</option>
                        <option value='1984'>1985년</option>
                        <option value='1984'>1986년</option>
                    </select>
                </div>
            </div>
        );
    }
}

export { App };