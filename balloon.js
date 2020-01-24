<!doctype html>
<p>🎈</p>
<script>
function handlingArrows(event) {
  if (event.key == "ArrowUp") {
    if (size>90) {
      balloon.textContent="💥"
      document.body.removeEventListener("keydown",handlingArrows)
    }
    size += (0.1 * size)
    balloon.style.fontSize = size + "px"
    event.preventDefault()
  } else if (event.key == "ArrowDown") {
    size -= (0.1 * size)
    balloon.style.fontSize = size + "px"
    event.preventDefault()
  }
}

let balloon = document.querySelector("p")
let size = 20
balloon.style.fontSize = size
document.body.addEventListener("keydown", handlingArrows)
</script>