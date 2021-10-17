import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { navDelay } from '@utils';
import { Layout } from '@components';
import { usePrefersReducedMotion } from '@hooks';
import NeoGraphContainer from "../components/neographcontainer";

const NEO4J_URI =  "bolt://54.165.217.90:7687";
const NEO4J_USER = "neo4j";
const NEO4J_PASSWORD = "qIjxu0-muqrip-xepdir";

const StyledMainContainer = styled.main`
  counter-reset: section;
`;


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
