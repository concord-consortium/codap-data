<?DOCTYPE html>
<html>
<head>
    <title>Ejemplos de CODAP</title>
    <link rel="stylesheet" type="text/css" href ="./Common/css/site.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="./listing.js" language="javascript"></script>
</head>
<body>
<header id="header">
    <div>
        <img src="https://codap.concord.org/_assets/img/codap-logo@2x.png" alt="Common Online Data Analysis Program">
        <div id="cc">
            un producto de
            <a href="https://concord.org/" title="The Concord Consortium - Aprendizaje digital revolucionario para ciencias, matemática e ingeniería"><img src="http://codap.concord.org/_assets/img/cc-logo.png" alt="The Concord Consortium">
            </a>
        </div>
    </div>
</header>
<section id="home-content">
    <section id="title">
        <h1> Ejemplos de CODAP</h1>
    </section>
</section>
    <section id="intro">
        <p>Para abrir un documento ejemplo de CODAP, clic en el título o arrastrar el "Enlace embebible" a CODAP. Para abrir un documento CODAP, clic <a href="https://codap.concord.org/releases/latest/">acá</a></p>
    </section>
    <section id="search_area">
        <form id="search" action="#" ><input type="search" id="keyword" name="keyword" value=""
                                                                        placeholder="Buscar por palabra clave..."/> <input
            class="button" type="submit" value="Search"/></form>
    </section><!-- /#search -->
    <section id="content_area" >
        <div id="filter-category">
            <form id="categories">
                <input id="math" class="category-checkbox" type="checkbox" name="category"  value="math"><label for="category_math"></label>Math<br>
                <input id="science" class="category-checkbox" type="checkbox" name="category" value="science"><label for="category_science"></label>Science<br>
                <input id="socsci" class="category-checkbox" type="checkbox" name="category" value="socsci"><label for="category_socsci"></label>Social Studies<br>
                <input id="language" class="category-checkbox" type="checkbox" name="category" value="language_arts"><label for="category_language_arts"></label>Language Arts<br>
                <input id="miscellaneous" class="category-checkbox" type="checkbox" name="category" value="miscellaneous"><label for="category_misc"></label>Miscellaneous<br>
            </form>
        </div>
        <div id = "listing_container"></div>
    </section>

<div class = "form_container">
    <form action = "#" id="codap_url_form">
        <label>Enter CODAP build to use:</label>
        <input id="codap-url" size="75" type="text" value="" />
        <script type="text/javascript">
            var pageLoc = location.href;
            if (pageLoc.indexOf("https") > -1) {
                $("#codap-url").val("https://codap.concord.org/releases/latest/static/dg/en/cert/index.html");
            } else {
                $("#codap-url").val("http://codap.concord.org/releases/latest/static/dg/en/cert/index.html");
            }
        </script>
    </form>
</div>
<div class="credits">
    <p>Concord Consortium's CODAP example documents repository: <a target = "blank" href="https://github.com/concord-consortium/codap-data">https://github.com/concord-consortium/codap-data</a></p>
    <p>Concord Consortium's CODAP plugins repository: <a target="blank" href="https://github.com/concord-consortium/codap-data-interactives">github.com/concord-consortium/codap-data-interactives</a></p>
    <p>Concord Consortium's CODAP project repository: <a target="blank" href="https://github.com/concord-consortium/codap">github.com/concord-consortium/codap</a></p>
    <p>To find out more about the CODAP Project: <a target="blank" href="https://concord.org/projects/codap">About CODAP</a></p>
    <p>To find out more about CODAP: <a target="blank" href="https://codap.concord.org">CODAP</a></p>
    <p>Examples of CODAP embedded data analysis: <a target="blank" href="https://staff.concord.org/~emcelroy/embed/">Examples of Embedded Data Analysis</a> </p>
</div>

<!--<div class = "form_container">-->
    <!--<form action="#" id="codap_url_form">-->
        <!--<label>Enter CODAP build to use: </label>-->
        <!--<input id="codap-url" size="75" type="text" value="" />-->
        <!--<script type="text/javascript">-->
            <!--var pageLoc = location.href;-->
            <!--if (pageLoc.indexOf("https") > -1) {-->
                <!--$("#codap-url").val("https://codap.concord.org/releases/latest/static/dg/en/cert/index.html");-->
            <!--} else {-->
                <!--$("#codap-url").val("http://codap.concord.org/releases/latest/static/dg/en/cert/index.html");-->
            <!--}-->
        <!--</script>-->
    <!--</form>-->
<!--</div>-->



<footer>
    <p>© Copyright 2017 <a href="https://concord.org/" title="The Concord Consortium - Revolutionary digital learning for science, amth, and engineering">The Concord Consortium</a>. All rights reserved.</p>
</footer>

</body>
</html>
