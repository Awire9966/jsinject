function injectjs() {
  var urlb = document.getElementById("urlbox")  
  var window = window.open('', 'Injected', 'scrollbars=1,height='+screen.availHeight+',width='+screen.availWidth);
   
   var codebox = document.getElementById("codebox");
   window.url = urlb.value;
  setTimeout(function(){
    window.document.write("<script>"+codebox.value+"</script>");
}, 2000);
    
}
