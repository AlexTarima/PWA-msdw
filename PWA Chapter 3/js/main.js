let installButton;
installButton=document.getElementById('installButton');
installButton.onclick=doInstall;

// Your code here was weirdly formatted
// something similar to
// let installButtonedinstallButton=document.ge...
// Now your install button is visible when on index.html

let deferredPrompt;
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt=event;
    installButton.style.display='block';
});
function doInstall() {
    installButton.style.display='none';
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((res)=>{
        if (res.outcome==='accepted') {
            console.log('doInstall:accepted');
        } else {
            console.log('doInstall: declined');
        }
        deferredPrompt=null
    });
}
var urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('source') ==='pwa') {
    console.log('Launched as PWA')
    let theTitle=document.getElementById('title');
    theTitle.innerHTML=theTitle.innerHTML+' (PWA)';
}

