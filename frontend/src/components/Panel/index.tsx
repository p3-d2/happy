import styled from 'styled-components'

export default styled.div`
  background: ${props => props.theme.colors.primary};
  box-shadow: 0 0 7px 5px rgba(0, 0, 0, 0.02), 0 2px 3px rgba(0, 0, 0, 0.05);

  &.no-shadow {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 3px rgba(0, 0, 0, 0.2);
  }
`
