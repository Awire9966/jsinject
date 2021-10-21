function injectjs() {
  var urlb = document.getElementById("urlbox")  
  var window = window.open(urlb.value, 'Injected', 'scrollbars=1,height='+screen.availHeight+',width='+screen.availWidth);
   
   var codebox = document.getElementById("codebox")
   
    window.document.write("<script type=\"text/javascript\">"+codebox.value+"</script>");
}
