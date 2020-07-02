  	var link = document.querySelector(".call-modal1");
  	var popup = document.querySelector(".modal1");
  	var close = popup.querySelector(".modal-close");

  	var form = popup.querySelector("form");
  	var user = popup.querySelector("[name=user-name]");
  	var email = popup.querySelector("[name=email]");

  	var isStorageSupport = true;
  	var storage = "";

  	try {
  		storage = localStorage.getItem("user");
  	} catch (err) {
  		isStorageSupport = false;
  	}

  	link.addEventListener("click", function(evt) {
  		evt.preventDefault();
  		popup.classList.add("modal-show");

  		if (storage) {
  			user.value = storage;
  			email.focus();
  		} else {
  		user.focus();
  	}
  	});
  	close.addEventListener("click", function(evt) {
  		popup.classList.remove("modal-show");
  		popup.classList.remove("modal-error");
  	});
  	form.addEventListener("submit", function(evt) {
  		if (!user.value || !email.value) {
  			evt.preventDefault();
  			popup.classList.add("modal-error");
  		} else {
  			if (isStorageSupport) {
  				localStorage.setItem("user", user.value);
  			}
  		}	
  	});
  	window.addEventListener("keydown", function (evt) {
  		if (evt.keyCode === 27) {
  			evt.preventDefault();
  			if (popup.classList.contains("modal-show")) {
  				popup.classList.remove("modal-show");
  				popup.classList.remove("modal-error");
  			}
  		}
  	});
