package krzysiek.codecool.ordermanager.service;

import krzysiek.codecool.ordermanager.model.Client;
import krzysiek.codecool.ordermanager.model.dto.ClientDto;
import krzysiek.codecool.ordermanager.model.dto.SimpleClientDto;

import java.util.List;
import java.util.UUID;

public interface ClientService {

    List<Client> findAllClients();

    Client findByName(String userName);

    Client findById(UUID id);

    void save(ClientDto clientDto);

    boolean checkIfExists(UUID id);

    SimpleClientDto getSimpleClientDto(Client client);

    List<SimpleClientDto> getSimpleClientDtos();

}
