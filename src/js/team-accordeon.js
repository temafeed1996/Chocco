const teamItems = document.querySelectorAll('.team__item');

[].forEach.call(teamItems, function(el) {
    el.addEventListener('click', function() {

        if (!el.classList.contains('team__item--active')) {
            for (let i = 0; i < teamItems.length; i++) {
                teamItems[i].classList.remove('team__item--active')
            }
            el.classList.add('team__item--active');
        } else {
            el.classList.remove('team__item--active');
        }
    });
});