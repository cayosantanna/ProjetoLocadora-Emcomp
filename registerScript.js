// Função para cadastrar um novo usuário
function cadastrarUsuario(username, password) {
    // Verifica se já existem usuários cadastrados no LocalStorage
    let usuarios = localStorage.getItem('usuarios');
    if (!usuarios) {
      usuarios = [];
    } else {
      usuarios = JSON.parse(usuarios);
    }
  
    // Adiciona o novo usuário ao array de usuários
    usuarios.push({ username, password });
  
    // Armazena o array atualizado no LocalStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }
  
function signup(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var cpf = document.getElementById('cpf').value;
    var address = document.getElementById('address').value;
    var birthdate = document.getElementById('birthdate').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Verificar se já existe um array de usuários no Local Storage
    var users = localStorage.getItem('users');
    if (users) {
        users = JSON.parse(users); // Converter de string para array
    } else {
        users = []; // Criar um novo array se não existir
    }

    // Verificar se o usuário já está cadastrado
    var existingUser = users.find(function(user) {
        return user.username === username;
    });

    if (existingUser) {
        alert('Nome de usuário já cadastrado!');
        return;
    }

    // Adicionar o novo usuário ao array
    var newUser = {
        name: name,
        phone: phone,
        email: email,
        cpf: cpf,
        address: address,
        birthdate: birthdate,
        username: username,
        password: password
    };

    users.push(newUser);

    // Salvar o array atualizado no Local Storage
    localStorage.setItem('users', JSON.stringify(users));

    alert('Cadastro realizado com sucesso!');
    document.getElementById('signup-form').reset();
}

  