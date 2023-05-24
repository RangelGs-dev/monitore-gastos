export default function munuCollapsed() {
    const openBtn = document.querySelector('.openBtn');
    const closeBtn = document.querySelector('.closeBtn');

    function openNav() {
        document.querySelector(".mySidebar").style.width = "250px";
        //document.querySelector(".main-container").style.marginLeft = "250px";
        document.querySelector(".main").style.display = "none";
    };
    openBtn.addEventListener('click', openNav);

    
    
    function closeNav() {
        document.querySelector(".mySidebar").style.width = "0";
        document.querySelector(".main-container").style.marginLeft = "0";
        document.querySelector(".main").style.display = "block";
    };
    closeBtn.addEventListener('click', closeNav);
};