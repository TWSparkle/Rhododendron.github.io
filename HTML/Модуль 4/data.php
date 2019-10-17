<html>
	<head>
		<meta charset="uft-8"/>
	</head>
	<body>
		<h1>Отправка данных на веб-сервер</h1>
		<p>
			Привет, <?php echo $_POST["name"];?><br>
			Ваш e-mail <?php echo $_POST["email"];?><br>
		</p>
		<form action="data.php" method="post">
			Введите имя: <input type="text" name="name"><br>
			E-mail: <input type="text" name="email"><br>
			<input type="submit">
		</form>
	</body>
	
</html>