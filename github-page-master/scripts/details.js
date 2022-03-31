import { getRepoInfo } from "../helpers/getInfo.js";
import { showRepoInfo } from "../modules/showRepoInfo.js";
let contenedorRepos = document.getElementById('contenedor-repositorios');
let izquierda= document.getElementById('izquierda')

document.addEventListener('DOMContentLoaded', async () => {
         let userName = localStorage.getItem('user');

         let repos = await getRepoInfo(`https://api.github.com/users/${userName}/repos`)
         .then(res => res)

         let usuario = await getRepoInfo(`https://api.github.com/users/${userName}`)
         .then(usuario=>usuario)

         let {id,name} = usuario;

       showRepoInfo(repos, contenedorRepos);

 

      izquierda.innerHTML=`
       <img src="https://avatars.githubusercontent.com/u/${id}?v=4" />
       <h2>${userName}</h2>
       <h5>${name}</h5>
       <button>Follow</button>
       <button>Sponsor</button>
       `

})