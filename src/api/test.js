const url = "http://localhost:3000/api/";

const fetchTest = () => {
  return fetch(`${url}test`).then(res => res.text());
};

export { fetchTest };
