
  let cat = document.querySelector("#cat");
  let hat = document.querySelector("#hat");

  let angle = 0;
  let lastTime = null;
  function animate(time) {
    if (lastTime != null) angle += (time - lastTime) * 0.001;
    lastTime = time;
    
    zmienna1=(Math.sin(angle) * 40 + 40)
    zmienna2=(Math.cos(angle) * 200 + 230)

    cat.style.top = zmienna1 + "px";
    cat.style.left = zmienna2 + "px";
    

    hat.style.top =  zmienna1+(Math.sin(angle)*50) + "px";
    hat.style.left = zmienna2+(Math.sin(angle)*50) + "px";

    

    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);