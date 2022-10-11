const menuHeader = document.querySelectorAll(".menu__item")
const menu = document.querySelector('.menu')
function hideTabContent() {
    menuHeader.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('active');
    });

}
function showTabContent(i = 0) {
    menuHeader[i].classList.remove('hide');
    menuHeader[i].classList.add('active');
}
function getActiveItem(name) {

        menu.addEventListener('click', function (event)  {
            const target = event.target;
            if (target && menu.classList.contains('active'))

            name.forEach(item => {
                if(event.target === item) {
                    hideTabContent()
                    showTabContent()

                }
        })

    })
}

getActiveItem(menuHeader)

