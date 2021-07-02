let MyQuery = {};
MyQuery.FindClass = function(element){
    this.class = document.getElementsByClassName(`${element}`);
    return console.log(this.class);
}

MyQuery.FindClass("redButton");