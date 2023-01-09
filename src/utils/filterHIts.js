export const filterHIts = hits => {
  return hits.map(({ id, tags, largeImageURL, webformatURL }) => ({
    id,
    tags,
    largeImageURL,
    webformatURL,
  }));
};
