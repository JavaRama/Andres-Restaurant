/* JavaRama 
-- Andre's Restaurant 
-- Final Project  
-- HTTP 5103  */

/* ----- LOCATIONS ------ */

window.onload = function() {

	// Location Toggle Variables

	var arOpen = document.getElementById("andresOpen");
	var fkOpen = document.getElementById("felliniOpen");
	var jkOpen = document.getElementById("joe-koolsOpen");
	var rcOpen = document.getElementById("runt-clubOpen");

	var arClose = document.getElementById("andresClose");
	var fkClose = document.getElementById("felliniClose");
	var jkClose = document.getElementById("joe-koolsClose");
	var rcClose = document.getElementById("runt-clubClose");

	var andres = document.getElementById("andres");
	var fellini = document.getElementById("fellini");
	var joeKools = document.getElementById("joe-kools");
	var runtClub = document.getElementById("runt-club");

	// Lightbox Variables

	var lb = document.getElementById("lightbox");

	var arLb = document.getElementById("lightbox-andres");
	var fkLb = document.getElementById("lightbox-fellini");
	var jkLb = document.getElementById("lightbox-joe-kools");
	var rcLb = document.getElementById("lightbox-runt-club");

	var arGal = document.getElementById("andres-gallery");
	var fkGal = document.getElementById("fellini-gallery");
	var jkGal = document.getElementById("joe-kools-gallery");
	var rcGal = document.getElementById("runt-club-gallery");

	var arImg = document.getElementById("andres-img");
	var fkImg = document.getElementById("fellini-img");
	var jkImg = document.getElementById("joe-kools-img");
	var rcImg = document.getElementById("runt-club-img");

	var arNext = document.getElementById("andresNext");
	var arPrev = document.getElementById("andresPrev");

	var fkNext = document.getElementById("felliniNext");
	var fkPrev = document.getElementById("felliniPrev");
	
	var jkNext = document.getElementById("joe-koolsNext");
	var jkPrev = document.getElementById("joe-koolsPrev");
	
	var rcNext = document.getElementById("runt-clubNext");
	var rcPrev = document.getElementById("runt-clubPrev");

	var arlbClose = document.getElementById("andreslbClose");
	var fklbClose = document.getElementById("fellinilbClose");
	var jklbClose = document.getElementById("joe-koolslbClose");
	var rclbClose = document.getElementById("runt-clublbClose");

	var imgIndex;

	// FUNCTIONS

	function openIframe(open, close, e, i, j, k){
		open.onclick = function(){
			e.className = "tour-active";
			i.className = "tour-inactive";
			j.className = "tour-inactive";
			k.className = "tour-inactive";
		};

		close.onclick = function(){
			e.className = "tour-inactive";
		};
	}

	function openLB(array, index, close, img, next, prev, e, i, j, k){
		
		array[index].onclick = function(){
			lb.className = "lb-active";
			e.className = "lb-active";
			i.className = "lb-inactive";
			j.className = "lb-inactive";
			k.className = "lb-inactive";
			img.src = array[index].children[1].src;
			console.log(index);
			return imgIndex = index;
		};

		next.onclick=function() {
			imgIndex++;
			if(imgIndex > array.length - 1){
				imgIndex=0;
				img.src = array[imgIndex].children[1].src;
			} else {
				img.src = array[imgIndex].children[1].src;
			}
			console.log(imgIndex);
		}
	
		prev.onclick =function() {
			imgIndex--;
			if (imgIndex < 0) {
				imgIndex = array.length - 1;
				img.src = array[imgIndex].children[1].src;
			} else {
				img.src = array[imgIndex].children[1].src;
			}
			console.log(imgIndex);
		}	

		close.onclick = function(){
			lb.className = "lb-inactive";
			e.className = "lb-inactive";
		};
	}

	// CALLS

	openIframe(arOpen, arClose, andres, fellini, joeKools, runtClub);
	openIframe(fkOpen, fkClose, fellini, joeKools, runtClub, andres);
	openIframe(jkOpen, jkClose, joeKools, runtClub, andres, fellini);
	openIframe(rcOpen, rcClose, runtClub, andres, fellini, joeKools);

	openLB(arGal.children, 0, arlbClose, arImg, arNext, arPrev, arLb, fkLb, jkLb, rcLb);
	openLB(arGal.children, 1, arlbClose, arImg, arNext, arPrev, arLb, fkLb, jkLb, rcLb);
	openLB(arGal.children, 2, arlbClose, arImg, arNext, arPrev, arLb, fkLb, jkLb, rcLb);
	openLB(arGal.children, 3, arlbClose, arImg, arNext, arPrev, arLb, fkLb, jkLb, rcLb);

	openLB(fkGal.children, 0, fklbClose, fkImg, fkNext, fkPrev, fkLb, jkLb, rcLb, arLb);
	openLB(fkGal.children, 1, fklbClose, fkImg, fkNext, fkPrev, fkLb, jkLb, rcLb, arLb);
	openLB(fkGal.children, 2, fklbClose, fkImg, fkNext, fkPrev, fkLb, jkLb, rcLb, arLb);
	openLB(fkGal.children, 3, fklbClose, fkImg, fkNext, fkPrev, fkLb, jkLb, rcLb, arLb);

	openLB(jkGal.children, 0, jklbClose, jkImg, jkNext, jkPrev, jkLb, rcLb, arLb, fkLb);
	openLB(jkGal.children, 1, jklbClose, jkImg, jkNext, jkPrev, jkLb, rcLb, arLb, fkLb);
	openLB(jkGal.children, 2, jklbClose, jkImg, jkNext, jkPrev, jkLb, rcLb, arLb, fkLb);
	openLB(jkGal.children, 3, jklbClose, jkImg, jkNext, jkPrev, jkLb, rcLb, arLb, fkLb);
	
	openLB(rcGal.children, 0, rclbClose, rcImg, rcNext, rcPrev, rcLb, arLb, fkLb, jkLb);
	openLB(rcGal.children, 1, rclbClose, rcImg, rcNext, rcPrev, rcLb, arLb, fkLb, jkLb);
	openLB(rcGal.children, 2, rclbClose, rcImg, rcNext, rcPrev, rcLb, arLb, fkLb, jkLb);
	openLB(rcGal.children, 3, rclbClose, rcImg, rcNext, rcPrev, rcLb, arLb, fkLb, jkLb);

}

