
function show(name){
    name.classList.remove('hide')
    name.classList.add('active')
}
function hide(name){
    name.classList.remove('active')
    name.classList.add('hide')
}
function tabMenu(){
    const menuHeader = document.querySelectorAll(".menu__item")
    const menu = document.querySelector('.menu')
    const target = event.target;
    if(target && target.classList.contains('menu__item')) {
        menuHeader.forEach((item,i) => {
            item.addEventListener('click', (e) => {
                if (e.target === item) {
                    hide(item)
                } else {
                    show(item)

                }

            })

        })
    }
    }
    tabMenu()

