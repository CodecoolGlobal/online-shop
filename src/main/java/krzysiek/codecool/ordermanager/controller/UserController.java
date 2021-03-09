package krzysiek.codecool.ordermanager.controller;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import krzysiek.codecool.ordermanager.model.User;
import krzysiek.codecool.ordermanager.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;
import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(value = "login", method=RequestMethod.POST)
    public String login(@RequestBody Map<String, String> json) throws ServletException {
        if (json.get("username") == null || json.get("password") == null) {
            throw new ServletException("Please fill in username and password");
        }
        String userName = json.get("username");
        String password = json.get("password");

        User user = userService.findByUserName(userName);

        if(user == null) {
            throw new ServletException ("User name not found.");
        }

        String pwd = user.getPassword();

        if (!password.equals(pwd)) {
            throw new ServletException("Invalid login. Please check your username and password");
        }
        return Jwts.builder().setSubject(userName).claim("roles","user").setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.ES256, "secretkey").compact();
    }

    @GetMapping("/findAll")
    public List<User> returnAllUsers() {
        return userService.findAllUsers();
    }

    @PostMapping("/register")
    public void registerUser(@RequestBody User user) {
        userService.save(user);
    }
}
