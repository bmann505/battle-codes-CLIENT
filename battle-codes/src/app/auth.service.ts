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
       fetch('https://rocky-castle-86279.herokuapp.com/signup', settings)
       .then((data) => {
        return data.json()
      })
      .then(res => {
        if(res.error){
          alert(res.error)
        } else {
        localStorage.setItem('token', res.data)
        }
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

   fetch('https://rocky-castle-86279.herokuapp.com/signin', settings)
   .then((data) => {
    return data.json()
  })
  .then(res => {
    if(res.error) {
      alert(res.error)
    } else {
    localStorage.setItem('token', res.data)
    }
  })
}

  }
