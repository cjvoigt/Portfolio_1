import Vapor
import HTTP

class UserController {
    func login(request: Request) throws -> ResponseRepresentable {
        guard let username = request.data["username"]?.string,
              let password = request.data["password"]?.string else
        {
            print("Post Data: \(request.data)")
            throw Abort.custom(status: .badRequest, message: "Incorrect User data.")
        }

        print("Username: \(username), Password: \(password)")

        return "Username: \(username), Password: \(password)"
    }

    func create(request: Request) throws -> ResponseRepresentable {
      guard let username = request.data["username"]?.string,
            let password = request.data["password"]?.string,
            let email = request.data["email"]?.string else
      {
        print("Post Data: \(request.data)")
        throw Abort.custom(status: .badRequest, message: "Incorrect User data.")
      }

      var user = User(username: username, password: password, email: email)

      try user.save()

      return user
    }
}
