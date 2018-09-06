import React from 'react';

const getActiveListClass = ({isActive}) => isActive ? 'list-group-item-action active' : '';

const getActiveBadgeClass = ({isActive}) => isActive ? 'badge-light text-primary' : 'badge-primary';

const Category = (props) => {
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${getActiveListClass(props)}`}
      onClick={() => props.handleCategoryChange(props.category)}
    >
      {props.category}
      <span className={`badge badge-pill ${getActiveBadgeClass(props)}`}>{props.count}</span>
    </li>
    
  )
};

export default Category;