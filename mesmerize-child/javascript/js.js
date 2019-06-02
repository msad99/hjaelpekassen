// JavaScript Document
//Vi loader først scriptet når siden er klar.
window.onload = function () {
	//Definere vores variabler via vores klasser, da vi har flere elementer med disse klasser. Så er den hentede data arrays.
	var mod = document.getElementsByClassName("modding");
	var ren = document.getElementsByClassName("rengoering");
	var sam = document.getElementsByClassName("samling");
	var fors = document.getElementsByClassName("forside");
	var highlight = document.getElementsByClassName("highlight");
	var nav = document.getElementsByClassName("nav");
	var logo = document.getElementsByClassName("custom-logo");
	var vb = document.getElementById("venstreBillede");
	var mb = document.getElementById("midBillede");
	var hb = document.getElementById("storBillede");
	var vbb = vb.getElementsByTagName("img");
	var mbb = mb.getElementsByTagName("img");
	var hbb = hb.getElementsByTagName("img");
	var mv = document.getElementById("modVid");
	var rv = document.getElementById("renVid");
	var sv = document.getElementById("samVid");
	var heat = 1;
	function timer() {
		var i = 0
		if (heat == 1) {
			for(i = 0; i < nav.length; i++){
				nav[i].style.backgroundColor = "rgb(59,80,163)";
			}
			for (i = 0; i < highlight.length; i++) {
				highlight[i].style.backgroundColor = "rgb(97,41,145)";
			}
			logo[0].src = 'https://errors.dk/project/hjaelpekassen/wp-content/uploads/2019/05/Hjaelpekassen-Logo-Kold.png';
			logo[0].srcset = 'https://errors.dk/project/hjaelpekassen/wp-content/uploads/2019/05/Hjaelpekassen-Logo-Kold.png';
			vbb[0].src = 'https://errors.dk/project/hjaelpekassen/wp-content/uploads/2019/05/Artboard-1.png';
			vbb[0].srcset = 'https://errors.dk/project/hjaelpekassen/wp-content/uploads/2019/05/Artboard-1.png';
			mbb[0].src = 'https://errors.dk/project/hjaelpekassen/wp-content/uploads/2019/05/Artboard-1-1.png';
			mbb[0].srcset = 'https://errors.dk/project/hjaelpekassen/wp-content/uploads/2019/05/Artboard-1-1.png';
			hbb[0].src = 'https://errors.dk/project/hjaelpekassen/wp-content/uploads/2019/05/Artboard-1-2.png';
			hbb[0].srcset = 'https://errors.dk/project/hjaelpekassen/wp-content/uploads/2019/05/Artboard-1-2.png';
			heat = 0;

		} else {
			for(i = 0; i < nav.length; i++){
				nav[i].style.backgroundColor = "rgb(226,110,64)";
			}
			for (i = 0; i < highlight.length; i++) {
				highlight[i].style.backgroundColor = "rgb(191,32,38)";
			}
			logo[0].src = 'https://errors.dk/project/hjaelpekassen/wp-content/uploads/2019/05/Hjaelpekassen-Logo.png';
			logo[0].srcset = 'https://errors.dk/project/hjaelpekassen/wp-content/uploads/2019/05/Hjaelpekassen-Logo.png';
			vbb[0].src = 'https://errors.dk/project/hjaelpekassen/wp-content/uploads/2019/05/Artboard-1-4.png';
			vbb[0].srcset = 'https://errors.dk/project/hjaelpekassen/wp-content/uploads/2019/05/Artboard-1-4.png';
			mbb[0].src = 'https://errors.dk/project/hjaelpekassen/wp-content/uploads/2019/05/Artboard-1-3.png';
			mbb[0].srcset = 'https://errors.dk/project/hjaelpekassen/wp-content/uploads/2019/05/Artboard-1-3.png';
			hbb[0].src = 'https://errors.dk/project/hjaelpekassen/wp-content/uploads/2019/05/Artboard-1-5.png';
			hbb[0].srcset = 'https://errors.dk/project/hjaelpekassen/wp-content/uploads/2019/05/Artboard-1-5.png';
			heat = 1;
		}
		
	}

	function modding() {

		//message for at vise, vi er gået ind i funktionen.

		//benytter jQuery til at definerer en boolean værdi. I dette tilfælde, hvis vores variable er skjult, så kører den selve indholdet af funktionen.
		//Det er en ren sikkerhedsprocedurer
		if (jQuery(mod).hide) {
			//Her benytter vi en for loop til at kører igennem alle elementerne i vores arrays for at ændre dem med show eller hide funktionen i jQuery.
			for (var i = 0; i < mod.length; i++) {
				jQuery(mod[i]).show();
				jQuery(ren[i]).hide();
				jQuery(sam[i]).hide();
				jQuery(fors[i]).hide();
			}
			mv.scrollIntoView(true);
		}

	}
	//det samme som modding() funktionen
	function rengoering() {



		if (jQuery(ren).hide) {
			for (var i = 0; i < ren.length; i++) {
				jQuery(mod[i]).hide();
				jQuery(ren[i]).show();
				jQuery(sam[i]).hide();
				jQuery(fors[i]).hide();

			}
			rv.scrollIntoView(true);
		}

	}
	//igen samme funktionalitet som modding().
	function samling() {



		if (jQuery(sam).hide) {
			for (var i = 0; i < sam.length; i++) {
				jQuery(mod[i]).hide();
				jQuery(ren[i]).hide();
				jQuery(sam[i]).show();
				jQuery(fors[i]).hide();

			}
			sv.scrollIntoView(true);
		}

	}

	//her benytter vi jQuery til at håndtere event on click for at kører vores funktioner.
	//moddings block
	jQuery('#navModMod').on("click", modding);
	jQuery('#navModFors').on("click", modding);
	jQuery('#navModRen').on("click", modding);
	jQuery('#navModSam').on("click", modding);
	//samlings block
	jQuery('#navSamFors').on("click", samling);
	jQuery('#navSamMod').on("click", samling);
	jQuery('#navSamSam').on("click", samling);
	jQuery('#navSamRen').on("click", samling);
	//rengoerings block
	jQuery('#navRenFors').on("click", rengoering);
	jQuery('#navRenSam').on("click", rengoering);
	jQuery('#navRenRen').on("click", rengoering);
	jQuery('#navRenMod').on("click", rengoering);
	
	//timer function i interval
	window.setInterval(timer,20000)

}, false;