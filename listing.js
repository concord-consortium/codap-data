$(document).ready(function () {

    function fetchObjList () {
        console.log ("in fetchObjList");
        var loc = "./sample_doc_map.json";
        $.ajax({
            url: loc,
            type: "GET",
            success: buildPage,
            error: function (xhr){
                alert(xhr.status);
            }
        })
    }

    function getCategories (obj){
        console.log("In getCategories");
        var categories_array=[];
        for (var i=0; i < obj.sample_docs.length; i++) {
            for (var j=0; j < obj.sample_docs[i].categories.length; j++) {
                var category_read = obj.sample_docs[i].categories[j];
                if (!categories_array.includes(category_read) ) {
                    categories_array.push(category_read);
                }
            }
        }
        return (categories_array);
    }

    function buildNavBar(categories){
        console.log("In buildNavBar, categories is: " + categories);
        var nav_bar = $(".nav-bar");
        var nav_bar_list = "<ul class='menu-h'>";
        var top_menu_items = [], sub_menu_items=[];
        var sub_to_main ={'sub':'', 'main':''};

        //create an array for the top level menu items
        for (var i=0; i<categories.length; i++) {
            if (categories[i].includes("/")) {
                var menu_item = categories[i].split("/");
                if (!top_menu_items.includes(menu_item[0])) {
                    top_menu_items.push(menu_item[0]);
                }
                if (!sub_menu_items.includes(menu_item[1])) {
                    sub_to_main['sub'] = menu_item[1];
                    sub_to_main['main'] = menu_item[0];
                    sub_menu_items.push(sub_to_main);
                }
            }
            else if (!top_menu_items.includes(categories[i])) {
                top_menu_items.push(categories[i])
            }
        }
        nav_bar.append(nav_bar_list);
        for (var j=0; j<top_menu_items.length; j++) {
            $('.menu-h').append("<li><a href='#" + top_menu_items[j] + "_list'>" + top_menu_items[j] + "</a></li>");
        }
        nav_bar.append("</ul>");
    }

    function buildListingDivs(categories) {
        console.log("In buildListingDivs");
        var category_headers=[];
        var cat_head='', cat_main_header='';
        var sub_cat='', cat_sub_header='';
        var listing_container = $("#listing_container");

        for (var i=0; i < categories.length; i++) {

            if (categories[i].includes("/")) {
                var menu_item = categories[i].split("/");

                if ((menu_item[0].match(' ')) || (menu_item[1].match(' '))){
                    cat_main_header = menu_item[0].replace(/ /g, '_');
                    cat_sub_header = menu_item[1].replace(/ /g, '_');
                } else {
                    cat_main_header=menu_item[0];
                    cat_sub_header=menu_item[1];
                }

                console.log("Cat_main_header is: "+cat_main_header+" Cat_sub_header is: "+cat_sub_header);
                if (!category_headers.includes(menu_item[0])) {
                    listing_container.append("<h2>"+menu_item[0]+"</h2>");
                    listing_container.append("<div id='" + cat_main_header + "_list'>");
                    listing_container.append("<h3>" + menu_item[1] + "</h3><ul id='" + cat_sub_header + "_list'>");
                    listing_container.append("</ul>");
                    listing_container.append("</div>");
                    category_headers.push(menu_item[0]);
                }
                else {
                    cat_head = $('#'+cat_main_header+'_list');
                    console.log("cat_head is: "+cat_head);
                    sub_cat =$("<h3>" + menu_item[1] + "</h3><ul id='" + cat_sub_header + "_list'></ul>");
                    sub_cat.appendTo(cat_head);
                }
            }
            else {
                if (/ /g.test(categories[i])){
                    categories[i] = categories[i].replace(/ /g, '_');
                }
                listing_container.append("<h2>" + categories[i] + "</h2>");
                listing_container.append("<ul id='" + categories[i] + "_list'>");
                listing_container.append("</ul>");
            }
        }

        buildNavBar(categories);

    }

    function AddListingObj(obj) {
        var title = obj.title,
            description = obj.description,
            path = "https://concord-consortium.github.io/codap-data/"+obj.path,
            category = obj.categories,
            url = $("#codap-url").val(),
            category_bin ='',
            listing = '',
            listing_desc ='',
            query_param = '?url=',
            launchLink = '',
            linkLink = '',
            tdLaunch = $('<li>').addClass('launch-button').attr({'id': title + "-launch"}),
            tdLink = $('<li>').addClass('link-button').attr({'id': title + "-link"});

        for (var i=0; i<category.length;i++) {
            if (category[i].includes('/')) {
                console.log("In category split");

                var category_split = category[i].split("/");
                if (/ /g.test(category_split[1])){
                    category_split[1] = category_split[1].replace(/ /g, '_');
                }
                category_bin = '#' + category_split[1]+'_list';
            }
            else {
                if (/ /g.test(category[i])){
                    category[i] = category[i].replace(/ /g, '_');
                }
                category_bin = '#' + category[i] + '_list';
            }
            listing = $('<li>').addClass('listing');
             launchLink = $('<a class = "listing-title" target = "_blank" href='+url+query_param+path+'> '+title+' </a>'),
                 listing_desc = $('<p>').addClass('listing-desc').text(description),
                 linkLink = $('<a class = "listing-link" href=' + path + '> Link </a>'),
             launchLink.appendTo(listing);
            listing_desc.appendTo(listing);
             linkLink.appendTo(listing);
             listing.appendTo(category_bin);
        }
    }


    function buildListing(listing){
        //check if item is visible
        for (var i=0; i<listing.length; i++) {
            if (listing[i].visible) {
                AddListingObj(listing[i]);
            }
        }
    }

    function buildPage(response) {
        var categories_array = getCategories(response);
        var sample_doc_list = response.sample_docs;
        buildListingDivs(categories_array);
        buildListing(sample_doc_list);
    }

    fetchObjList();
});

