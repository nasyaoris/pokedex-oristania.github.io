import styled from "styled-components";

export const PaginationContainer = styled.div`
  margin-bottom: 2rem;
  .list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
}

  .pagination-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 10px;
  }

  .title-pagination {
    margin-bottom: 0px;
  }

  .arrow-button {
    background: none !important;
    border: none;
    padding: 0 !important;
    font-size: 1rem;
  }

  .arrow-button:hover {
    cursor: pointer;
  }

  .left {
    margin-right: 0.5rem;
  }

  .right {
    margin-left: 0.5rem;
  }

  .clickable {
    background: none !important;
    border: none;
    padding: 0 !important;
    font-size: 1rem;
    margin: 0 0.75rem;
    font-weight: bold;
    color: #1b274b;
  }

  .page-number-active {
    color: #8ba6b6;
  }

  .page-number-inactive {
    cursor: pointer;
  }



@media (max-width: 769px) {
  .list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 10px;
  }
}

@media (max-width: 429px) {
.list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 10px;
  }

}

`;
