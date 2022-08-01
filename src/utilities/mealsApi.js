import mealsreqApi from './sendrequest'

const BASE_URL = "https://themealdb.com/api/json/v1/1/"

export function getCat() {
  return mealsreqApi(`${BASE_URL}/filter.php?c=Seafood`);
}

export function getSearch(selectedParam, selectedSearch) {
  return mealsreqApi(`${BASE_URL}/filter.php?${selectedParam}=${selectedSearch}`);
}