var Speed = 50;
var Drift = 50;
var enemySpeed = randomIntFromInterval(45,68);
var enemyDrift = randomIntFromInterval(47,53);
var enemySpeed2 = randomIntFromInterval(45,68);
var enemyDrift2 = randomIntFromInterval(47,53);
$(document).keydown(function(e) {
    switch(e.which) {
      case 37: // left
        $('#car1').animate({
        'left' : '-='+Speed+"px" //moves right
        }, 'fast', 'linear');

        $('#car2').animate({
        'left' : '-='+enemySpeed+"px"
        }, 'fast', 'linear');
        
        $('#car3').animate({
        'left' : '-='+enemySpeed2+"px"
        }, 'fast', 'linear');
      break;

      case 38: // up
  $("#car1").css('transform','rotate(30deg)');
        $('#car1').animate({
        'top' : '-='+Drift+"px"
        }, 'fast', 'linear');
        
        $('#car2').animate({
        'top' : '-='+enemyDrift+"px"
        }, 'fast', 'linear');
        
        $('#car3').animate({
        'top' : '-='+enemyDrift2+"px"
        }, 'fast', 'linear');
      break;

        case 39: // right
        $('#car1').animate({
        'left' : '+='+Speed+"px" //moves right
        }, 'fast', 'linear');
        
        $('#car2').animate({
        'left' : '+='+enemySpeed+"px"
        }, 'fast', 'linear');
        
        $('#car3').animate({
        'left' : '+='+enemySpeed2+"px"
        }, 'fast', 'linear');
        break;

        case 40: // down
  $("#car1").css('transform','rotate(-30deg)');
        $('#car1').animate({
        'top' : '+='+Drift+"px"
        }, 'fast', 'linear');
        
        $('#car2').animate({
        'top' : '+='+enemyDrift+"px"
        }, 'fast', 'linear');
        
        $('#car3').animate({
        'top' : '+='+enemyDrift2+"px"
        }, 'fast', 'linear');
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

    function collision($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
        //if it is not colliding, make div2 background green

        return false;
      } 
      else {  
        //if it is colliding, make div2 background yellow
        $("#wall").css("background","black");
        return true;
      }
    }

window.setInterval(function() {
    $('#result').text(collision($('#wall'), $('#car1')));
}, 200);