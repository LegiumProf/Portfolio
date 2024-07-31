$(document).ready(function(){
    $.fn.animate_Text = function() {
     var string = this.text();
     return this.each(function(){
      var $this = $(this);
      $this.html(string.replace(/./g, '<span class="new">$&</span>'));
      $this.find('span.new').each(function(i, el){
       setTimeout(function(){ $(el).addClass('div_opacity'); }, 90 * i);
      });
     });
    };
    $('#welcome-title-1').show();
    $('#welcome-title-1').animate_Text();
   });


function timer() {
    $(document).ready(function(){
        $.fn.animate_Text = function() {
         var string = this.text();
         return this.each(function(){
          var $this = $(this);
          $this.html(string.replace(/./g, '<span class="new">$&</span>'));
          $this.find('span.new').each(function(i, el){
           setTimeout(function(){ $(el).addClass('div_opacity'); }, 90 * i);
          });
         });
        };
        $('#welcome-title-2').show();
        $('#welcome-title-2').animate_Text();
       });
    
}  
setTimeout(timer, 4000)
