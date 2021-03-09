package krzysiek.codecool.ordermanager.model;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;

@Data
@Entity
@Table(name = "client_data")
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    @Column(name = "client_id")
    private UUID clientId;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "company_name")
    private String companyName;
}

