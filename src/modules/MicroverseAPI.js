export default class FetchRequestClass {
    method;

      body;

      headers;

      url;

      constructor({
        method = 'GET',
        body, url = '',
        headers = { 'Content-type': 'application/json; charset=UTF-8' },
      } = {}) {
        this.method = method;
        this.body = body;
        this.headers = headers;
        this.url = url;
      }

      async makeRequest() {
        try {
          const options = {
            method: this.method,
            body: JSON.stringify(this.body),
            headers: this.method === 'POST' ? this.headers : undefined,
          };

          const reponse = await fetch(this.url, options);
          if (reponse.status === 201) return null;
          const data = await reponse.json();
          return data;
        } catch (error) {
          throw new Error(error);
        }
      }
}