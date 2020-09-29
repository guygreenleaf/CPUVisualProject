function startEngine(){
    console.log('Starting...');
}

startEngine();

let startLoad = () => location.href = "startSelector.html";

let whatsThis = () => location.href = "whatsThis.html";

let homeMenu = () => location.href = "index.html";

$(function() {
    $('body').removeClass('fade-out');
});

