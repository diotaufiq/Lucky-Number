document.getElementById("login").addEventListener("submit", function(login) {
    login.preventDefault()
})
function register() {
    let nama = document.getElementById("username").value
    localStorage.setItem("username", nama)

    window.location.href='/main-page/index.html'
    
}