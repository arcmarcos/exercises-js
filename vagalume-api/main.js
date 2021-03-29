const form = document.forms[0];
const alert = document.querySelectorAll('.alert');
const lyricDiv = document.querySelector(".lyric-result");

function alertUser(element) {
  alert[element].classList.add('active');
  setTimeout(() => alert[element].classList.remove('active'), 2000);
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

form.addEventListener("submit", handleSubmit);

function fillDiv(picture, artist, song, lyric) {
  const resultElements = `
     <img src=${picture} alt=${artist} title=${artist}>
     <h2>${artist} | ${song}</h2>`;

  const lyricElement = `<pre>${lyric}</pre>`;

  lyricDiv.innerHTML = resultElements + lyricElement;
}

function fetchedSong({ art, mus }) {
  let picture = art.pic_medium;
  let artistName = art.name;
  let songName = mus[0].name;
  let lyric = mus[0].text;
  let lyricTranslate =  mus[0].translate ? mus[0].translate[0].text : null

  fillDiv(picture, artistName, songName, lyric);

  lyricTranslate ? translateSong() : null;

  document.title = `${songName} | ${artistName}`;
  document.querySelector('link[rel="icon"]').href = `${picture}`;
}

function notFetchedSong() {
  const notFound = document.createElement('p');
  notFound.classList.add('not-found');
  notFound.innerText = 'Música ou artista não encontrado!';
  form.append(notFound);
  lyricDiv.innerHTML = '';
  setTimeout(() => notFound.remove(), 3000)

  if (notFound.previousSibling.nodeName === 'P') {
    notFound.remove(); 
  }
}

function translateSong() {
  const translateButton = document.createElement('button');
  translateButton.classList.add('translate');
  translateButton.innerHTML = 'Tradução';
  if (translateButton) {
    lyricDiv.insertAdjacentElement('afterbegin', translateButton);
  }
}

async function fetchLyric(song, artist) {
  const url = `
  https://api.vagalume.com.br/search.php?art=${artist}&extra=artpic&mus=${song}`;
  const response = await fetch(url);
  const result = await response.json();

  if (result.type === 'exact') {
    fetchedSong(result);
    form.song.value = '';
    form.artist.value = '';
  } else {
    notFetchedSong();
  }
}
