package krzysiek.codecool.ordermanager.repository;

import krzysiek.codecool.ordermanager.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ClientRepository extends JpaRepository<Client, UUID> {

    boolean existsClientByCompanyName(String companyName);



}
