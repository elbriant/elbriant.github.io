<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>elbriantdev - Iniciar sesión</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="login.css">
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
                <h2 class="logo navitems"><a id="logoref" href="../index.php "><span>dev</span> - foro</a></h2>
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
        <section>
            <div class="form-box">
                <div class="form-value">
                    <form action="login.php" method="post">
                        <h2>Iniciar sesión</h2>
                        <div class="inputbox" id="email">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="email" name="email" placeholder=" " required>
                            <label for="" id="emaillb">Email</label>
                        </div>
                        <div class="inputbox" id="password">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input type="password" name="password" placeholder=" " required>
                            <label for="" id="passlb">Contraseña</label>
                        </div>
                        <div class="forget">
                            <label><input type="checkbox" value="" />Mantener sesión </label>
                            <a href="#" id="forgotpass">Olvidé contraseña</a>
                        
                        </div>
                        <button type="submit" name="login" value="login">Entrar</button>
                        <div class="register">
                            <p>¿No tiene cuenta? <a href="register.php">Registrarse</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </main>
</body>
</html>