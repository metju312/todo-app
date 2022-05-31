import React from 'react';
import styled from 'styled-components'

function Divider() {
  return (
    <BorderBottom/>
  );
}

const BorderBottom = styled.div`
  border: 1px solid rgb(0, 253, 63);
  width: 100%;
`

export default Divider;