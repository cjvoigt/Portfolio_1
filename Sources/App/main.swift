import Vapor
import HTTP
import VaporSQLite

let drop = Droplet(preprations: [User.self], providers:[VaporSQLite.Provider.Self])
var userController = UserController()

drop.get("/") { request in
    return try drop.view.make("index.html")
}

drop.get("login") { request in
  return try drop.view.make("index.html")
}

drop.get("users", "create") { request in
  return try drop.view.make("createAccount.html")
}

drop.post("users", "login", handler: userController.login)
drop.post("users", "create", handler: userController.create)

let port = drop.config["app", "port"]?.int ?? 80

drop.serve();
