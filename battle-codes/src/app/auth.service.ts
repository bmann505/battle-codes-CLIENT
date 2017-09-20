export class AuthService {

 signUp(name: string, email: string, password: string) {
  // let name = form.value.name
  // let email = form.value.email;
  // let password = form.value.password;
    console.log("data")
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

       fetch('http://localhost:3000/signup', settings).then((data) => {
        console.log(data)
      })

      // const refresh = await fetch('http://localhost:3000/signup')
      // const res = await refresh.json()

      // localStorage.setItem('token', res.data)
      // console.log(localStorage.getItem('token'))
      // form.reset();
    }
  }
