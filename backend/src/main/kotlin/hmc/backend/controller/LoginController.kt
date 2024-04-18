package hmc.backend.controller

import hmc.backend.model.User
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@CrossOrigin(origins = ["http://localhost:3000"], maxAge = 3600)
@RestController
class LoginController {

    @PostMapping("/login")
    fun fetchUser(@RequestBody user: User): User? {
        return User("Shruti Yadav", "jhfhd@gmail.com", null)
    }
}