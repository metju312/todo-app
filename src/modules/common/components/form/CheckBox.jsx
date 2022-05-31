import React from "react";
import styled from 'styled-components'

function Checkbox({ className, checked, ...props }) {
  return (
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
}

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Icon = styled.svg`
  fill: none;
  stroke: ${props => props.theme.color.primary[600]};
  stroke-width: 2px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${props => props.checked ? props.theme.color.primary[100] : props.theme.color.white};
  border: 1px solid ${props => props.checked ? props.theme.color.primary[600] : props.theme.color.gray[300]};
  border-radius: 6px;
  transition: all 150ms;
  ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'}
  }
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export default Checkbox;
