    var looper;
    var graus=0;

    function rotate(){
      document.querySelector("#rocketseat").style.transform = `rotate(${graus}deg)`
      graus++;
      looper = setTimeout(rotate, 20);
    }

    setTimeout(rotate, 60);


function getGitHubProfileInfo() {
  user = prompt("Github Username: ")
  containersocialmedia = document.getElementById("socialmedia");

  if(user=="lucastoll")
    containersocialmedia.style.display = "block"
  else
    containersocialmedia.style.display = "none"

  var url = `https://api.github.com/users/${user}`

  
  fetch(url)
    .then(response => { 
      if (response.ok) {
        return response.json() 
      }
      else //Reinicio caso a api não enconte o usuario
      {
        getGitHubProfileInfo()
      }
})
.then(data => {
  Username.textContent = data.name
  Userid.textContent = data.login
  bio.textContent = data.bio
  ghublink.href = data.html_url
  profilepic.src = data.avatar_url
})

}

getGitHubProfileInfo() //Executar pela primeira vez