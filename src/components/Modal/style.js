import styled, { css } from "styled-components";

export const MAX_WIDTHS = {
  lg: "1280px",
  md: "960px",
  sm: "600px",
  xl: "1920px",
  xs: "444px",
};

export const ModalContainer = styled.div`
  display: none;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 100000;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
  align-items: center;
  display: flex;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  visibility: hidden;
  ${(props) =>
    props.open &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;

export const Wrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 100vw;
  margin: 16px;
  position: relative;
  overflow-y: auto;
  display: flex;
  max-height: calc(100% - 84px);
  flex-direction: column;
  padding: 1.5rem 2rem;

  @media only screen and (max-width: 768px) {
    padding: 1rem;
    max-height: calc(100% - 150px);
  }

  max-width: 444px;
  ${(props) =>
    props.maxWidth &&
    css`
      max-width: ${MAX_WIDTHS[props.maxWidth]};
    `}
  ${(props) =>
    props.fullWidth &&
    css`
      width: calc(100% - 32px);
    `}

  animation-name: animatetop;
  animation-duration: 0.5s;
  @keyframes animatetop {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
