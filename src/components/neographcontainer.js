import React from "react";
import { ResponsiveNeoGraph } from '@components';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { GlobalStyleNetworkVis, theme } from '@styles';

const StyledForm = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  text-align: center;
  background-color: #000000;
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;
  margin: 5px auto;
  
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;

  width: 100%;
  height: var(--nav-height);
  background-color: rgba(0, 0, 0, 0.5);
  filter: none !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);
`;

class NeoGraphContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Berkman LF',
                  weight: 1,
                  queryName: 'Berkman LF',
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

    return (<>
                <ThemeProvider theme={theme}>
                    <GlobalStyleNetworkVis />
        <StyledForm>
            <form onSubmit = {this.handleSubmit}>

                    Researcher  &nbsp;
                    <input type="text" value={this.state.name} onChange={this.handleChangeN} />
&emsp; &emsp;
                Period  &nbsp;
                    <select  name="period" id = "period" value = {this.state.weight} onChange={this.handleChangeW}>
                        <option value="1" selected>All Time</option>
                        <option value="2">Before 1950</option>
                        <option value="3">1951-1960</option>
                        <option value="4">1961-1970</option>
                        <option value="5">1971-1980</option>
                        <option value="6">1980-1990</option>
                        <option value="7">1990-2000</option>
                        <option value="8">2001-2005</option>
                        <option value="9">2006-2010</option>
                        <option value="10">2011-2015</option>
                        <option value="11">2016-Current</option>
                    </select>
&emsp; &emsp;
                    Collaborations  &nbsp;
                    <select  name="weight" id = "weight" value = {this.state.weight} onChange={this.handleChangeW}>
                        <option value="1" selected>1+</option>
                        <option value="2">2+</option>
                        <option value="3">3+</option>
                        <option value="4">4+</option>
                        <option value="5">5+</option>
                        <option value="10">10+</option>
                        <option value="20">20+</option>
                    </select>
&emsp; &emsp;

                <input type="submit"/>
                {/*<input type='text' list='listid'/>*/}
                {/*    <datalist id='listid'>*/}
                {/*        <option  value='value1'/>*/}
                {/*        <option  value='value2'/>*/}
                {/*    </datalist>*/}

            </form>
                    </StyledForm>
        </ThemeProvider>

            <div className="App">
                <ResponsiveNeoGraph
                    containerId={containerId}
                    neo4jUri={neo4jUri}
                    neo4jUser={neo4jUser}
                    neo4jPassword={neo4jPassword}
                    searchname={this.state.queryName}
                    collabweight={this.state.queryWeight}/>
            </div>
</>

    );
  }
}

export default NeoGraphContainer;