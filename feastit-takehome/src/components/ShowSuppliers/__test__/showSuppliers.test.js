import "@testing-library/jest-dom";

const suppliers = [
  {
    name: "Mangiamo Wood Fired Pizza",
    categoryTier1: "food",
    dietary: [
      {
        name: "Vegan",
      },
      {
        name: "Vegetarian",
      },
    ],
  },
  {
    name: "One for the Road Box Bar",
    categoryTier1: "drink",
    dietary: [],
  },
];

function dietaryOptions(suppliers) {
  let dietaryRequirements = [];
  suppliers.map((item) => {
    if (item.categoryTier1 === "food") {
      item.dietary.map((item) => {
        dietaryRequirements.push(item.name);
      });
    }
  });
  return dietaryRequirements;
}

describe("Only certain suppliers return dietary requirements", () => {
  let result = [];
  it("returns true where category === food", () => {
    result = suppliers.filter((item) => item.categoryTier1 === "food");
    expect(result).toHaveLength(1);
  });
  it("returns names of companies where category === food", () => {
    result = suppliers.filter((item) => item.categoryTier1 === "food");
    expect(result[0].name).toBe("Mangiamo Wood Fired Pizza");
  });
  it("returns an array of two items for dietary if category is drink", () => {
    result = dietaryOptions(suppliers);
    expect(result).toHaveLength(2);
  });
  it("returns an empty array for dietary if category is drink", () => {
    let filteredSuppliers = suppliers.filter(
      (item) => item.categoryTier1 === "drink"
    );
    result = dietaryOptions(filteredSuppliers);
    expect(result).toEqual([]);
  });
});
