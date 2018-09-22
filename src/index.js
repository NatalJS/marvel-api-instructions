import axios from 'axios';
import md5 from 'blueimp-md5';
import './stylesheets/styles.scss';

let apikey = '5c49dbf430653fae9b7396e83ab14ec7';
let publicKey = '7bfeeefb99a89b8261f9768e07640b2a60c02889'
let ts = 'gustavoFreire2';
let hash = md5(ts+publicKey+apikey)
let container = document.getElementById("index");
let searchBtn = document.getElementById('searchBtn');
searchBtn.onclick = () => {
  document.removeChild(container);
  document.removeChild(newContainer);
  let body = document.getElementById('body');
  let newContainer = document.createElement('div');
  newContainer.id = 'index';
  container.appendChild(newContainer);
  let text  = document.getElementById("text").value;
  axios.get('http://gateway.marvel.com/v1/public/characters', {
    params: {
      ts: ts,
      apikey: apikey,
      hash: hash,
      nameStartsWith: text
    }
  })
    .then(function (response) {
      console.log(response.data.data.results);
      let list = response.data.data.results;
      list.forEach((char) => {
        let name = document.createElement('p');
        let description = document.createElement('p');
        let thumb = document.createElement('img');
        thumb.src = char.thumbnail.path + '.jpg';
        name.innerHTML = char.name;
        description.innerHTML = char.description;
        
        container.appendChild(name);
        container.appendChild(description);
        container.appendChild(thumb);
      });
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });  
}


