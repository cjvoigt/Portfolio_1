import Vapor

class User: Model  {
  var id: Node?
  var username: String
  var password: String
  var email: String

  init(username: String, password: String, email: String) {
    self.username = username
    self.password = password
    self.email = email
  }

  required init(node: Node, in context: Context) throws {
    id = try node.extract("id")
    username = try node.extract("username")
    password = try node.extract("password")
    email = try node.extract("email")
  }

  func makeNode() throws -> Node {
    return try Node(node: [
      "id": id,
      "username": username,
      "password": password,
      "email": email
    ])
  }

  static func prepare(_ database: Database) throws {
    try database.create("users") { users in
      users.id()
      users.string("username")
      users.string("password")
      users.string("email")
    }
  }

  static func revert(_ database: Database) throws {
    try database.delete("users")
  }
}
