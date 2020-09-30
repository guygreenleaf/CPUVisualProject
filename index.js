function startEngine(){
    console.log('Starting...');
}

startEngine();

let startLoad = () => location.href = "startSelector.html";

let whatsThis = () => location.href = "whatsThis.html";

let homeMenu = () => location.href = "index.html";

let keyboardPress = () => location.href = "keyboardPress.html"

let contactLoad = () => location.href = "contact.html";

$(function() {
    $('body').removeClass('fade-out');
});
