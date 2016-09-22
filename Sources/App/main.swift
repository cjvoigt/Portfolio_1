import Vapor
import Core
import HTTP

let drop = Droplet()
let userconrtroller = UserController()

drop.get("/") { request in
    return try drop.view.make("index.html")
}

drop.get("login") { request in
  return try drop.view.make("index.html")
}

drop.get("create", "account") { request in
  return try drop.view.make("createAccount.html")
}

drop.post("users", "login", handler: userconrtroller.login)

drop.post("create", "account") { request in
  let json = try JSON(bytes: [])
  let response = try Response(status: .ok, json: json)
  return response
}

let port = drop.config["app", "port"]?.int ?? 80

drop.serve();
