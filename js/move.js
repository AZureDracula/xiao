let main_box = document.querySelector("#event-list");
let right_move = document.querySelector("#right-move");
let left_move = document.querySelector("#left-move");

let pos = 825;
let lock = false;

function box_move(direction = 1) {
    if (lock) {
        return;
    }
    main_box.style.transition = "all 0.5s linear";
    lock = true;
    pos += direction * 275;

    main_box.style.right = pos + "px";
    if (pos == 0) {
        setTimeout(function() {
            pos = 1650;
            main_box.style.transition = "all 0s linear";
            main_box.style.right = pos + "px";
        }, 510);
    } else if (pos == 2200) {
        setTimeout(function() {
            pos = 550;
            main_box.style.transition = "all 0s linear";
            main_box.style.right = pos + "px";
        }, 510);
    }
    lock = false;
}

right_move.addEventListener("click", function() {
    box_move(1);
});
left_move.addEventListener("click", function() {
    box_move(-1);
});

setInterval(function() {
    box_move(1);
}, 2000)