package krzysiek.codecool.ordermanager.controller;

import krzysiek.codecool.ordermanager.model.dto.OrderDto;
import krzysiek.codecool.ordermanager.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/order")
public class OrderController {

    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping()
    public List<OrderDto> returnAllUsers() {
        return orderService.findAll();
    }

    @PostMapping()
    public void save(@RequestBody OrderDto orderDto) {
        this.orderService.save(orderDto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") UUID id) {
        this.orderService.delete(id);
    }
}
