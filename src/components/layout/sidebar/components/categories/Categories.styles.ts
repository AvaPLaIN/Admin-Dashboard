import styled from "styled-components";

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  height: 100%;

  padding: 1rem 0.5rem;
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;

  .category-header {
    display: flex;
    align-items: center;
    gap: 1rem;

    .toggle-category-button {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      cursor: pointer;
    }

    .category-icon {
      font-size: 2rem;
    }
  }

  .category-elements {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;

    padding: 1rem 2rem;

    font-size: 1.2rem;
  }
`;

export const CategoryElementContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
  cursor: pointer;
  border-radius: 0.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.background.secondary};
  }

  .category-element-title {
    white-space: nowrap;
  }
`;
