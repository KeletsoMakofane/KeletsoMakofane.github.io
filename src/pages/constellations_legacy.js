import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { navDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
import NeoGraphContainer from "../components/neographcontainer";
import { GlobalStyleNetworkVis, theme } from '@styles';
import { ThemeProvider } from 'styled-components';

const NEO4J_URI =  "neo4j://graph.keletsomakofane.com";
const NEO4J_USER = "neo4j";
const NEO4J_PASSWORD = "july-analog-kermit-cipher-lunar-4215";

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

useEffect (() => {document.body.style.backgroundColor = "black"})

  return (
      <>
        <ThemeProvider theme={theme}>

          <StyledMainContainer>
            <NeoGraphContainer containerId={"id0"} neo4jUri={NEO4J_URI} neo4jUser={NEO4J_USER} neo4jPassword={NEO4J_PASSWORD}/>

          </StyledMainContainer>

          </ThemeProvider>
      </>
  );
};

PubMedPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default PubMedPage;

