S.editor.dropmenu.add('.menu-bar .menu-item-website > .drop-menu > .menu', 'market', 'Market', '#icon-market', true, () => {
    //show market tab
    $('.editor .sections > .tab').addClass('hide');

    if ($('.tab.market-section').length == 0) {
        //create new content section
        $('.sections').append('<div class="tab market market-section">' +
            '<iframe src="localhost:7071" style="width:100%; height:100%; overflow-y:auto; overflow-x:hidden;" scrolling="yes"></iframe></div>');

        S.editor.resize.window();

        function focusTab() {
            //select tab & generate toolbar
            $('.tab.market-section').removeClass('hide');
            S.editor.filebar.update('Marketplace', 'icon-market', $('.tab.market-section .temp-toolbar').html());
           
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
S.svg.load('/editor/vendors/market/icons.svg');