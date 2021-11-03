canvas=document.getElementById("mycanvas")
ctx=canvas.getContext("2d")
mouseevent="empty"
widthofline=1

color="Yellow"
canvas.addEventListener("mousedown",mymousedown)
function mymousedown(e){
    color=document.getElementById("input").value
    widthofline=document.getElementById("inputwidth").value
    mouseevent="mousedown" 
}
canvas.addEventListener("mousemove",mymousemove)
function mymousemove(e){
   currentpositionofx=e.clientX-canvas.offsetLeft
   currentpositionofy=e.clientY-canvas.offsetTop
   if(mouseevent=="mousedown"){

   
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=widthofline
    ctx.arc(currentpositionofx,currentpositionofy,20,0,2*Math.PI)
    
    ctx.stroke()}


}
canvas.addEventListener("mouseup",mymouseup)
function mymouseup(e){
    mouseevent="mouseup"
}
canvas.addEventListener("mouseleave",mymouseleave)
function mymouseleave(e){
    mouseevent="mouseleave"
}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}