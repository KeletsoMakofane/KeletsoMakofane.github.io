import React from "react";
import { ResponsiveNeoGraph } from '@components';

class NeoGraphContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Makofane K',
                  weight: 2};

    this.handleChangeN = this.handleChangeN.bind(this);
    this.handleChangeW = this.handleChangeW.bind(this);

  }

  handleChangeN(event) {
    this.setState({name: event.target.value});
  }

  handleChangeW(event) {
    this.setState({weight: event.target.value});
  }


  render() {
      const containerId = this.props.containerId
      const neo4jUri = this.props.neo4jUri
      const neo4jUser = this.props.neo4jUser
      const neo4jPassword = this.props.neo4jPassword

    return (
        <div>
            <form >
                <label>
                    Researcher:
                    <input type="text" value={this.state.name} onChange={this.handleChangeN} />
                </label>
                <label>
                    <br/>
                    Minimum Collaborations:
                    <select  name="weight" id = "weight" value = {this.state.weight} onChange={this.handleChangeW}>
                        <option value="1" selected>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                </label>
            </form>

            <div className="App">
                <ResponsiveNeoGraph
                    containerId={containerId}
                    neo4jUri={neo4jUri}
                    neo4jUser={neo4jUser}
                    neo4jPassword={neo4jPassword}
                    searchname={this.state.name}
                    collabweight={this.state.weight}/>
            </div>

        </div>

    );
  }
}

export default NeoGraphContainer;