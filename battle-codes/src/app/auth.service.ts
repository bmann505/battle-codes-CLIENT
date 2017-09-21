export class AuthService {

 signUp(name: string, email: string, password: string) {
      const post = {
        "name": name,
        "email": email,
        "password": password
      }
      const settings = {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(post)
      }

       fetch('http://localhost:3000/signup', settings)
       .then((data) => {
        return data.json()
      })
      .then(res => {
        localStorage.setItem('token', res.data)
      })
    }

signIn(email: string, password: string) {
  const post = {
    "email": email,
    "password": password
  }
  const settings = {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(post)
  }

   fetch('http://localhost:3000/signin', settings)
   .then((data) => {
    return data.json()
  })
  .then(res => {
    localStorage.setItem('token', res.data)
  })

}

  }
