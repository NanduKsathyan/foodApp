export function filterData(searchText, restaurants) {
  const filteredData = restaurants?.filter((restaurant) => {
    return restaurant?.data?.data?.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
  return filteredData;
}
