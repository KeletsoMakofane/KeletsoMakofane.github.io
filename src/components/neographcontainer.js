import React from "react";
import { ResponsiveNeoGraph } from '@components';
import styled from 'styled-components';

const StyledForm = styled.section`
  text-align: center;
  background-color: #000000;

`;

class NeoGraphContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Makofane K',
                  weight: 1,
                  queryName: 'Makofane K',
                  queryWeight: 1};

    this.handleChangeN = this.handleChangeN.bind(this);
    this.handleChangeW = this.handleChangeW.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChangeN(event) {
    this.setState({name: event.target.value});
  }

  handleChangeW(event) {
    this.setState({weight: event.target.value});
  }

  handleSubmit(event){
      this.setState({queryName: this.state.name,
                           queryWeight: this.state.weight });
      event.preventDefault();
  }


  render() {
      const containerId = this.props.containerId
      const neo4jUri = this.props.neo4jUri
      const neo4jUser = this.props.neo4jUser
      const neo4jPassword = this.props.neo4jPassword

    return (
        <StyledForm>
            <form onSubmit = {this.handleSubmit}>

                    Researcher  &nbsp;
                    <input type="text" value={this.state.name} onChange={this.handleChangeN} />
&emsp;
                    Minimum Strength of Connections  &nbsp;
                    <select  name="weight" id = "weight" value = {this.state.weight} onChange={this.handleChangeW}>
                        <option value="1" selected>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
&emsp;
                <input type="submit"/>
                {/*<input type='text' list='listid'/>*/}
                {/*    <datalist id='listid'>*/}
                {/*        <option  value='value1'/>*/}
                {/*        <option  value='value2'/>*/}
                {/*    </datalist>*/}

            </form>

            <div className="App">
                <ResponsiveNeoGraph
                    containerId={containerId}
                    neo4jUri={neo4jUri}
                    neo4jUser={neo4jUser}
                    neo4jPassword={neo4jPassword}
                    searchname={this.state.queryName}
                    collabweight={this.state.queryWeight}/>
            </div>

        </StyledForm>

    );
  }
}

export default NeoGraphContainer;