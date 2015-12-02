<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@page session="true"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sistema de Encuestas</title>
    
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/boot.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/styles.css">
    <script type="text/javascript">
	var baseUrl = '${pageContext.request.contextPath}/api/admin';
	var rootUrl = '${pageContext.request.contextPath}';
	
</script>
</head>
<body>
 <div class="admin-modal"></div>
  <div class="container" style="background: transparent;" id="loading-placeholder">
<!-- 		<div class="row"> -->
<!-- 			<div class="col-sm-12 text-center"> -->
<%-- 				<img style="width: 32px;" src="${pageContext.request.contextPath}/resources/img/loading.gif" /> --%>
<!-- 				<h2>Cargando...</h2> -->
<!-- 				<p style="color: #606663;">Espere un momento por favor.</p> -->
<!-- 			</div> -->
<!-- 		</div> -->
	</div>
	
	<div class="header">
		<div class="row">
			<div id="top-bar" class="col-sm-12"></div>
		</div>
	</div>
	<div id="main-container">
		<div class="contents-wrapper">
			<div id="admin-menu" class="pull-left"></div>
			<div class="contents">
				<div class="container-fluid">
					<div class="row">
						<div id="admin-main" class="col-sm-12"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
 
 
 <script data-main="${pageContext.request.contextPath}/resources/js/app/admin-config.js" src="${pageContext.request.contextPath}/resources/js/require.js"></script>
</body>
</html>