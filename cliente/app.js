fetch('http://localhost:3000/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'SenaAdso',
    body: 'Aprendiz',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));