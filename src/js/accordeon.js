const measureWidth = (item) => {
    let reqItemWidth = 0;
    
    
    const screenWidth = $(window).width();
    const list = item.closest(".products-menu");
    const items = $(".products-menu__item")
    
    
    const titleBlocks = list.find(".products-menu__title");
    const titleWidth = titleBlocks.width();
    
    const isTablet = window.matchMedia('(max-width: 768px)').matches;
    const isPhone = window.matchMedia('(max-width: 480px)').matches;
    
    const textContainer = item.find(".products-menu__container");
    const paddingLeft = parseInt(textContainer.css('padding-left'));
    const paddingRight = parseInt(textContainer.css('padding-right'));
    
    const itemNumber = items.index(item) + 1;
    
    if (isPhone) {
        reqItemWidth = screenWidth - titleWidth;
        let left = titleWidth * (titleBlocks.length - itemNumber);
        item.css({ "left": left });
    }
    else if (isTablet) {
        reqItemWidth = screenWidth - titleWidth * titleBlocks.length;
    }
    else {
    
        reqItemWidth = ((screenWidth * 0.5) - titleWidth * titleBlocks.length) > 530
        ? 530
        : (screenWidth * 0.5) - titleWidth;
    }
    
    return {
        container: reqItemWidth,
        textContainer: reqItemWidth - paddingLeft - paddingRight,
    }
    }
    
    const closeEveryAccoItem = list => {
    const items = list.find(".products-menu__item");
    const content = list.find(".products-menu__content");
    
    items.css({ "left": 0 });
    
    items.removeClass('active');
    content.width(0);
    }
    
    const openAccoItem = (item) => {
    const content = item.find(".products-menu__content");
    const reqWidth = measureWidth(item);
    const textBlock = item.find(".products-menu__container")
    
    item.addClass('active')
    
    content.width(reqWidth.container);
    
    textBlock.width(reqWidth.textContainer);
    }
    
    $(".products-menu__title").on('click', (e) => {
    e.preventDefault();
    const target = $(e.currentTarget);
    const item = target.closest(".products-menu__item");
    const content = item.find(".products-menu__content");
    const container = content.find(".products-menu__container");
    const list = $(".products-menu");
    const isOpened = item.hasClass('active')
    
    if (isOpened) {
        closeEveryAccoItem(list);
    }
    else {
        closeEveryAccoItem(list);
        openAccoItem(item);
    }
    })
    
    $(".products-menu__close").on('click', (e) => {
    e.preventDefault();
    closeEveryAccoItem($(".products-menu"));
    })