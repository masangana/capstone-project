export default class FetchRequestClass {
    method;

      body;

      headers = {
        'Content-type': 'application/json; charset=UTF-8',
      };

      url;

      constructor({ method = 'GET', body, url = '' } = {}) {
        this.method = method;
        this.body = body;
        this.url = url;
      }

      async makeRequest() {
        try {
          const options = {
            method: this.method,
            body: JSON.stringify(this.body),
            headers: this.headers,
          };

          const reponse = await fetch(this.url, options);
          const data = await reponse.json();
          return data;
        } catch (error) {
          throw new Error(error);
        }
      }

       getItemByID = async (id) => {
         const item = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
           .then((response) => response.json());
         return item;
       }

       getComments = async (id) => {
         const comments = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ed0LORUs5gJKQQ4QLOxZ/comments?item_id=${id}`);
         const data = await comments.json();
         return data;
       }

       postComments = async (itemID, name, comment) => {
         fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ed0LORUs5gJKQQ4QLOxZ/comments', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({
             item_id: itemID,
             username: name,
             comment,
           }),
         });
       }
}