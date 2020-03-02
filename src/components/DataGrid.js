// React imports
import React from "react";
import FiberServiceAttributes from "./Visualize/FiberServiceAttributes";
// Styled Components
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
`;

// Component definition
const DataGrid = props => {

    return (
        <div>
            <Container>
                <FiberServiceAttributes />
            </Container>
        </div>
    );
};

export default DataGrid;