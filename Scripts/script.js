$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    var selectMenu = $(".menu-main .menu-navigation-container");
    var selectCloseMenu = $(".menu-main .close-menu");
    var selectMask = $(".menu-main .mask");
    var selectCart = $(".menu-main .search-navigation-container");

    //show menu nav
    $(".menu-main .toggler-menu").click(function () {
        selectMenu.addClass("is-active");
        selectCloseMenu.removeClass("d-none");
        selectMask.removeClass("d-none");
    });

    //show cart
    $(".menu-main .toggler-search").click(function () {
        selectCart.addClass("is-active");
        selectCloseMenu.removeClass("d-none");
        //selectMask.removeClass("d-none");
    });
    //close menu and cart
    selectCloseMenu.click(function () {
        closeMenu();
    });

    selectMask.click(function () {
        closeMenu();
    });

    function closeMenu() {
        if (selectMenu.hasClass("is-active")) {
            selectMenu.removeClass("is-active");
        } else {
            selectCart.removeClass("is-active");
        };
        selectMask.addClass("d-none");
        selectCloseMenu.addClass("d-none");
    }
});