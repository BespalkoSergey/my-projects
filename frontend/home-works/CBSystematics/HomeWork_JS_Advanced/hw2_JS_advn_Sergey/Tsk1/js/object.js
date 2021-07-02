var obj ={};
obj.p =  document.getElementsByTagName("p");
obj.reWrite = function(){
    for (element of this.p) {
        element.textContent = "PARAGRAPH";
      }
}
obj.reWrite();