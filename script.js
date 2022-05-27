
function start()	{

    var boxed = 3; 
    var righ = 0;   
    var speed = Math.floor(Math.random() * (20 - 25 + 1)) + 8;  
    var delbox = 164; 
    var tim = setInterval(animated,10); 
     
    $("button").css("opacity","0.5");
    $(".mainbutt").removeAttr("onclick");

 function animated() {
    var imgs = Math.floor(Math.random() * (7 - 1 + 1)) + 1; 
    var child3 = $(".tape:nth-child(3) img"); 
    var firS = $(".tape:first-child");
    var cons = righ - delbox;	 

 if (righ >= delbox) { 		
     firS.remove();			
      $("#boxes").append("<li class='tape'><img src='download (5).gif' alt="+imgs+" </li>");

          righ = cons + speed; 
      $(".tape").css("right",righ + "px");
     boxed++; // Считаем кол-во блоков		
} else {
    if(speed <= 2) {
        speed -= 0.003;
    } else if (speed <= 6) {
        speed -= 0.007;
    } else {
           speed -= 0.02;
 }
    righ += speed;
     $(".tape").css("right",righ + "px");
 }
 if (speed <= 0) {
   clearInterval(tim);
      $(".tape").animate({right: "95px"},2400);
    $(".addimg img").attr("src"	,"img/20181001_"+child3.attr("alt")+".png");
  setTimeout(swi,2500);
 }
 
}
}
function swi() {
     var nnu = $(".tape:nth-child(3) img").attr("alt");

     $(".mainbutt").attr("onclick","start()");
      $(".blscreen").toggle(400);
      $("button").css("opacity","1");	

         switch(nnu) {
        case "1":
            $(".winblock h4").text("попробуй ещё)");
            $(".winblock span").text("0р");
        break;
         case "2":
            $(".winblock h4").text("мало, но приятно)");
            $(".winblock span").text("10р");
        break;

         case "3":
            $(".winblock h4").text("мало, но приятно)");
            $(".winblock span").text("40р");
        break;
         case "4":
            $(".winblock h4").text("нормально");
            $(".winblock span").text("50р");
        break;
         case "5":
            $(".winblock h4").text("нормально");
            $(".winblock span").text("60р");
        break;
         case "6":
            $(".winblock h4").text("нормально");
            $(".winblock span").text("70р");
        break;
         case "7":
            $(".winblock h4").text("нормально");
            $(".winblock span").text("80р");
        break;
         case "8":
            $(".winblock h4").text("почти....");
            $(".winblock span").text("90р");
        break;
         case "9":
            $(".winblock h4").text("супер приз");
            $(".winblock span").text("100р");
        break;

    }
}
$(function () {
    $("span").click(function () {
         $(".opn").toggle(300);
});
$(".close,.winbutt").click(function () {
    $(".blscreen").toggle(400);
})
});