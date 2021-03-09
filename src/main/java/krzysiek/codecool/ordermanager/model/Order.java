package krzysiek.codecool.ordermanager.model;

import krzysiek.codecool.ordermanager.model.enums.OrderStatus;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Date;
import java.util.UUID;

@Data
@Entity(name = "order_data")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    @Column(name = "order_id")
    private UUID orderId;
    @Column(name = "order_name")
    private String name;
    @Enumerated(EnumType.STRING)
    @Column(name = "order_status")
    private OrderStatus status;
    @Column(name = "creation_date")
    private Timestamp creationDate;

    @ManyToOne
    @JoinColumn(name="client_id", nullable=false)
    private Client client;

}
