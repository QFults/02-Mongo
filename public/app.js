if (localStorage.getItem('user')) {
  axios.get(`/api/user/${localStorage.getItem('user')}`)
    .then(({ data: user }) => {
      document.getElementById('items').innerHTML = ''
      user.items.forEach(item => {
        let itemElem = document.createElement('li')
        itemElem.textContent = item.text
        document.getElementById('items').append(itemElem)
      })
    })
}

document.getElementById('createUser').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/users', {
    username: document.getElementById('username').value,
    email: document.getElementById('email').value,
  })
    .then(({ data: user }) => {
      localStorage.setItem('user', user._id)
      alert('User Created!')
    })
    .catch(err => console.error(err))
})

document.getElementById('signIn').addEventListener('click', event => {
  event.preventDefault()
  axios.get(`/api/users/${document.getElementById('un').value}`)
    .then(({ data: user }) => {
      localStorage.setItem('user', user._id)
      document.getElementById('items').innerHTML = ''
      user.items.forEach(item => {
        let itemElem = document.createElement('li')
        itemElem.textContent = item.text
        document.getElementById('items').append(itemElem)
      })
    })
    .catch(err => console.error(err))
})

document.getElementById('addItem').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/items', {
    text: document.getElementById('item').value,
    isDone: false,
    user: localStorage.getItem('user')
  })
    .then(({ data: item }) => {
      let itemElem = document.createElement('li')
      itemElem.textContent = item.text
      document.getElementById('items').append(itemElem)
    })
})