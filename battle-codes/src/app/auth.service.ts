export class AuthService {

async signUp(name: string, email: string, password: string) {

  let emailBody = form.value.body;
  let emailSubject = form.value.subject
  const post = {
    "body": emailBody,
    "subject": emailSubject
  }
  const settings = {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(post)
  }
  const data = await fetch(`${baseURL}/messages`, settings)
  const refresh = await fetch(`${baseURL}/messages`)
  const res = await refresh.json()
  const messages = res._embedded.messages
  this.messages = messages
  form.reset();
}
}
}
