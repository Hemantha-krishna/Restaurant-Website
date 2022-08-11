//login
document.getElementById("login").addEventListener("click", ()=> {
    document.querySelector(".popup").style.display = "flex";
});
document.querySelector(".close").addEventListener("click", ()=> {
    document.querySelector(".popup").style.display = "none";
});
//signup
document.getElementById("signup").addEventListener("click", ()=> {
    document.querySelector(".popup2").style.display = "flex";
});
document.querySelector(".close2").addEventListener("click", ()=> {
    document.querySelector(".popup2").style.display = "none";
});
// Previous Orders
document.getElementById("prev_order").addEventListener("click",()=>
{
    document.querySelector(".popup3").style.display="flex";
});
document.querySelector(".close3").addEventListener("click", ()=> {
    document.querySelector(".popup3").style.display = "none";
});



