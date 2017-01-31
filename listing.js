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

    function removeCommonWords(words) {
        var word_list = [],
            ignore_words = ["the", "it", "is", "we", "all", "a", "an", "by", "to", "you", "at", "she", "they", "we", "how", "it", "i", "are", "to", "for", "of", "in", "that", "and"];

        console.log("In removeCommonWords");
        console.log("Words are: "+words);

        for (var k=0;k<words.length;k++) {
            console.log("Word[k] is: "+words[k]);
            if (!(ignore_words.includes(words[k]))) {
                word_list.push(words[k]);
            }
        }
        console.log("Word list is: " + word_list);
        return word_list;
    }

    function searchResources(obj) {
        console.log("in searchResources");
        var tags = [],
            words=[],
            display_list=[],
            search_words=[],
            keywords = ($('#keyword').val()).toLowerCase(),
            space=" ";

        search_words = keywords.split(space);
        console.log("Search_word is "+ search_words);

        for (var i=0; i<obj.length-1;i++) {
            tags = obj[i].tag;
            words = obj[i].word_list;

            for (var j=0;j<search_words.length-1;j++) {
                if (typeof tags != "undefined" && tags != null && tags.length > 0) {

                    if (tags.includes(search_words[j])) {
                        display_list.push(obj[i]);
                    }

                }
                if (typeof words != "undefined" && words != null && words.length > 0) {
                    if (words.includes(search_words[j])) {
                        console.log(obj[i].title + " should be displayed");
                        if (!(display_list.includes(obj[i]))) {
                            display_list.push(obj[i]);
                        }
                    }
                }
            }
        }

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
        $('.error').remove();

        if (typeof listing == "undefined" || listing == null || listing.length <= 0) {
            $('#listing_container').append('<p class="error">Sorry, no document matches your search.</p>');
        }
        else {
            $('.error').remove();
            for (var i = 0; i < listing.length; i++) {
                if (listing[i].visible) {
                    AddListingObj(listing[i]);
                }
            }
        }
    }

    function buildPage(response) {
        console.log("in buildPage");
        var sample_doc_list = response.sample_docs;
        var title='',
            description='',
            space = " ",
            words=[],
            word_list=[];


        for (var i=0; i<sample_doc_list.length-1;i++) {
            title = (((sample_doc_list[i].title).toLowerCase()).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")).trim();
            description = (((sample_doc_list[i].description).toLowerCase()).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")).trim();
            words = (title.split(space)+',' + description.split(space)).split(',');

            word_list = removeCommonWords(words);

            console.log("Word list is: " + word_list);
            sample_doc_list[i].word_list = word_list;
        }

        buildListing(sample_doc_list);

        $("#search").submit(function() {searchResources(sample_doc_list); return false;});
        $("input[type=checkbox]").on("click",filterCategory);
        $('#codap-url').submit(function(){buildListing(sample_doc_list); return false;});

    }

    fetchObjList();


});

