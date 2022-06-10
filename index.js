*{
      margin: 0;
      padding: 0;
}
body{
      width: 100%;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      font-family: 'Inter', sans-serif;
      background-image: url('https://img.wonderhowto.com/img/17/40/63614205794502/0/install-gitrob-kali-linux-mine-github-for-credentials.1280x600.jpg');
      background-position:center;
      background-repeat: no-repeat;
      background-size: cover;
}
.container{
      background-color: #000000d0;
      margin: 0 1.5rem;
      color: white;
      padding:1.5rem;
      border-radius: 10px;
      width: 600px;
      border: 1px solid white;
      height: 2.5rem;
      background-image: url("background.jpg");
      background-position: right;
      background-repeat: no-repeat;
      background-size: cover;
      margin-bottom: 2rem;
}
input{
      width: 95%;
      border-radius: 5px;
      padding:10px;
      font-size: 1rem;
      color:antiquewhite;
      background-color: #0000006c;
      outline: none;
      border: 1px solid antiquewhite;
}
#main{
      margin-top: 30px;
       display: none;
}
.dp{
      height:10em;
      border-radius: 50%;
      float: left;
      margin-right: 5vw;
      border: 2px solid white;
}
.info h2{
      font-size: 2rem;
      margin-bottom: 15px;
      
}
.info img{
      margin-top: 10px ;
}
.post{
     margin-top: 10px; 
}
.follow{
      display: flex;
      justify-content: center;
      margin-bottom:10px;
}
.follow div{
      margin-top: 15px;
      font-size: 15px;
      margin-right: 7vw;
}
.repo div{
      padding-top: 5px;
      font-size: 1.2rem;
      display: flex;
      flex-wrap: wrap;
      gap: 7px;
}
 .repo div a{
       text-align: center;
      color:white;
      visibility: visible;
      margin-right: 9px;
      text-decoration: none;
      background-color: rgba(68, 68, 68, 0.726);
      border-radius: 3px;
      padding:3px;
      margin-bottom: 3px;
      line-height: 2em;
      font-size:60%;
}
.repo a:hover{
      background-color:skyblue;
      color: black;
}
.fallback{
      margin-top: 10px;
      text-align: center;
      display: none;
}
@media(max-width:530px){
      input{
            width: 70%;
      }
}
