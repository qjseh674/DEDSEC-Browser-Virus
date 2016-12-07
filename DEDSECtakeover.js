/**
 * Created by nathan.renfro490 on 12/1/16.
 */
//setTimeout(Element(), 7500);
var ELEMENT_ARRAY = [];
(function() {
    var elements = document.getElementsByClassName("DragElement");
    for(var i = 0; i < elements.length; i++) ELEMENT_ARRAY.push(new Element(elements[i]));})();

function Element(element) {
    this.element = element;
    this.mousex;
    this.mousey;
    this.active = false;
    this.open = function() {
        this.element.style.display = "inline-block";};
    this.close = function() {
        this.element.style.display = "none";};
    this.createExitButton = function() {
        var button = document.createElement("div");
        button.style.display = "inline-block";
        button.style.float = "right";
        button.style.margin = "2px";
        button.style.width = "20px";
        button.style.height = "20px";
        button.style.backgroundColor = this.element.getAttribute("data-exitButtonColor") || "#ccc";
        button.onmouseover = function() {button.style.backgroundColor = this.element.getAttribute("data-exitButtonHoverColor") || "#bbb"}.bind(this);
        button.onmouseleave = function() {button.style.backgroundColor = this.element.getAttribute("data-exitButtonColor") || "#ccc"}.bind(this);
        button.style.textAlign = "center";
        button.style.fontFamily = "arial";
        button.style.color = this.element.getAttribute("data-exitButtonTextColor") || "#eee";
        button.innerHTML = "&times;";
        button.onmousedown = function(){this.close();}.bind(this);
        return button;};
    this.initialize = function() {
        var head = document.createElement("div");
        head.style.width = "100%";
        head.style.height = "24px";
        head.style.backgroundColor = this.element.getAttribute("data-frameColor") || "#eee";
        head.style.cursor = "pointer";
        head.innerHTML = this.element.getAttribute("data-title") || "";
        this.element.insertBefore(head, this.element.childNodes[0]);

        this.element.style.display = "inline-block";
        this.element.style.backgroundColor = this.element.getAttribute("data-color") || "white";
        this.element.style.border = "solid 1px black";

        this.element.style.position = "absolute";
        this.element.style.left = this.element.getAttribute("data-x") || (Math.floor(window.innerWidth / 2) - Math.floor(this.getCSSValue(this.element, "width") / 1.3)) + "px";
        this.element.style.top = this.element.getAttribute("data-y") || "32px";

        head.addEventListener("mousedown", function() {
            this.mousex = event.x - parseInt(this.element.style.left);
            this.mousey = parseInt(window.getComputedStyle(head).height) / 2;
            this.active = true;
            var body = document.getElementsByTagName("body")[0]; body.appendChild(this.element);}.bind(this),false);
        window.addEventListener("mouseup", function() {
            this.active = false;}.bind(this),false);
        window.addEventListener("mousemove", function() {
            if(this.active) {
                this.element.style.left = (event.x - this.mousex) + "px";
                this.element.style.top = Math.max((event.y - this.mousey), 0) + "px";
            }}.bind(this), false);};

    this.getCSSValue = function(element, property) {
        var value = window.getComputedStyle(element).getPropertyValue(property);
        if(isNaN(parseFloat(value))) {
            if(value.indexOf("%") != -1) {var parent = element.parentNode;
                var pvalue = this.getCSSValue(parent, property); value = parseFloat(value.slice(0, -1)) / 100;
                return value * pvalue;}} else {return parseFloat(value);}}; this.initialize();}


