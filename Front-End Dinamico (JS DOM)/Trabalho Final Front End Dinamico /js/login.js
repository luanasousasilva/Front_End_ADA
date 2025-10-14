(() => {
    const style = document.createElement('style');
    style.textContent = `
    body.fade-out { opacity: 0; transition: opacity .45s ease-in-out; }
    .login-error { color: #b00020; font-size: .9rem; }
    @keyframes shakeX {
      0% { transform: translateX(0); }
      25% { transform: translateX(-6px); }
      50% { transform: translateX(6px); }
      75% { transform: translateX(-4px); }
      100% { transform: translateX(0); }
    }
    .login-error--shake { animation: shakeX .5s ease; }
  `;
    document.head.appendChild(style);

    const form = document.getElementById('login-form');
    const errorDiv = document.getElementById('login-error');

    if (!form) {
        console.warn('Form de login não encontrado (id="login-form"). Verifique seu HTML.');
        return;
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = (document.getElementById('username')?.value || '').trim();
        const password = (document.getElementById('password')?.value || '').trim();


        if (!username || !password) {
            showError('Preencha todos os campos!');
            return;
        }

        try {
            const response = await fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            if (!response.ok) {

                showError('Usuário ou senha incorretos!');
                return;
            }

            const data = await response.json();
            if (data && data.token) {

                localStorage.setItem('username', username);
                document.body.classList.add('fade-out');
                setTimeout(() => {
                    if (username.toLowerCase() === 'johnd') {
                        window.location.href = 'admin.html';
                    } else {
                        window.location.href = 'index.html';
                    }
                }, 420);
            } else {
                showError('Falha no login. Tente novamente.');
            }
        } catch (err) {
            console.error('Erro no fetch de login:', err);
            showError('Erro ao conectar ao servidor. Tente mais tarde.');
        }
    });

    const userLogado = localStorage.getItem('username');
    if (userLogado) {
        if (userLogado.toLowerCase() === 'johnd') {
            window.location.href = 'admin.html';
        } else {
            window.location.href = 'index.html';
        }
    }

    function showError(msg) {
        if (!errorDiv) {
            alert(msg);
            return;
        }
        errorDiv.textContent = msg;
        errorDiv.classList.add('login-error');
        errorDiv.classList.add('login-error--shake');
        setTimeout(() => errorDiv.classList.remove('login-error--shake'), 600);
    }
})();
