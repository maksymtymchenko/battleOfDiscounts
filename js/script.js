let links = document.getElementsByClassName('header_nav-link');
console.log(links)

for (let i = 0; i < links.length; i++) {

    links[i].addEventListener("click", (e) => {
        let current = e.currentTarget;
        console.log(current)
        for (let i = 0; i < links.length; i++) {

            if (current != links[i]) {
                links[i].classList.remove("active_nav");
            } else if (links[i].classList.contains("active_nav")) {
                links[i].classList.remove("active_nav")
            } else {
                links[i].classList.add("active_nav");
            }
        }

    })
}