/*
          _____
         /\    \
        /::\____\
       /::::|   |
      /:::::|   |
     /::::::|   |
    /:::/|::|   |
   /:::/ |::|   |
  /:::/  |::|   | _____
 /:::/   |::|   |/\    \
/:: /    |::|   /::\____\
\::/    /|::|  /:::/    /
 \/____/ |::| /:::/    /
         |::|/:::/    /
         |::::::/    /
         |:::::/    /
         |::::/    /
         /:::/    /
        /:::/    /
        \::/    /
         \/____/
          _____
         /\    \
        /::\    \
       /::::\    \
      /::::::\    \
     /:::/\:::\    \
    /:::/__\:::\    \
   /::::\   \:::\    \
  /::::::\   \:::\    \
 /:::/\:::\   \:::\    \
/:::/  \:::\   \:::\____\
\::/    \:::\  /:::/    /
 \/____/ \:::\/:::/    /
          \::::::/    /
           \::::/    /
           /:::/    /
          /:::/    /
         /:::/    /
        /:::/    /
        \::/    /
         \/____/
      _____
     /\    \
    /::\    \
    \:::\    \
     \:::\    \
      \:::\    \
       \:::\    \
       /::::\    \
      /::::::\    \
     /:::/\:::\    \
    /:::/  \:::\____\
   /:::/    \::/    /
  /:::/    / \/____/
 /:::/    /
/:::/    /
\::/    /
 \/____/
          _____
         /\    \
        /::\    \
       /::::\    \
      /::::::\    \
     /:::/\:::\    \
    /:::/__\:::\    \
   /::::\   \:::\    \
  /::::::\   \:::\    \
 /:::/\:::\   \:::\    \
/:::/__\:::\   \:::\____\
\:::\   \:::\   \::/    /
 \:::\   \:::\   \/____/
  \:::\   \:::\    \
   \:::\   \:::\____\
    \:::\   \::/    /
     \:::\   \/____/
      \:::\    \
       \:::\____\
        \::/    /
         \/____/




          _____
         /\    \
        /::\    \
        \:::\    \
         \:::\    \
          \:::\    \
           \:::\    \
           /::::\    \
  ____    /::::::\    \
 /\   \  /:::/\:::\    \
/::\   \/:::/  \:::\____\
\:::\  /:::/    \::/    /
 \:::\/:::/    / \/____/
  \::::::/    /
   \::::/____/
    \:::\    \
     \:::\    \
      \:::\    \
       \:::\____\
        \::/    /
         \/____/
          _____
         /\    \
        /::\    \
       /::::\    \
      /::::::\    \
     /:::/\:::\    \
    /:::/__\:::\    \
    \:::\   \:::\    \
  ___\:::\   \:::\    \
 /\   \:::\   \:::\    \
/::\   \:::\   \:::\____\
\:::\   \:::\   \::/    /
 \:::\   \:::\   \/____/
  \:::\   \:::\    \
   \:::\   \:::\____\
    \:::\  /:::/    /
     \:::\/:::/    /
      \::::::/    /
       \::::/    /
        \::/    /
         \/____/




          _____
         /\    \
        /::\____\
       /:::/    /
      /:::/   _/___
     /:::/   /\    \
    /:::/   /::\____\
   /:::/   /:::/    /
  /:::/   /:::/   _/___
 /:::/___/:::/   /\    \
|:::|   /:::/   /::\____\
|:::|__/:::/   /:::/    /
 \:::\/:::/   /:::/    /
  \::::::/   /:::/    /
   \::::/___/:::/    /
    \:::\__/:::/    /
     \::::::::/    /
      \::::::/    /
       \::::/    /
        \::/____/
          _____
         /\    \
        /::\    \
       /::::\    \
      /::::::\    \
     /:::/\:::\    \
    /:::/__\:::\    \
   /::::\   \:::\    \
  /::::::\   \:::\    \
 /:::/\:::\   \:::\    \
/:::/  \:::\   \:::\____\
\::/    \:::\  /:::/    /
 \/____/ \:::\/:::/    /
          \::::::/    /
           \::::/    /
           /:::/    /
          /:::/    /
         /:::/    /
        /:::/    /
        \::/    /
         \/____/
      _____
     /\    \
    /::\    \
    \:::\    \
     \:::\    \
      \:::\    \
       \:::\    \
       /::::\    \
      /::::::\    \
     /:::/\:::\    \
    /:::/  \:::\____\
   /:::/    \::/    /
  /:::/    / \/____/
 /:::/    /
/:::/    /
\::/    /
 \/____/
          _____
         /\    \
        /::\    \
       /::::\    \
      /::::::\    \
     /:::/\:::\    \
    /:::/  \:::\    \
   /:::/    \:::\    \
  /:::/    / \:::\    \
 /:::/    /   \:::\    \
/:::/____/     \:::\____\
\:::\    \      \::/    /
 \:::\    \      \/____/
  \:::\    \
   \:::\    \
    \:::\    \
     \:::\    \
      \:::\    \
       \:::\____\
        \::/    /
         \/____/
          _____
         /\    \
        /::\____\
       /:::/    /
      /:::/    /
     /:::/    /
    /:::/____/
   /::::\    \
  /::::::\    \   _____
 /:::/\:::\    \ /\    \
/:::/  \:::\    /::\____\
\::/    \:::\  /:::/    /
 \/____/ \:::\/:::/    /
          \::::::/    /
           \::::/    /
           /:::/    /
          /:::/    /
         /:::/    /
        /:::/    /
        \::/    /
         \/____/
          _____
         /\    \
        /::\    \
        \:::\    \
         \:::\    \
          \:::\    \
           \:::\    \
           /::::\    \
  ____    /::::::\    \
 /\   \  /:::/\:::\    \
/::\   \/:::/  \:::\____\
\:::\  /:::/    \::/    /
 \:::\/:::/    / \/____/
  \::::::/    /
   \::::/____/
    \:::\    \
     \:::\    \
      \:::\    \
       \:::\____\
        \::/    /
         \/____/
          _____
         /\    \
        /::\____\
       /::::|   |
      /:::::|   |
     /::::::|   |
    /:::/|::|   |
   /:::/ |::|   |
  /:::/  |::|   | _____
 /:::/   |::|   |/\    \
/:: /    |::|   /::\____\
\::/    /|::|  /:::/    /
 \/____/ |::| /:::/    /
         |::|/:::/    /
         |::::::/    /
         |:::::/    /
         |::::/    /
         /:::/    /
        /:::/    /
        \::/    /
         \/____/
          _____
         /\    \
        /::\    \
       /::::\    \
      /::::::\    \
     /:::/\:::\    \
    /:::/  \:::\    \
   /:::/    \:::\    \
  /:::/    / \:::\    \
 /:::/    /   \:::\ ___\
/:::/____/  ___\:::|    |
\:::\    \ /\  /:::|____|
 \:::\    /::\ \::/    /
  \:::\   \:::\ \/____/
   \:::\   \:::\____\
    \:::\  /:::/    /
     \:::\/:::/    /
      \::::::/    /
       \::::/    /
        \::/____/





      _____
     |\    \
     |:\____\
     |::|   |
     |::|   |
     |::|   |
     |::|   |
     |::|   |
     |::|___|______
     /::::::::\    \
    /::::::::::\____\
   /:::/~~~~/~~
  /:::/    /
 /:::/    /
/:::/    /
\::/    /
 \/____/
         _______
        /::\    \
       /::::\    \
      /::::::\    \
     /::::::::\    \
    /:::/~~\:::\    \
   /:::/    \:::\    \
  /:::/    / \:::\    \
 /:::/____/   \:::\____\
|:::|    |     |:::|    |
|:::|____|     |:::|____|
 \:::\    \   /:::/    /
  \:::\    \ /:::/    /
   \:::\    /:::/    /
    \:::\__/:::/    /
     \::::::::/    /
      \::::::/    /
       \::::/    /
        \::/____/
          _____
         /\    \
        /::\____\
       /:::/    /
      /:::/    /
     /:::/    /
    /:::/    /
   /:::/    /
  /:::/    /      _____
 /:::/____/      /\    \
|:::|    /      /::\____\
|:::|____\     /:::/    /
 \:::\    \   /:::/    /
  \:::\    \ /:::/    /
   \:::\    /:::/    /
    \:::\__/:::/    /
     \::::::::/    /
      \::::::/    /
       \::::/    /
        \::/____/

*/

