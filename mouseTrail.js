<style>
  .dot { /* className for the trail elements */
    position: absolute;
    height: 6px; width: 6px;
    border-radius: 3px;
    background: teal;
  }
  body {
    height: 300px;
  }
</style>

<script>
let dots = []
for (let i = 0; i < 10; i++) {
  let dot = document.createElement("div");
  dot.className = "dot";
  document.body.appendChild(dot);
  dots.push(dot)
}
let presentDot = 0
window.addEventListener("mousemove", event => {
  let dot = dots[presentDot]
  dot.style.left = (event.pageX - 4) + "px";
  dot.style.top = (event.pageY - 4) + "px";
  presentDot= (presentDot+1)%dots.length
})
</script>
