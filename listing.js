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

        for (var k=0;k<words.length;k++) {
            if (!(ignore_words.includes(words[k]))) {
                word_list.push(words[k]);
            }
        }
        return word_list;
    }

    function searchResources(obj) {
        console.log("in searchResources");
        var tags = [],
            words=[],
            categories=[],
            display_list=[],
            search_words=[],
            keywords = ($('#keyword').val()).toLowerCase(),
            space=" ";

        if (keywords=='') {
            display_list = obj;
        }
        else {
            search_words = (keywords.split(space));

            for (var i = 0; i < obj.length - 1; i++) {
                // tags = obj[i].tag;
                words = obj[i].word_list;
                console.log("Words in searchResources: "+words);
                // categories=(obj[i].categories).split(space);

                // for (k=0; k<categories.length;k++) {
                //     categories[k] =categories[k].toLowerCase();
                // }

                for (var j = 0; j < search_words.length; j++) {
                //     if (typeof tags != "undefined" && tags != null && tags.length > 0) {
                //         if (tags.includes(search_words[j])) {
                //             display_list.push(obj[i]);
                //         }
                //
                //     }
                    if (typeof words != "undefined" && words != null && words.length > 0) {
                        if (words.includes(search_words[j])) {
                            if (!(display_list.includes(obj[i]))) {
                                display_list.push(obj[i]);
                            }
                        }
                    }
                    // if (typeof categories != "undefined" && categories != null && categories.length > 0) {
                    //     if (categories.includes(search_words[j])) {
                    //         if (!(display_list.includes(obj[i]))) {
                    //             display_list.push(obj[i]);
                    //         }
                    //     }
                    // }
                }
            }
        }

        buildListing(display_list);

    }

    function filterCategory(obj) {
        console.log("in filterCategory");
        var display_list=[],
            category_form = document.getElementById('categories'),
            categories = "",
            checked_category=[],
            categoryCheckboxes = category_form.getElementsByTagName('input'),
            checked_num = categoryCheckboxes.length;
        console.log("categoryCheckboxes is: "+categoryCheckboxes);
        console.log("checked_num is: "+checked_num);

        for (var l=0;l<checked_num;l++) {

            if (categoryCheckboxes[l].checked) {
                checked_category.push(categoryCheckboxes[l].id);
            }
        }

        $('.listing').remove();

        if (checked_category.length<=0) {
            display_list = obj;
        }
        else {
            for (var k = 0; k < obj.length - 1; k++) {
                categories = obj[k].categories;

                for (var j = 0; j < checked_category.length; j++) {
                    if (categories.includes(checked_category[j])) {
                        if (!(display_list.includes(obj[k]))) {
                            display_list.push(obj[k])
                        }
                    }

                }
            }
        }

        searchResources(display_list);

    }

    function AddListingObj(obj) {
        var title = obj.title,
            description = obj.description,
            path = '',
            categories = obj.categories,
            image_path = obj.image_path,
            alt_img_path = './resources/images/codap_logo.png',
            url = $("#codap-url").val(),
            category_bin ='',
            listing = '',
            listing_category='',
            listing_image_link='',    
            listing_desc ='',
            listing_image = '',
            query_param = '?url=',
            launchLink = '',
            linkLink = '',
            url_root = window.location.origin+window.location.pathname,
            listing_container = "#listing_container";

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
        launchLink = $('<a class = "listing-title" target = "_blank" href='+url+query_param+path+'> '+title+' </a>'),
            listing_image = $('<div class = "listing-image"><object data ='+image_path+' type="image/png"><img src = '+alt_img_path+'>'),
            listing_image_link=$('<a class = "listing-image-link" target = "_blank" href='+url+query_param+path+'> '+title),
            listing_desc = $('<span>').addClass('listing-desc').text(description).append('</a>'),
            linkLink = $('<a class = "listing-link" href=' + path + '> Embeddable Link </a>'),
            launchLink.appendTo(listing);
        listing_image.appendTo(listing_image_link);
        listing_desc.appendTo(listing_image);
        listing_image_link.appendTo(listing);
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
            // $('.error').remove();
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
            categories='',
            tags='',
            space = " ",
            words=[],
            word_list=[];



        for (var i=0; i<sample_doc_list.length-1;i++) {
            title = (((sample_doc_list[i].title).toLowerCase()).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")).trim();
            description = (((sample_doc_list[i].description).toLowerCase()).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")).trim();
            categories = (sample_doc_list[i].categories);
            tags = (sample_doc_list[i].tag);
            words = (title.split(space)+',' + description.split(space)).split(',');

            for (var j=0; j<tags.length; j++) {
               words.push(tags[j]);
            }
            for (var k=0; k<categories.length; k++) {
                words.push(categories[k]);
            }
            word_list = removeCommonWords(words);

            sample_doc_list[i].word_list = word_list;
            console.log("words_list in buildPage categories: "+sample_doc_list[i].word_list);

        }

        buildListing(sample_doc_list);

        $("#search").submit(function() {filterCategory(sample_doc_list); return false;});
        $("#categories .category-checkbox").change(function() {filterCategory(sample_doc_list); return false;});
        // $('#codap-url').submit(function(){filterCategory(sample_doc_list); return false;});
        //$('#codap-url').on('input', function(){filterCategory(sample_doc_list); return false;});
        $('#codap_url_form').on('submit', function(event) {
            buildListing(sample_doc_list);
            event.preventDefault();
            return false;});

    }

    fetchObjList();

});

