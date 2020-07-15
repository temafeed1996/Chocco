const ctrlList = document.querySelector('.reviews__switcher');
const ctrlItems = document.querySelectorAll('.interactive-avatar');
const reviewItems = document.querySelectorAll('.reviews__display-inner');


[].forEach.call(ctrlItems, (el) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        let ctrlItem = e.target.closest('li');

        for (let i = 0; i < ctrlItems.length; i++) {
            ctrlItems[i].classList.remove('interactive-avatar--active');
    
            if (ctrlItems[i] === ctrlItem) {
                reviewItems[i].classList.add('reviews__display-inner--active');
                
            } else {
                reviewItems[i].classList.remove('reviews__display-inner--active');
            }
        }
        ctrlItem.classList.add('interactive-avatar--active');

    })
});