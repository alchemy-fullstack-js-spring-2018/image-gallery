const USER_NAME = 'ineedthisforschool';
const FETCH_URL = `http://res.cloudinary.com/${USER_NAME}/image/fetch`;

export const getURL = (url, options = '') => {
  return `${FETCH_URL}/${options}/${encodeURIComponent(url)}`;
};