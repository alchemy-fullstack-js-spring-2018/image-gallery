const USER_NAME = 'dlqyjkbnl';
const FETCH_URL = `http://res.cloudinary.com/${USER_NAME}/image/fetch`;

export const getUrl = (url) => {
  return `${FETCH_URL}/w_150,h_150/${encodeURIComponent(url)}`;
};