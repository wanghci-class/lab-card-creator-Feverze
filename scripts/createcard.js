var previewBtn = document.getElementById('previewBtn');
previewBtn.addEventListener('click', function() {
    var to = document.getElementById('to').value;
    var from = document.getElementById('from').value;
    var title = document.getElementById('title').value;
    var subtitle = document.getElementById('subtitle').value;
    var msg = document.getElementById('message').value;
    document.querySelector(".title-text").textContent = title;
    document.querySelector(".subtitle-text").textContent = subtitle;
    document.querySelector(".message-text").textContent = msg;
    document.querySelector(".to-text").textContent = to;
    document.querySelector(".from-text").textContent = from;
});

var submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function() {
    var to = document.getElementById('to').value;
    var from = document.getElementById('from').value;
    var title = document.getElementById('title').value;
    var subtitle = document.getElementById('subtitle').value;
    var msg = document.getElementById('message').value;

    var array = localStorage.getItem("cards");
    if (array == null) {
        array = [];
    } else {
        array = JSON.parse(array);
    }
    var cards = {
        to: to,
        from: from,
        title: title,
        subtitle: subtitle,
        message: msg
    };
    array.push(cards);
    localStorage.setItem("cards", JSON.stringify(array));

});
