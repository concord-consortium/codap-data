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
        console.log (sub_menu_items);
        nav_bar.append(nav_bar_list);
        for (var j=0; j<top_menu_items.length; j++) {
            $('.menu-h').append("<li><a href='#" + top_menu_items[j] + "_list'>" + top_menu_items[j] + "</a></li>");
        }
        nav_bar.append("</ul>");
    }

    function buildListingDivs(categories) {
        console.log("In buildListingDivs");
        var listing_container = $("#listing_container");

        for (var i=0; i < categories.length; i++) {
            if (categories[i].includes("/")) {
                var menu_item = categories[i].split("/");
                listing_container.append("<div id='" + menu_item[0] + "_list'>");
                listing_container.append("<p>In " + menu_item[1]+ " div</p><ul id='" + menu_item[1] + "_list'>");
                listing_container.append("</ul>");
                listing_container.append("</div>");
            }
            else {
                listing_container.append("<p>In " + categories[i] + " div</p>");
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
                category_bin = '#' + category_split[1]+'_list';
            }
            else {
                category_bin = '#' + category[i] + '_list';
            }
            listing = $('<li>').addClass('listing');
             launchLink = $('<a class = "listing-title" target = "_blank" href='+url+query_param+path+'> '+title+' </a>'),
                 listing_desc = $('<p>').addClass('listing-desc').text(description),
                 linkLink = $('<a class = "listing-link" href=' + url + query_param + path + '> Link </a>'),
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

