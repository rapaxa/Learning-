window.addEventListener('DOMContentLoaded', () => {
    function showTab(i){
        i.classList.add('active')
    }
    function tabs() {
        const tabsParent = document.querySelector('.menu')
        tabsParent.addEventListener('click', function (event) {

            const tab = document.querySelectorAll('.menu__item')
            const target = event.target;
            if (target && target.classList.contains('menu__item')) {
                tab.forEach((i, index) => {
                    if (target === i) {
                        showTab(i)
                    }else{
                        i.classList.remove('active')
                    }
                })
            }
        });
    }


    tabs()

})


