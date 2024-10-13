const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

//se le agrego el async antes de la funcion para que haga la promesa
async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  response.json().then(
    (data) => {
      console.log(data);
      crearCard(data)
    }).catch(error => console.log("Problema con el JSON", error));
  console.log(data);
  data.forEach(user => {
    let card = `
      <p>${user.login}</p>
    `;
  });
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);

