import styled from "styled-components";

export const EmptyCardStyle = styled.div`
width: 100%;
  .empty-text-container {
    background: #ffffff;
    mix-blend-mode: normal;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 100%;
    height: 145px;
    display: flex;
  }

  .text-container {
    font-family: Metropolis;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 16px;
    color: #bbb2c4;
    margin: 55px auto;
    align-items: center;
    text-align: center;
    justify-content: center;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    .empty-text-container {
      width: 100%;
      height: 150px;
    }
  }

  /*
    ##Device = Most of the Smartphones Mobiles (Portrait)
    ##Screen = B/w 320px to 479px
  */

  @media (min-width: 321px) and (max-width: 480px) {
    .empty-text-container {
      width: 100%;
      height: 150px;
    }
  }

  @media (max-width: 320px) {
    .empty-text-container {
      width: 100%;
      height: 160px;
    }
  }
`;
