import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { navDelay } from '@utils';
import { Layout } from '@components';
import { usePrefersReducedMotion } from '@hooks';
import { ResponsiveNeoGraph } from '@components';
import NeoGraphContainer from "../components/neographcontainer";

const NEO4J_URI =  "bolt://192.168.1.208:7687";
//const NEO4J_URI =  "http://192.168.1.208:7474";
const NEO4J_USER = "neo4j";
const NEO4J_PASSWORD = "abcd";

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const StyledTitle = styled.h1`
  color: var(--green);
  font-family: var(--font-mono);
  font-size: clamp(100px, 25vw, 200px);
  line-height: 1;
`;
const StyledSubtitle = styled.h2`
  font-size: clamp(30px, 5vw, 50px);
  font-weight: 400;
`;
const StyledHomeButton = styled(Link)`
  ${({ theme }) => theme.mixins.bigButton};
  margin-top: 40px;
`;

function submitHandler(event){

}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Makofane K',
                  weight: 1};

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

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Researcher:
          <input type="text" value={this.state.name} onChange={this.handleChangeN} />
        </label>
                     <label>Minimum Collaborations:
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
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const PubMedPage = ({ location }) => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);



  return (
    <Layout location={location}>
      <StyledMainContainer>
       {/*<form action="page.html" method="GET" target="_blank" onsubmit = "draw('Krieger N')">*/}
       {/*    <label>Author: <input type = "text" name="name" id="name"/> </label>*/}
       {/*    <br/>*/}

       {/*    <label>Minimum Collaborations:*/}
       {/*         <select  name="weight" id = "weight">*/}
       {/*             <option value="1" selected>1</option>*/}
       {/*             <option value="2">2</option>*/}
       {/*             <option value="3">3</option>*/}
       {/*             <option value="4">4</option>*/}
       {/*             <option value="5">5</option>*/}
       {/*             <option value="10">10</option>*/}
       {/*             <option value="20">20</option>*/}
       {/*         </select>*/}
       {/*    </label>*/}
       {/*    <br/>*/}
       {/*     <input type="submit" value="Submit"/>*/}
       {/* </form>*/}
       {/*   <NameForm/>*/}
       {/* <div className="App">*/}
          <NeoGraphContainer containerId={"id0"} neo4jUri={NEO4J_URI} neo4jUser={NEO4J_USER} neo4jPassword={NEO4J_PASSWORD}/>
        {/*</div>*/}
      </StyledMainContainer>
    </Layout>
  );
};

PubMedPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default PubMedPage;
