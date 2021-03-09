package krzysiek.codecool.ordermanager.model.dto;

import krzysiek.codecool.ordermanager.model.enums.OrderStatus;

import java.sql.Timestamp;
import java.util.Date;
import java.util.UUID;

public class OrderDto {

    public UUID orderId;
    public String name;
    public OrderStatus status;
    public Timestamp creationDate;
    public SimpleClientDto client;

}
