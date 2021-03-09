package krzysiek.codecool.ordermanager.service.impl;

import krzysiek.codecool.ordermanager.model.Order;
import krzysiek.codecool.ordermanager.model.dto.OrderDto;
import krzysiek.codecool.ordermanager.model.enums.OrderStatus;
import krzysiek.codecool.ordermanager.repository.OrderRepository;
import krzysiek.codecool.ordermanager.service.ClientService;
import krzysiek.codecool.ordermanager.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;

    private final ClientService clientService;

    @Autowired
    public OrderServiceImpl(OrderRepository orderRepository,
                            ClientService clientService) {
        this.orderRepository = orderRepository;
        this.clientService = clientService;
    }

    @Override
    public List<OrderDto> findAll() {
        List<Order> orders = this.orderRepository.findAll();
        List<OrderDto> orderDtos = new ArrayList();
        for (Order order : orders) {
            orderDtos.add(createOrderDto(order));
        }
        return orderDtos;
    }

    private OrderDto createOrderDto(Order order) {
        OrderDto orderDto = new OrderDto();
        orderDto.orderId = order.getOrderId();
        orderDto.name = order.getName();
        if (order.getCreationDate() == null) {
            order.setCreationDate(new Timestamp(new Date().getTime()));
        }
        orderDto.creationDate = order.getCreationDate();
        orderDto.status = order.getStatus();
        orderDto.client = clientService.getSimpleClientDto(order.getClient());

        return orderDto;
    }

    private Order createRegularOrder(OrderDto orderDto) {
        Order order = new Order();
        order.setOrderId(orderDto.orderId);
        order.setName(orderDto.name);
        order.setStatus(OrderStatus.START);
        order.setCreationDate(new Timestamp(new Date().getTime()));
        order.setClient(clientService.findById(UUID.fromString(orderDto.client.id)));
        return order;
    }

    public void save(OrderDto orderDto) {
        if (clientService.checkIfExists(UUID.fromString(orderDto.client.id))) {
            orderRepository.save(createRegularOrder(orderDto));
        } else {
            throw new IllegalArgumentException("Client does no exist");
        }
    }

    @Override
    public void delete(UUID id) {
        orderRepository.deleteById(id);
    }
}

