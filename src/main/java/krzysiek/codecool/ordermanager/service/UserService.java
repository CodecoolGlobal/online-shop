package krzysiek.codecool.ordermanager.service;

import krzysiek.codecool.ordermanager.model.User;

import java.util.List;

public interface UserService {

    List<User> findAllUsers();

    User findByUserName(String userName);

    void save(User user);

}
