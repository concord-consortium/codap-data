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

    function searchResources(obj) {
        console.log("in searchResources");
        var title='',
            description='',
            tags = [],
            display_list=[],
            search_word = ($('#keyword').val()).toLowerCase();

        console.log("Search_word is "+ search_word);


        for (var i=0; i<obj.length;i++) {
            // console.log("Obj is: "+ obj[i]);
    3        // console.log("Title is: "+ obj[i].title);
            // console.log("Description is: "+obj[i].description);
            title = (obj[i].title).toLowerCase();
            description = (obj[i].description).toLowerCase();
            tags = obj[i].tag;

            if ((title.includes(search_word)) || (description.includes(search_word))) {
                console.log(obj[i].title + " should be displayed");
                display_list.push(obj[i]);
            }
        }
        console.log("Display_list is "+display_list);
        buildListing(display_list);
    }

    function filterCategory() {
        console.log("in filterCategory");
            var id=this.id;
            var filters=[];
            //if no boxes are checked, show all, break
            //else hide all listings
            $('.listing').hide();
            //check which checkboxes are checked
        console.log("id is "+id);
        $('#'+id).toggle(this.checked);
        console.log($("input:checked").val()+" is checked");
         //else add checked ones to array
            //show classes in array
            $('.Math').show();
    }

    function AddListingObj(obj) {
        var title = obj.title,
            description = obj.description,
            path = '',
            categories = obj.categories,
            url = $("#codap-url").val(),
            category_bin ='',
            listing = '',
            listing_category='',
            listing_desc ='',
            query_param = '?url=',
            launchLink = '',
            linkLink = '',
            url_root = window.location.origin+window.location.pathname,
            listing_container = "#listing_container";

        // console.log("in AddListingObj");
        // console.log(categories);
        if (obj.path.match('^http','i')) {
            path = obj.path;
        }
        else {
            url_root=url_root.replace(/index.html$/, '');
            path = url_root+obj.path;
        }

        if (url.match(/^https/i) && !path.match(/^https/i)) {
            path=path.replace(/http/i,'https');
        }

        listing = $('<li>').addClass('listing').addClass(categories);
        // categories.forEach(function(category)
        //     {   console.log(category);
        //         $('li.listing').addClass(category)} );
        launchLink = $('<a class = "listing-title" target = "_blank" href='+url+query_param+path+'> '+title+' </a>'),
            listing_desc = $('<p>').addClass('listing-desc').text(description),
            linkLink = $('<a class = "listing-link" href=' + path + '> Embeddable Link </a>'),
            launchLink.appendTo(listing);
        listing_desc.appendTo(listing);
        linkLink.appendTo(listing);
        listing.appendTo(listing_container);

    }


    function buildListing(listing){
        console.log("in buildListing");
        //check if item is visible
        $('.listing').remove();
        for (var i=0; i<listing.length; i++) {
            if (listing[i].visible) {
                AddListingObj(listing[i]);
            }
        }
    }

    function buildPage(response) {
        console.log("in buildPage");
        var sample_doc_list = response.sample_docs;
        buildListing(sample_doc_list);

        $("#search").submit(function() {searchResources(sample_doc_list); return false;});
        $("input[type=checkbox]").on("click",filterCategory);
        $('#codap-url').submit(function(){buildListing(sample_doc_list); return false;});

    }

    fetchObjList();


});

