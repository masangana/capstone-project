const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appID = 'ed0LORUs5gJKQQ4QLOxZ';

const postLike = async (itemID) => {
  const response = await fetch(`${url}${appID}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: itemID }),
  });
  const post = await response.text();
  return post;
};

const getLikes = async () => {
    const response = await fetch(`${url}${appID}/likes`);
    const likes = await response.json();
    return likes;
  };

  
  export {
    postLike,
    getLikes,
  };