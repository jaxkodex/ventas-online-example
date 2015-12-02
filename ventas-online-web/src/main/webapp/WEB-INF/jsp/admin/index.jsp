<%@page contentType="text/html" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Administración | Encuestas</title>
    <link href="${pageContext.request.contextPath}/resources/css/bootstrap.min.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/resources/css/admin.css" rel="stylesheet">
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>

<div id="main" class="container-fluid">
    <div class="clearfix">
        <div id="user-info" class="clearfix pull-right">
            <div class="pull-left" id="user-image-holder">
                <img class="img-circle" src="http://tumblrchase.com/img/icons/zelda/12.png"/>
            </div>
            <div class="pull-left" id="user-data">Administrador</div>
        </div>
    </div>
    <div id="content"></div>
</div>
<div class="menu-overlay"></div>
<div id="menu"></div>

<script data-main="${pageContext.request.contextPath}/resources/js/admin/config.js"
        src="${pageContext.request.contextPath}/resources/js/require.js"></script>
</body>
</html>
