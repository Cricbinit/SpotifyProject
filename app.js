// const clientId = "aaa5f75344c44e5d888b8bdb6ee18bdb";
// const clientSecret = "4e017152df984f69af6e69eab1740337";
// let i = 0;
// const getToken = async () => {
//   const response = await fetch("https://accounts.spotify.com/api/token", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//       Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
//     },
//     body: "grant_type=client_credentials",
//   });
//   const data = await response.json();
//   console.log(data);
//   const accessToken = data.access_token;
//   console.log(accessToken);
//   const artistId = "6KImCVD70vtIoJWnq6nGn3";
//   fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`, {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//   })
//     .then(response => response.json())
//     .then(data =>
//       data.tracks.map(m => {
//         let data = JSON.stringify(m);
//         console.log(m.name);
//         localStorage.setItem(`spotifydata${i}`, data);

//         let data1 = localStorage.getItem(`spotifydata${i}`);
//   i++;
//         let data2 = JSON.parse(data1);

//         let img = document.getElementsByClassName("right-side")[0];
//         // console.log(img)
//         img.innerHTML += `<img src='${data2.album.images[0].url}'>`;
//         //  console.log(data2);
//         //  console.log(data2.preview_url);
//         //  console.log(data2.album.id);
//         //  console.log(data2.name);
//         //  let res = data2.album.external_urls.spotify;
//         //  console.log(res);
//         document.getElementById("div").innerHTML += `
//         // <div class="album">${(location.href =
//           data2.album.external_urls.spotify)}</div>
//         <div class="album">${data2.preview_url}</div>
//         `;
//       })
//     );
// };
// getToken();

// const clientId = "aaa5f75344c44e5d888b8bdb6ee18bdb";
// const clientSecret = "4e017152df984f69af6e69eab1740337";
// let i = 0;
// const getToken = async () => {
//   const response = await fetch("https://accounts.spotify.com/api/token", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//       Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
//     },
//     body: "grant_type=client_credentials",
//   });
//   const data = await response.json();
//   console.log(data);
//   const accessToken = data.access_token;
//   console.log(accessToken);
//   const artistId = "5rQoBDKFnd1n6BkdbgVaRL";
//   fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`, {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//   })
//     .then(response => response.json())
//     .then(data =>
//       data.tracks.map(m => {
//         let data = JSON.stringify(m);
//         console.log(m.name);
//         localStorage.setItem(`spotifydata${i}`, data);

//         let data1 = localStorage.getItem(`spotifydata${i}`);
//         i++;
//         let data2 = JSON.parse(data1);
//         let img = document.getElementsByClassName("card")[0];
//         // console.log(img);
//         img.innerHTML += `<img src='${data2.album.images[0].url}'>
//          <h6>${data2.album.name}</h6>
//          <div>${data2.album.release_date}</div>
//          <audio src="${data2.preview_url}"controls></audio>`;
//         //  console.log(data2);
//         //  console.log(data2.preview_url);
//         //  console.log(data2.album.id);
//         //  console.log(data2.name);
//         //  let res = data2.album.external_urls.spotify;
//         //  console.log(res);
//         // document.getElementById("div").innerHTML += `
//         // <div class="album">${(location.href =
//         //   data2.album.external_urls.spotify)}</div>
//         // <div class="album">${data2.preview_url}</div>
//         // `;
//       })
//     );
// };
// getToken();

