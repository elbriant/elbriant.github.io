<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>elbriantdev - forum</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/182228421b.js" crossorigin="anonymous"></script>
</head>
<body>
    <div class="bar">
        <nav>
            <div class="navbar">
                <input type="checkbox" id="check">
                <label for="check" class="checkbtn">
                    <i class="fas fa-bars"></i>
                </label>
                <h2 class="logo navitems"><a id="logoref" href="../index.php"><span>dev</span> - foro</a></h2>
                <ul class="items navitems">
                <li><a href="index.php" onclick="document.getElementById('check').checked = false;">Inicio</a></li>
                    <li><a href="foro.php" onclick="document.getElementById('check').checked = false;">foro</a></li>
                    <li><a href="chatting.php" onclick="document.getElementById('check').checked = false;">Chat</a></li>
                    <a href="login.php" class="btn" onclick="document.getElementById('check').checked = false;">Iniciar sesión</a>
                </ul>
            </div>
        </nav>
    </div>

    <main>
        
    </main>

</body>
</html>