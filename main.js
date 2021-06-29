// Bubble margin adjust
let bubble = document.getElementById('bubble-set');
let bubble_width = bubble.offsetWidth;
let margin_adjust = -bubble_width/2;

let number = `${margin_adjust}px`;

bubble.style.marginRight = number;

// Share icon margin adjust
let share = document.getElementById('share-icon-container');
let share_width = share.offsetWidth;
let share_adjust = -share_width/2;

let share_number = `${share_adjust}px`;

share.style.marginRight = share_number;

