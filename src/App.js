import { React } from "react";
import "./App.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            monsters: [
                {
                    id: 'f1',
                    name: 'Frankie'
                },
                {
                    id: 'w1',
                    name: 'Wolfie'
                },
                {
                    id: 'v1',
                    name: 'Vampi'
                },
            ]
        };
    }

    render() {
        return (
            <div className="App">
                {
                    this.state.monsters.map( m => <h1 key={m.id}>{m.name}</h1>)
                }
            </div>
        );
    }
}
export default App;