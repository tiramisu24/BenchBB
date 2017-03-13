export const singup = (user) => (
  $.ajax({
    type: "POST",
    url: '/api/users',
    data: {user: user}
  })
)

export const login = (user) => (
  $.ajax({
    type: "POST",
    url: '/api/session',
    data: {user: user}
  })
)

export const logout = () => (
  $.ajax({
    type: "DELETE",
    url: '/api/session'
  })
)
