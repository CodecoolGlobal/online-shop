package krzysiek.codecool.ordermanager.repository;

import krzysiek.codecool.ordermanager.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,String> {

    User findByUserName(String name);
}
