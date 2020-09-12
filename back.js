let viewUsersUrl = 'http://localhost:8080/admin/userList';
let authUser = 'http://localhost:8080/user/authUser';
var adminUsersTable = $('#userTableJs tbody');
var navbarInfo = $('#navbarinfo div');
/*инициализация скриптов при загрузке страницы*/
$(document).ready(function () {
  showAllUsers();
  navbar();
});
/*вывод всех пользователей на странице /admin/userTable*/
function showAllUsers() {
  fetch(viewUsersUrl)
    .then((response) => {
      if (!response.ok) {
        throw Error('Error: ' + response.status);
      }
      return response.json();
    })
    .then((data) => {
      data.map((user) => {
        const userRoles = user.roleSet
          .map((role) => {
            return role.name.substring(5);
          })
          .join(', ');
        var tr = document.createElement('tr');
        tr.setAttribute('id', `${user.userID}`);
        var counter = 0;
        for (var o in user) {
          var td = document.createElement('td');
          if (counter < 4) {
            td.appendChild(document.createTextNode(user[o]));
          }
          tr.appendChild(td);
          counter++;
          if (counter === 5) {
            td.appendChild(document.createTextNode(userRoles));
            tr.appendChild(td);
          }
        }
        td = document.createElement('td');
        td.appendChild(document.createTextNode('EDIT'));
        tr.appendChild(td);
        td = document.createElement('td');
        td.appendChild(document.createTextNode('DELETE'));
        tr.appendChild(td);
        adminUsersTable.append(tr);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
/*вывод информации об авторизированном пользователе на странице /admin/userTable и /user/userinfo*/
function navbar() {
  fetch(authUser)
    .then((response) => {
      if (!response.ok) {
        throw Error('Error : ' + response.status);
      }
      return response.json();
    })
    .then((data) => {
      const userRoles = data.roleSet
        .map((role) => {
          return role.name.substring(5);
        })
        .join(', ');
      var a = document.createElement('a');
      a.setAttribute('class', 'navbar-text text-white');
      a.appendChild(
        document.createTextNode(
          data.userEmail + ' with roles : ' + `${userRoles.toString()}`
        )
      );
      navbarInfo.append(a);
    })
    .catch((error) => {
      console.log(error);
    });
}
