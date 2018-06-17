const CLOUD_NAME = 'kelicloud';
const FETCH_URL = `http://res.cloudinary.com/${CLOUD_NAME}/image/fetch`;

export const getUrl = (url, options = '') => {
  return `${FETCH_URL}/${options}/${encodeURIComponent(url)}`;
};