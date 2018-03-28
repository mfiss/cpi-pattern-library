  window.addEventListener("load", function(){

$('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

               duration: 5000,
               easing: 'swing',
               step: function() {
                 $this.text(commaSeparateNumber(Math.floor(this.countNum)));
               },
               complete: function() {
                 $this.text(commaSeparateNumber(this.countNum));
               }

        });
  });




    function commaSeparateNumber(val) {
      while (/(\d+)(\d{3})/.test(val.toString())) {
        val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
      }
      return val;
    }
  });


  window.addEventListener("load", function(){
    var amount = document.getElementById('amount');
  var start = new Date("January 1, 2018 00:00:00").getTime();
  var current;
  update();

  function update() {
    var current = (new Date().getTime() - start)/1000*7.61;
    amount.innerHTML = formatMoney(current);
  }

  setInterval(update,1);

  function formatMoney(amount) {
    var dollars = Math.floor(amount).toString().split('');
    var cents = (Math.round((amount%1)*100)/100).toString().split('.')[1];
    if(typeof cents == 'undefined'){
      cents = '00';
    }else if(cents.length == 1){
      cents = cents + '0';
    }
    var str = '';
    for(i=dollars.length-1; i>=0; i--){
      str += dollars.splice(0,1);
      if(i%3 == 0 && i != 0) str += ',';
    }
    return '$' + str;
  };
});