import React from "react";
import PropTypes from "prop-types";

import { EmptyCardStyle } from "./style";

function EmptyCard({ text }) {
  return (
    <EmptyCardStyle>
      <div className="empty-text-container">
        <h1 className="text-container">{text}</h1>
      </div>
    </EmptyCardStyle>
  );
}

EmptyCard.propTypes = {
  text: PropTypes.string.isRequired,
};

export default EmptyCard;
