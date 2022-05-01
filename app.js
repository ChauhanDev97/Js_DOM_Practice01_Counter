let count = 0;

const btns = document.querySelectorAll('.btn');

const val = document.querySelector("#val");

btns.forEach(function(btn){
    btn.addEventListener("click", (e) => {
        const c = e.currentTarget.classList;
        if(c.contains('decrease')){
            count --;
        }

        else if(c.contains('increase')){
            count ++;
        }

        else {
            count = 0
        }

        if (count > 0){
            val.style.color = "green"
        }

        if (count < 0){
            val.style.color = "red"
        }

        if (count === 0 ) {
            val.style.color = "#222"
        }
        val.textContent = count;
    })
})