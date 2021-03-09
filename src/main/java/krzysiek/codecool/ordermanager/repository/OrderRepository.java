package krzysiek.codecool.ordermanager.repository;

import krzysiek.codecool.ordermanager.model.Order;
import krzysiek.codecool.ordermanager.model.dto.OrderDto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface OrderRepository extends JpaRepository<Order, UUID> {

    List<Order> findAll();

    void save(OrderDto orderDto);

//    void delete(UUID uuid);

}
