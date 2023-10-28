export const getAllCategories = (data: any): string[] => {
  let categories: string[] = ["All"];

  data.forEach((Pizzas: any) => {
    if (!categories.includes(Pizzas.category)) {
      categories.push(Pizzas.category);
    }
  });

  return categories;
}