// let i = 0;
const clientId = "aaa5f75344c44e5d888b8bdb6ee18bdb";
const clientSecret = "4e017152df984f69af6e69eab1740337";
let s;
let i = 0;
const getToken = async () => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
    },
    body: "grant_type=client_credentials",
  });
  const data = await response.json();
  console.log(data);
  const accessToken = data.access_token;
  console.log(accessToken);
  const artistId = "5rQoBDKFnd1n6BkdbgVaRL";
  fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then(response => response.json())
    .then(data =>
      data.tracks.map(m => {
        let data = JSON.stringify(m);
        console.log(m.name);
        console.log(m);
        localStorage.setItem(`spotifydata${i}`, data);

        let data1 = localStorage.getItem(`spotifydata${i}`);
        i++;
        let data2 = JSON.parse(data1);
        let img = document.getElementsByClassName("audioList");
        console.log(img);
        [...img].map(val => {
          val.innerHTML += `<div class="list"> <img src='${data2.album.images[0].url}'>
          <p><h6>${data2.album.name}</h6><audio  id="audio" src ="${data2.preview_url}" controls></audio></p></div>
         
          `;
          let foo = document.getElementById("footer");
          let list = document.getElementsByClassName("audioList")[0];
          let bbb = list.children;
          console.log(bbb);
          let Arraybbb = Array.from(bbb);
          console.log(Arraybbb);
          let arrList = Array.from(list.children);
          console.log(arrList);
          Arraybbb.map((b, i) => {
            // console.log(e);
            let mainUrl = b.children[3].getAttribute("src");
            // console.log(mainUrl);
            b.addEventListener("click", e => {
              console.log(b);
              let audioUrl = b.children[3].getAttribute("src");
              let imgUrl = b.children[0].getAttribute("src");
              console.log(imgUrl);
              foo.innerHTML = `
               
                <audio style="display:none;" class="AudioPlayer" src ='${audioUrl}' controls autoplay ></audio>
                <div class="btns">
                <img id="dis-img" src="${imgUrl}"/>
                 <div class="icons">
              <button id="backward"><i class="fa-solid fa-backward"></i></button>
              </div>

               <div class="icons">
              <button id="play" style="display:none;"><i class="fa-solid fa-play"></i></button>
              </div>

               <div class="icons">
              <button id="pause" ><i class="fa-solid fa-pause"></i></button>
              </div>
              
              <div class="icons">
              <button id="forward"><i class="fa-solid fa-forward"></i></button>
              </div>
              <div class="icons">
              <button id="Repeat"><i class="fa-solid fa-repeat"></i></button>
              </div>
              <div class="icons">
              <button id="Suffle"><i class="fa-solid fa-shuffle"></i></button>
              </div>
              </div>
              `;
              let playBtn = document.getElementById("play");
              console.log(playBtn);
              let pauseBtn = document.getElementById("pause");
              let backwardBtn = document.getElementById("backward");
              let forwardBtn = document.getElementById("forward");
              let audio = document.getElementsByClassName("AudioPlayer")[0];
              let imgs = document.getElementById("dis-img");
              forwardBtn.addEventListener("click", e => {
                if (i < localStorage.length - 1) {
                  i++;
                  s = localStorage.getItem(`spotifydata${i}`);
                  let Pars1 = JSON.parse(s);
                  imgs.setAttribute("src", `${Pars1.album.images[0].url}`);
                  audio.setAttribute("src", `${Pars1.preview_url}`);
                  pauseBtn.style.display = "block";
                  playBtn.style.display = "none";
                } else {
                  i = 0;
                  s = localStorage.getItem(`spotifydata${i}`);
                  let Pars1 = JSON.parse(s);
                  imgs.setAttribute("src", `${Pars1.album.images[0].url}`);
                  audio.setAttribute("src", `${Pars1.preview_url}`);
                  pauseBtn.style.display = "block";
                  playBtn.style.display = "none";
                }
              });
              backwardBtn.addEventListener("click", e => {
                if (i > 0) {
                  --i;
                  s = localStorage.getItem(`spotifydata${i}`);
                  let Pars2 = JSON.parse(s);
                  imgs.setAttribute("src", `${Pars2.album.images[0].url}`);
                  audio.setAttribute("src", `${Pars2.preview_url}`);
                  pauseBtn.style.display = "block";
                  playBtn.style.display = "none";
                } else {
                  i = localStorage.length - 1;
                  s = localStorage.getItem(`spotifydata${i}`);
                  let Pars2 = JSON.parse(s);
                  imgs.setAttribute("src", `${Pars2.album.images[0].url}`);
                  audio.setAttribute("src", `${Pars2.preview_url}`);
                  pauseBtn.style.display = "block";
                  playBtn.style.display = "none";
                }
              });
              playBtn.addEventListener("click", e => {
                pauseBtn.style.display = "block";
                audio.play();
                playBtn.style.display = "none";
              });
              pauseBtn.addEventListener("click", e => {
                pauseBtn.style.display = "none";
                playBtn.style.display = "block";
                audio.pause();
              });

              let repeat = document.getElementById("Repeat");
              repeat.addEventListener("click", e => {
                if ((repeat.style.color = "black")) {
                  repeat.style.color = "green";
                } else if ((repeat.style.color = "green")) {
                  repeat.style.color = "red";
                }
                if ((localStorage.length = 0)) {
                  s = localStorage.getItem(`spotifydata${i}`);
                  let Pars2 = JSON.parse(s);
                  imgs.setAttribute("src", `${Pars2.album.images[0].url}`);
                  audio.setAttribute("src", `${Pars2.preview_url}`);
                  audio.repeat();
                  pauseBtn.style.display = "block";
                  playBtn.style.display = "none";
                } else {
                  s = localStorage.getItem(`spotifydata${i}`);
                  let Pars2 = JSON.parse(s);
                  imgs.setAttribute("src", `${Pars2.album.images[0].url}`);
                  audio.setAttribute("src", `${Pars2.preview_url}`);
                  pauseBtn.style.display = "block";
                  playBtn.style.display = "none";
                }
              });
            });
          });
        });
      })
    );
};
getToken();

// `<audio style="display:block;" id="audio" src ="${mainUrl}" controls autoplay></audio>`;
