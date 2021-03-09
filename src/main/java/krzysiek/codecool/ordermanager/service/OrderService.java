package krzysiek.codecool.ordermanager.service;

import krzysiek.codecool.ordermanager.model.dto.OrderDto;

import java.util.List;
import java.util.UUID;

public interface OrderService {

    List<OrderDto> findAll();

    void save(OrderDto orderDto);

    void delete(UUID uuid);

}
