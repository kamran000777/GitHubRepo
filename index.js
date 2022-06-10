const main = document.getElementById("main");
const search = document.getElementById("search-bar");
const  repo = document.querySelector(".repo > div");


//using axios to fetch data
function getUser(user) {
  axios.get("https://api.github.com/users/" + user)
    .then((response) => createUserCard(response,user)).catch(err=>inValidUser());
}

//fetching for the repo
function getrepo(user){
  axios.get("https://api.github.com/users/" + user+"/repos")
  .then((response) => createRepo(response));
}


//if the user exist and had something in the repo then it will show that
function createRepo(user){
  if(user.data.length!==0){
  repo.innerHTML = "";
 const dataArr = user.data;
 document.querySelector(".fallback").style.display="none";


  dataArr.sort((a,b)=>{
   return  b.stargazers_count-a.stargazers_count;
  }).slice(0,14).forEach(element => {
  let list = document.createElement("a");
   let {html_url}= element;
   list.classList.add("repo");
   list.href=html_url;
   list.target = "_blank";
   list.innerText = element.name.slice(0,15);
 
   repo.appendChild(list);
  });
  }else{
    EmptyRepo();
  }
}


//creating a card if the enter userid is valid and displaying it into the card
 function createUserCard(user,id) {
  document.querySelector("#main").style.display="block";
  const { name ,bio, followers , following , public_repos, avatar_url, company, location } = user.data;
  document.querySelector(".name").innerText=name?name:id;
  document.querySelector(".company").innerText="Works At :  "+company;
  document.querySelector(".location").innerHTML=`<img  src="locationIcon.jpg">&nbsp; ${location}`;
  document.querySelector(".post").innerText=bio;
  document.querySelector(".follower").innerText=followers +" Followers";
  document.querySelector(".following").innerText=following +" Following";
  document.querySelector(".public").innerText=public_repos +" Repos";
  document.querySelector(".dp").src=avatar_url;
  getrepo(id);
}

function inValidUser(){
  console.log("invalid");
  document.querySelector(".fallback").style.display="block";
  document.querySelector(".fallback>h2").textContent="Oops! Invalid Id.";
  document.querySelector("#main").style.display="none";
  
}

function EmptyRepo(){
  document.querySelector(".fallback").style.display="block";
   document.querySelector(".fallback>h2").textContent="Repo is Empty.";
}

search.addEventListener("keypress", (e) => {
  
  if(e.code==="Enter"){
    const user = e.target.value;
    document.querySelector(".fallback").style.display="none";
    document.querySelector(".container").style.height="fit-content";
  
  
    if (user != "") {
      getUser(user);
      search.value = "";
    }else{
      search.setAttribute("placeholder","Input User Id")
    }
  }
});




