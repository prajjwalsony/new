function updateSize() {
    let vh = window.innerHeight;
    let vw = window.innerWidth;

    var root = document.documentElement;

    if(vh > vw){
        root.style.setProperty('--w', vw + "px");
        root.style.setProperty('--h', (1.5*vw) + "px");
    }

    else if(vh < vw){
        root.style.setProperty('--h', vh + "px");
        root.style.setProperty('--w', (vh / 1.5) + "px");
    }
}

// Call updateSize at the start
updateSize();

// Update the size when the window is resized
window.addEventListener('resize', updateSize);
