console.log(window.innerWidth);

function onResize(){
    let bubble = document.getElementById('bubble-set');
    let share = document.getElementById('share-icon-container');

    let windowWidth = window.innerWidth;
    if (windowWidth > 1000){
    
        // Bubble margin adjust
        let bubble_width = bubble.offsetWidth;
        let margin_adjust = -bubble_width/2;
    
        let number = `${margin_adjust}px`;
    
        bubble.style.marginRight = number;
    
        // Share icon margin adjust
        let share_width = share.offsetWidth;
        let share_adjust = -share_width/2;
    
        let share_number = `${share_adjust}px`;
    
        share.style.marginRight = share_number;
    } else if(windowWidth <= 1000){
        bubble.style.marginRight = 0;
        share.style.marginRight = 0;
    }
}


// Share button click event
var bubbleSet = document.getElementById("bubble-set");

var shareButton = document.getElementById("share-icon-container");


function onClick() {
    if(bubbleSet.className == 'bubble'){
        bubbleSet.className = 'bubble-toggle';
    } else if(bubbleSet.className == 'bubble-toggle'){
        bubbleSet.className = 'bubble';
    }
}

