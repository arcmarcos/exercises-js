const form = document.forms[0];
const alert = document.querySelectorAll('.alert')
console.log(alert[0]);

form.addEventListener("submit", handleSubmit)

function alertUser(element) {
  alert[element].classList.add('active');
  setTimeout(() => alert[element].classList.remove('active'), 3000);
}

function handleSubmit(e) {
  e.preventDefault();
  let song, artist;

  form.song.value !== '' ? song = form.song.value : alertUser(0);
  form.artist.value !== '' ? artist = form.artist.value : alertUser(1);

  if (song && artist) {
    fetchLyric(song, artist);
  }
}

function fillDiv(picture, artist, song, lyric) {
  const resultElements = `
     <img src=${picture} alt=${artist} title=${artist}>
     <h2>${artist} | ${song}</h2>
     <pre>${lyric}</pre>`;

  const lyricDiv = document.querySelector(".lyric-result");
  lyricDiv.innerHTML = resultElements;
}

async function fetchLyric(song, artist) {
  const url = `https://api.vagalume.com.br/search.php?art=${artist}&extra=artpic&mus=${song}`;
  const response = await fetch(url);
  const result = await response.json();

  let picture, artistName, songName, lyric;

  if (result.type === 'exact') {
    picture = result.art.pic_medium;
    artistName = result.art.name;
    songName = result.mus[0].name;
    lyric = result.mus[0].text;

    fillDiv(picture, artistName, songName, lyric);
    document.title = `${songName} | ${artistName}`;
    document.querySelector('link[rel="icon"]').href = `${picture}`
  }
  else {
        const notFound = document.createElement('p');
        notFound.classList.add('not-found')
        notFound.innerText = "Música ou artista não encontrado!"
        form.append(notFound)
                
        setTimeout(() => notFound.remove(), 3000)

        if(notFound.previousSibling.nodeName === 'P') {
          notFound.remove(); 
        }
  }
}
