import { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import categories from "../../data/categories";
import { CategoryItemType, CategoryType } from "../../types/index";
import {
  CategoriesContainer,
  CategoryContainer,
  CategoryElementContainer,
} from "./Categories.styles";

interface CategoryElement {
  element: CategoryItemType;
}

const CategoryElement: React.FC<CategoryElement> = ({ element }) => {
  return (
    <CategoryElementContainer>
      <h3 className="category-element-title">{element.title}</h3>
      <element.icon className="category-icon" />
    </CategoryElementContainer>
  );
};

interface CategoryProps {
  category: CategoryType;
}

const Category: React.FC<CategoryProps> = ({ category }) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const handleToggleCategoryIsOpen = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  return (
    <CategoryContainer>
      <div className="category-header">
        <div
          className="toggle-category-button"
          onClick={handleToggleCategoryIsOpen}
        >
          {isCategoryOpen ? (
            <MdOutlineKeyboardArrowDown />
          ) : (
            <MdOutlineKeyboardArrowRight />
          )}
        </div>
        <h1>{category.title}</h1>
        <category.icon className="category-icon" />
      </div>
      {isCategoryOpen ? (
        <div className="category-elements">
          {category.items.map((element, index) => (
            <CategoryElement key={index} element={element} />
          ))}
        </div>
      ) : null}
    </CategoryContainer>
  );
};

const Categories = () => {
  return (
    <CategoriesContainer>
      {categories.map((category, index) => (
        <Category key={index} category={category} />
      ))}
    </CategoriesContainer>
  );
};

export default Categories;
