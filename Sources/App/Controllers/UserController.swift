import Vapor
import HTTP

class UserController {
    func login(request: Request) throws -> ResponseRepresentable {
        guard let username = request.data["username"]?.string else {
            print("Data: \(request.data)")
            throw Abort.custom(status: .badRequest, message: "Please send a username.")
        }

        guard let password = request.data["password"]?.string else {
            print("error in password")
            throw Abort.custom(status: .badRequest, message: "Please send a password.")
        }

        print("Username: \(username), Password: \(password)")

        return "Username: \(username), Password: \(password)"
    }
}
