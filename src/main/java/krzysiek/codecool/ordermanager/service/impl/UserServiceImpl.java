package krzysiek.codecool.ordermanager.service.impl;

import krzysiek.codecool.ordermanager.model.User;
import krzysiek.codecool.ordermanager.repository.UserRepository;
import krzysiek.codecool.ordermanager.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
//    private final BCryptPasswordEncoder encoder;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
//        this.encoder = new BCryptPasswordEncoder();
    }

    @Override
    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User findByUserName(String userName) {
        return userRepository.findByUserName(userName);
    }

    @Override
    public void save(User user) {
//        user.setUserId(UUID.randomUUID());
//        user.setCreated(LocalDateTime.now());
//        user.setPassword(encoder.encode(user.getPassword()));
//        userRepository.save(user);
    }
}
