var mobileNavbar = document.getElementsByClassName("header__navbar--mobile");

function openMobileNav() {
    //document.querySelector('.overlay').style.display = "initial";
    mobileNavbar[0].style.width = "85%";
};

function closeMobileNav() {
	//document.querySelector('.overlay').style.display = "none";
    mobileNavbar[0].style.width = "0px";
}