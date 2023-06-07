const BASE_URL = 'https://pixabay.com';
const KEY = '35785441-a207f2b150a26c5e7bb8ad037';

export const getIMG = async (searchQuery, page) => {
  const params = new URLSearchParams({
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    page,
    per_page: 12,
  });

  const response = await fetch(`${BASE_URL}/api/?key=${KEY}&${params}`);
  if (!response.ok) {
    throw new Error('Ops .... ');
  }
  return response.json();
};
