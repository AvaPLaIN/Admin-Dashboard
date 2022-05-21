export type CategoryItemType = {
  title: string;
  icon: React.ComponentType<any>;
  path: string;
  items?: Omit<CategoryItemType, "items">[];
};

export type CategoryType = {
  title: string;
  icon: React.ComponentType<any>;
  items: CategoryItemType[];
};

export type Categories = CategoryType[];
