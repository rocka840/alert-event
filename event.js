$(start);

function start(){
    $("#btn1").click(action);
}

function action(){
    alert("HTML: " + $("#text").html());
}