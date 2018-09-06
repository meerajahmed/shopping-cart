import React from 'react';
import Category from "./category";

/*const categoryMapIterator = function () {
 let properties = Object.keys(this);
 let count = 0;
 let isDone = false;
 let next = () => {
 if(count >= properties.length){
 isDone = true;
 }
 return { done: isDone, value: this[properties[count++]] }
 };
 return {next};
 };*/

//categoryMap[Symbol.iterator] = categoryMapIterator;


const Categories = ({books, searchCategory, handleCategoryChange}) => {

  const categoryMap = books.reduce((categoryMap, {category}) => {
    if (category in categoryMap) {
      categoryMap[category]++;
    } else {
      categoryMap[category] = 1;
    }
    return categoryMap;
  }, {});

  const categoryList = Object.keys(categoryMap);

  return (
    <div className="row">
      <div className="col-lg-12">
        <ul className="list-group text-primary list-group-flush shadow mb-4">
          {categoryList
            .map((category) =>
              ((<Category
                key={category}
                category={category}
                isActive={(searchCategory === category)}
                count={categoryMap[category]}
                handleCategoryChange={handleCategoryChange}
              />)))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;