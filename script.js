let time = document.getElementById("timer");

setInterval(() => {
	let date=new Date();
    let month= date.getMonth()+1;
    let day= date.getDate();
    let year= date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
	time.innerText= `${month}/${day}/${year}, ${hours}:${minutes}:${seconds} PM`;
},1000)