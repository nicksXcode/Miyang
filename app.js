// Element Variables

	const login = document.querySelector("#submit");
	const modal = document.querySelector(".modal");
	const close = document.querySelector("#close");
	const msg = document.querySelector("#message");
	const home = document.querySelector("#home");
	const main = document.querySelector("#main");
	const mainPage = document.querySelector(".main-page");
	const heart = document.querySelector(".heart");


	login.addEventListener('click', ()=> {

		let name = document.querySelector("#name").value;

		name = name.toLowerCase();

		if(name === "romielene"){
			console.log("with input")
			modal.style.visibility = "visible";
			msg.innerHTML = "Welcome, " + name;
			msg.style.color = "black";
			home.style.display = "block";
			close.style.display = "none";

		} else if(name === ""){

			console.log("no input");
			modal.style.visibility = "visible";
			msg.innerHTML ="Please Enter Your Name";
			msg.style.color = "red";
			home.style.display = "none";
			close.style.display = "block";

		} else {
			console.log("no input");
			modal.style.visibility = "visible";
			msg.innerHTML ="Incorrect Name";
			msg.style.color = "red";
			home.style.display = "none";
			close.style.display = "block";
		}
	});

	close.addEventListener('click', ()=> {
		modal.style.visibility = "hidden";
	});


	home.addEventListener('click', ()=>{
		main.style.display = "none";
		modal.style.visibility = "hidden";
		mainPage.style.display = "flex";
	});



// MAIN PAGE

	heart.addEventListener('click', ()=> {
		modal.style.visibility = "visible";
		msg.innerHTML ="Yieeeee....";
		document.querySelector(".modal-content").style.padding = "20px";
	});