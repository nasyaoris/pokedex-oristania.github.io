import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import prevButton from "../../../../assets/img/prevButton.png";
import nextButton from "../../../../assets/img/nextButton.png";
import EmptyCard from "../../../../components/EmptyCard";
import { PaginationContainer } from "./style";

function Pagination({ title, children, emptyText, showItems, isLoading, currentPage, setCurrentPage}){
  const [numPage, setNumPage] = useState(currentPage);
  const [currentPageArray, setCurrentPageArray] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const paginationPerPage = 4;

  useEffect(() => {
    setItemsPerPage(showItems);
  }, [showItems]);

  const countLastItemIndex = () => currentPage * itemsPerPage;
  const countFirstItemIndex = () => countLastItemIndex() - itemsPerPage;
  const renderCurrentItems = () =>
    children.length ? (
      children.slice(countFirstItemIndex(), countLastItemIndex())
    ) : (
      <EmptyCard text={emptyText} />
    );

  function setPage(number) {
      setCurrentPage(number)
      setNumPage(number)
  }      

  const renderNumberComponent = (number) => (
    <button
      className={`clickable page-number-${numPage === number ? "active" : "inactive"}`}
      onClick={() => setPage(number)}
      key={number}
    >
      {number}
    </button>
  );

  const movePageArray = (addition) => {
    const nextPageArrayIndex = currentPageArray + addition;
    const nextPage = 1 + nextPageArrayIndex * paginationPerPage;

    setCurrentPageArray(nextPageArrayIndex);
    setCurrentPage(nextPage);
  };

  const renderMovePageComponent = (direction, number) =>
    direction === "left" ? (
      <button
        className="arrow-button"
        onClick={() => movePageArray(-1)}
        key={`${number}-${direction}`}
      >
        <img className="left" src={prevButton} alt={"left arrow"} />
      </button>
    ) : (
      <button
        className="arrow-button"
        onClick={() => movePageArray(1)}
        key={`${number}-${direction}`}
      >
        <img className="right" src={nextButton} alt={"right arrow"} />
      </button>
    );

  const renderArrayPageNumber = (index) => {
    const totalItem = children.length;
    const totalPages = Math.ceil(totalItem / itemsPerPage);

    const result = [];
    let temp = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1) {
        temp.push(
          <button
            disabled
            style={{ opacity: "50%", cursor: "default" }}
            className="arrow-button"
            key={`${i}-left`}
          >
            <img className="left" src={prevButton} alt={"left arrow"} />
          </button>
        );
      }
      temp.push(renderNumberComponent(i));

      if (i % paginationPerPage === 0 || i === totalPages) {
        if (i < totalPages) {
          temp.push(renderMovePageComponent("right", i));
        }
        if (i === totalPages) {
          temp.push(
            <button
              disabled
              style={{ opacity: "50%", cursor: "default" }}
              className="arrow-button"
              key={`${i}-right`}
            >
              <img className="right" src={nextButton} alt={"right arrow"} />
            </button>
          );
        }
        result.push(temp);
        temp = [];
        temp.push(renderMovePageComponent("left"));
      }
    }

    return result[index];
  };

  return (
    <PaginationContainer>
      <div className="pagination-header">
        <h2 className={children.length ? "title-pagination" : ""}>{title}</h2>
        {children.length ? <div>{renderArrayPageNumber(currentPageArray)}</div> : <div />}
      </div>
      <div className="list">
      {!isLoading ? renderCurrentItems() : <p>Loading...</p>}
      </div>
    </PaginationContainer>
  );
};

Pagination.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
  emptyText: PropTypes.string.isRequired,
  showItems: PropTypes.number,
  isLoading: PropTypes.bool,
};

Pagination.defaultProps = {
  showItems: 16,
};

export default Pagination;
