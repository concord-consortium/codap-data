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

    function createLaunchURL(){

    }

    function createLinkURL () {

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
             launchLink = $('<a class = "listing-title" target = "_blank" href='+url+query_param+path+'> '+title+' | </a>'),
                 listing_desc = $('<p>').addClass('listing-desc').text(description),
                 linkLink = $('<a href=' + url + query_param + path + '> Link </a>'),
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



    // <div id="top-nav-bar">
    //     <nav class="nav-bar">
    //     <ul class="menu-h">
    //     <li><a href="#models-samples">Models</a></li>
    //     <!-- <li><a href="#maps-samples">Maps</a></li>-->
    //     <li><a href="#education-samples">Education</a></li>
    //     <li><a href="#language-arts-samples">Language Arts</a></li>
    // <li><a href="#math-samples">Math</a>
    //     <ul class="menu-h-dropdown">
    //     <li> <a href="#math-algebra">Algebra</a></li>
    //     <li><a href="#math-calculus">Calculus</a></li>
    //     <li><a href="#math-geometry">Geometry</a></li>
    //     <li><a href="#math-numtheory">Number Theory</a></li>
    // <li><a href="#math-probability">Probability</a></li>
    //     <li><a href="#math-other">Other Mathematics</a></li>
    // </ul>
    // </li>
    // <li><a href="#science-samples">Science</a>
    //     <ul class="menu-h-dropdown">
    //     <li><a href="#science-astronomy">Astronomy</a></li>
    //     <li><a href="#science-biology">Biology</a></li>
    //     <li><a href="#science-earthscience">Earth Science</a></li>
    // <li><a href="#science-physics-chemistry">Physics & Chemistry</a></li>
    //     <li><a href="#science-technology">Technology</a></li>
    //     </ul>
    //     </li>
    //     <li><a href="#social-science-samples">Social Science</a></li>
    // <li><a href="#sports-samples">Sports</a></li>
    //     </ul>
    //     </nav>
    //     </div>
    //     <div id="sample-document-list">
    //     <div id="models-samples">
    //     <h2>Models</h2>
    //     <table class="sample-table" id="models-table"></table>
    //     </div>
    //     <a href="#header" class="nav-to-top"><img class="home-icon" src="./Common/images/home.png">Back to top</a>
    // <!-- <div id="maps-samples">
    //     <h2>Maps</h2>
    //     <table class="sample-table" id="maps-table"></table>
    //     </div>
    //     <a href="#header" class="nav-to-top"><img class="home-icon" src="./Common/images/home.png">Back to top</a>-->
    // <div id="education-samples">
    //     <h2>Education</h2>
    //     <table class="sample-table" id="education-table"></table>
    //     </div>
    //     <a href="#header" class="nav-to-top"><img class="home-icon" src="./Common/images/home.png">Back to top</a>
    // <div id="language-arts-samples">
    //     <h2>Language Arts</h2>
    // <table class="sample-table" id="language-arts-table"></table>
    //     </div>
    //     <a href="#header" class="nav-to-top"><img class="home-icon" src="./Common/images/home.png">Back to top</a>
    // <div id="math-samples">
    //     <h2>Math</h2>
    //     <div id="math-algebra">
    //     <h3>Algebra</h3>
    //     <table class="sample-table" id="algebra-table"></table>
    //     </div>
    //     <a href="#header" class="nav-to-top"><img class="home-icon" src="./Common/images/home.png">Back to top</a>
    // <div id="math-calculus">
    //     <h3>Calculus</h3>
    //     <table class="sample-table" id="calculus-table"></table>
    //     </div>
    //     <a href="#header" class="nav-to-top"><img class="home-icon" src="./Common/images/home.png">Back to top</a>
    // <div id="math-geometry">
    //     <h3>Geometry</h3>
    //     <table class="sample-table" id="geometry-table"></table>
    //     </div>
    //     <a href="#header" class="nav-to-top"><img class="home-icon" src="./Common/images/home.png">Back to top</a>
    // <div id="math-numtheory">
    //     <h3>Number Theory</h3>
    // <table class="sample-table" id="numtheory-table"></table>
    //     </div>
    //     <a href="#header" class="nav-to-top"><img class="home-icon" src="./Common/images/home.png">Back to top</a>
    // <div id="math-probability">
    //     <h3>Probability</h3>
    //     <table class="sample-table" id="probability-table"></table>
    //     </div>
    //     <a href="#header" class="nav-to-top"><img class="home-icon" src="./Common/images/home.png">Back to top</a>
    // <div id="math-other">
    //     <h3>Other Mathematics</h3>
    // <table class="sample-table" id="math-other-table"></table>
    //     </div>
    //     <a href="#header" class="nav-to-top"><img class="home-icon" src="./Common/images/home.png">Back to top</a>
    // </div>
    // <div id="science-samples">
    //     <h2>Science</h2>
    //     <div id="science-astronomy">
    //     <h3>Astronomy</h3>
    //     <table class="sample-table" id="astronomy-table"></table>
    //     </div>
    //     <a href="#header" class="nav-to-top"><img class="home-icon" src="./Common/images/home.png">Back to top</a>
    // <div id="science-biology">
    //     <h3>Biology</h3>
    //     <table class="sample-table" id="biology-table"></table>
    //     </div>
    //     <a href="#header" class="nav-to-top"><img class="home-icon" src="./Common/images/home.png">Back to top</a>
    // <div id="science-earthscience">
    //     <h3>Earth Science</h3>
    // <table class="sample-table" id="earthscience-table"></table>
    //     </div>
    //     <a href="#header" class="nav-to-top"><img class="home-icon" src="./Common/images/home.png">Back to top</a>
    // <div id="science-physics-chemistry">
    //     <h3>Physics and Chemistry</h3>
    // <table class="sample-table" id="physics-table"></table>
    //     </div>
    //     <a href="#header" class="nav-to-top"><img class="home-icon" src="./Common/images/home.png">Back to top</a>
    // <div id="science-technology">
    //     <h3>Technology</h3>
    //     <table class="sample-table" id="technology-table"></table>
    //     </div>
    //     <a href="#header" class="nav-to-top"><img class="home-icon" src="./Common/images/home.png">Back to top</a>
    // </div>
    // <div id="social-science-samples">
    //     <h2>Social Science</h2>
    // <table class="sample-table" id="socsci-table"></table>
    //     </div>
    //     <a href="#header" class="nav-to-top"><img class="home-icon" src="./Common/images/home.png">Back to top</a>
    // <div id="sports-samples">
    //     <h2>Sports</h2>
    //     <table class="sample-table" id="sports-table"></table>
    //     </div>
    //     <a href="#header" class="nav-to-top"><img class="home-icon" src="./Common/images/home.png">Back to top</a>
    // </div>div

    // function launchSampleDoc(url) {
    //     window.open(url, '_blank');
    // }
    //
    // function invokeSampleDoc(name) {
    //     console.log("In invokeSampleDoc" + name);
    //     var codapURL = document.getElementById('codap-url').value,
    //         docserverURL = document.getElementById('doc-server-url').value,
    //         oldLocation = location.href,
    //         newLocation = oldLocation.replace(/index.html.*/, ''),
    //         path = map[name].path,
    //         newLocSSL = "",
    //         url = ""
    //
    //     //if codapURL is SSL, then newLoc should be SSL and url should use newLocSSL. Because codapURL will already be https if github.io/codap-data-interactive is SSL, not need to check if location.href is SSL. This check is only if the user changes the codapURL to SSL manually.  Also changes the docserver URL to SSL
    //     if (codapURL.indexOf("https") > -1) {
    //         //check if location.href is already https. If it not then replace http with https, else do nothing.
    //         if (newLocation.indexOf("https") > -1) {
    //             newLocSSL = newLocation;
    //         } else {
    //             newLocSSL = newLocation.replace("http", "https");
    //         }
    //         //url = newLocSSL + '/' + path;
    //         if (docserverURL) {
    //             if (docserverURL.indexOf("https") === -1) {
    //                 oldDocServerURL = docserverURL;
    //                 docserverURL = oldDocServerURL.replace("http", "https");
    //             }
    //         }
    //         url = newLocSSL + '/' + path;
    //     } else {
    //         url = newLocation + '/' + path;
    //     }
    //     //  url = 'http://concord-consortium.github.io/codap-data/' + path;
    //
    //     if (docserverURL) {
    //         return (codapURL + '?documentServer=' + encodeURI(docserverURL) + '&url=' + encodeURI(url));
    //     } else {
    //         return (codapURL + '#file=' + encodeURI(url));
    //     }
    // }


    /* map attribute definitions:
     title = name of document as it appears in github.io/codap-data website
     description = gives a brief description of document
     path = path to document json file in github
     ready = checkbox to indicate whether a document needs more work. Check mark indicates document needs more work.
     categories = an array of categories that document can fall under in github.io/codap-data website */
/*
    function buildPage() {
        console.log("in buildPage");

        var html = '',

            row,
            url = 'https://concord-consortium.github.io/codap-data/';

        mapLength = Object.keys(map).length;

        Object.getOwnPropertyNames(map).forEach(function (val, idx, array) {
            var title = map[val].title,
                description = map[val].description || '(no description available)',
                ready = map[val].ready,
                path = map[val].path,
                docURL = invokeSampleDoc(val),
                table = '',
            //tdReady=$('<td>').append($('<input/>', {'type':'checkbox'})),
                launchLink = '',
                linkLink = '',
                tdLaunch = $('<td>').addClass('launch-button').attr({'id': val + "-launch"}),
                tdLink = $('<td>').addClass('link-button').attr({'id': val + "-link"});

            console.log(val + '->' + map[val].name + ' idx is ' + idx);
            console.log("Category is: " + map[val].categories[0]);
            switch (map[val].categories[0]) {
                case "probability":
                    table = $('#probability-table');
                    break;
                case "model":
                    table = $('#models-table');
                    break;
                // case "map": table=$('#maps-table'); break;
                case "education":
                    table = $('#education-table');
                    break;
                case "langarts":
                    table = $('#language-arts-table');
                    break;
                case "algebra":
                    table = $('#algebra-table');
                    break;
                case "calculus":
                    table = $('#calculus-table');
                    break;
                case "geometry":
                    table = $('#geometry-table');
                    break;
                case "num_theory":
                    table = $('#numtheory-table');
                    break;
                case "other_math":
                    table = $('#math-other-table');
                    break;
                case "astronomy":
                    table = $('#astronomy-table');
                    break;
                case "biology":
                    table = $('#biology-table');
                    break;
                case "earth_sciences":
                    table = $('#earthscience-table');
                    break;
                case "physics_and_chemistry":
                    table = $('#physics-table');
                    break;
                case "technology":
                    table = $('#technology-table');
                    break;
                case "canada":
                    table = $('#socsci-table');
                    break;
                case "europe":
                    table = $('#socsci-table');
                    break;
                case "latin_america":
                    table = $('#socsci-table');
                    break;
                case "united_states":
                    table = $('#socsci-table');
                    break;
                case "sports":
                    table = $('#sports-table');
                    break;
                default:
                    table = $("#sample-document-list");
            }
            console.log("Table ID is: " + table);

            if (map[val].ready === false) {
                tdReady = $('<td>').append($('<input/>', {'type': 'checkbox'}).prop("checked", true));
            } else {
                tdReady = $('<td>').append($('<input/>', {'type': 'checkbox'}));
            }
            row = $('<tr>');
            //tdReady.appendTo(row);
            $('<td>').addClass('document-title').text(title).appendTo(row);
            $('<td>').addClass('document-description').text(description).appendTo(row);
            docURL = invokeSampleDoc(val),
                launchLink = $('<a target = "_blank" href="javascript:launchSampleDoc(invokeSampleDoc(\'' + val + '\'));">Launch</a>'),
                linkLink = $('<a href=' + url + path + '>Link</a>'),
                launchLink.appendTo(tdLaunch);
                tdLaunch.appendTo(row);
                linkLink.appendTo(tdLink);
            tdLink.appendTo(row);
            row.appendTo(table);
        });
        //table.appendTo('#sample-document-list');
    }

    buildPage();*/
    fetchObjList();
});

