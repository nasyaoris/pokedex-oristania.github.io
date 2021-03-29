import styled from 'styled-components';

export const HeaderContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
.title {
    font-family: "Pokemon";
    color: "FFCC03"
}

.logo {
    width: 200px;
    
}

button {
    border:none; 
    background: none;
    margin-left: 20px;
}

.buttons {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

.button {
    width: 45px;
}

@media (max-width: 769px) {
.button {
    width: 45px;
}
  
}

@media (max-width: 429px) {
    .logo {
        width: 150px;
    }
}

@media (max-width: 385px) {


}

`