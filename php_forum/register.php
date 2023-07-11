<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>elbriantdev - Registrarse</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="login.css">
    <script src="https://kit.fontawesome.com/182228421b.js" crossorigin="anonymous"></script>
</head>
<body>
    <div class="navbar"> 
        <nav>
            <div class="navbar w">
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
        <section>
            <div class="form-box register-box">
                <div class="form-value">
                    <form action="" method="post">
                        <h2>Registrarse</h2>
                        <div class="inputbox" id="username">
                            <ion-icon name="person-outline"></ion-icon>
                            <input type="text" placeholder=" " name="username" required>
                            <label for="" id="usernamelb">Usuario</label>
                        </div>
                        <div class="inputbox" id="email">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="email" placeholder=" " name="email" required>
                            <label for="" id="emaillb">Email</label>
                        </div>
                        <div class="inputbox" id="password">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input type="password" placeholder=" " name="password" required>
                            <label for="" id="passlb">Contraseña</label>
                        </div>
                        <div class="inputbox" id="repassword">
                            <ion-icon name="repeat-outline"></ion-icon>
                            <input type="password" placeholder=" " name="repass" required>
                            <label for="" id="repasslb">Confirmar contraseña</label>
                        </div>
                        <button>Entrar</button>
                        <div class="register">
                            <p>¿Ya tiene cuenta? <a href="login.php">Iniciar sesión</a></p>
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

<?php
    $username = $_POST['username'];
?>