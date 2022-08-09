const requestOptions = {
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: { 'Content-Type': 'application/json' },
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
};
const getData = () =>
  fetch('http://localhost:3001/users').then((res) => {
    res.json().then((response) => {
      try {
        let content = '';
        for (let i = 0; i < response.length; i++) {
          content += '<p>' + response[i]?.name + '</p>';
        }
        document.getElementById('block').innerHTML = content;
      } catch (e) {
        console.log('res.json ~ e', e);
      }
    });
    return res;
  });

const createPost = async (url = '', payload = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    ...requestOptions,
    body: JSON.stringify(payload),
  });
  return response.json();
};
const updateUser = async (url = '', payload = {}) => {
  const response = await fetch(url, {
    method: 'PUT',
    ...requestOptions,
    body: JSON.stringify(payload),
  });
  return response.json();
};
const deleteUser = async (url = '') => {
  const response = await fetch(url, {
    method: 'DELETE',
    ...requestOptions,
  });
  return response.json();
};

const dataUser = {
  id: '0',
  name: 'Thanh',
  phone: 0935964949,
};
document.getElementById('create').onclick = () =>
  createPost('http://localhost:3001/users', dataUser);
document.getElementById('update').onclick = () =>
  updateUser('http://localhost:3001/users/0', {
    id: '0',
    name: 'Trường',
    phone: 0000,
  });
document.getElementById('delete').onclick = () =>
  deleteUser('http://localhost:3001/users/FbqWlOM');
