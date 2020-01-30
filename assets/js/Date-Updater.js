function displayTime() {
    $('#date').html(moment().format('dddd, MMMM Do'));
}
function startTimer() {
        displayTime()
    timer = setInterval(function(){
        displayTime()
    }, 1000);
}
startTimer();
var start = 9;
var hours = 8;