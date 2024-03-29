﻿S.editor.dropmenu.add('.menu-bar .menu-item-website > .drop-menu > .menu', 'market', 'Marketplace', '#icon-market', true, () => {
    //show market tab
    var host = S.editor.env == 'prod' ? 'https://screenshots.sabercms.com' : 'http://localhost:7071/';
    $('.editor .sections > .tab').addClass('hide');

    if ($('.tab.market-section').length == 0) {
        //create new content section
        $('.sections').append('<div class="tab market market-section">' +
            '<iframe src="' + host + '" style="width:100%; height:100%; overflow-y:auto; overflow-x:hidden;" scrolling="yes"></iframe></div>');

        S.editor.resize.window();

        //set up CORS commands
        window.market = {
            userId: null,
            username: null, 
            load: function (userId, username) {
                window.market.userId = userId;
                window.market.username = username;
                focusTab();
            }
        }

        var toolbarHtml = '';

        //set up postMessage listener
        window.addEventListener("message", (e) => {
            if (host.indexOf(e.origin) == 0 && e.data && e.data.indexOf('marketplace|') == 0) {
                var data = JSON.parse(e.data.replace('marketplace|', ''));
                window.market.load(data.userId, data.username);
                var iframe = $('.tab.market.market-section iframe')[0].contentWindow;
                iframe.postMessage('saber', '*');
            }
        }, false);

        function focusTab() {
            //select tab & generate toolbar
            $('.tab.market-section').removeClass('hide');
            if (toolbarHtml == '') {
                S.ajax.post('Marketplace/Toolbar', {}, (response) => {
                    toolbarHtml = response;
                    renderTab();
                });
            } else {
                renderTab();
            }
        }

        function renderTab() {
            S.editor.filebar.update('Marketplace', 'icon-market', toolbarHtml);
            var usermenu = $('.toolbar.for-tabs .user-menu');
            var nousermenu = $('.toolbar.for-tabs .nouser-menu');
            if (window.market.userId != null) {
                usermenu.show();
                nousermenu.hide();
            } else {
                usermenu.hide();
                nousermenu.show();
            }

            //login button
            $('.nouser-menu .tab-login').on('click', () => {
                $('.tab.market-section iframe').attr('src',host + 'login');
            });

            //upload button
            $('.user-menu .tab-upload').on('click', () => {
                $('.tab.market-section iframe').attr('src', host + 'dashboard/upload/website-template');
            });

            //dashboard button
            $('.user-menu .tab-dashboard').on('click', () => {
                $('.tab.market-section iframe').attr('src', host + 'dashboard');
            });

            //settings button
            $('.user-menu .tab-settings').on('click', () => {
                $('.tab.market-section iframe').attr('src', host + 'user/settings');
            });

            //homepage button
            $('.user-menu .tab-home').on('click', () => {
                $('.tab.market-section iframe').attr('src', host);
            });
        }

        //create tab
        S.editor.tabs.create('Marketplace', 'market-section', { removeOnClose: true },
            () => { //onfocus
                focusTab();
            },
            () => { //onblur 
            },
            () => { //onsave 
            }
        );
    } else {
        $('.tab.market-section').removeClass('hide');
        S.editor.tabs.select('dataset-market-section');
    }
});

//add icons to the editor
S.svg.load('/editor/vendors/marketplace/icons.svg');