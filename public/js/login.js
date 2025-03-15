/* eslint-disable */
const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/users/login',
      data: {
        email,
        password,
      },
    });

    if (res.data.status === 'success') {
      alert('success', 'Logged in successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    alert(err.response.data.message);
  }
};

const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:3000/api/v1/users/logout',
    });
    if ((res.data.status = 'success')) location.reload(true);
  } catch (err) {
    alert('error', 'Error logging out! Try again.');
  }
};

const loginForm = document.querySelector('.form--login');
const logOutBtn = document.querySelector('.nav__el--logout');
// VALUES

// DELEGATION

if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if (emailInput && passwordInput) {
      const email = emailInput.value;
      const password = passwordInput.value;
      login(email, password);
    }
  });
}
if (logOutBtn) {
  logOutBtn.addEventListener('click', logout);
}
