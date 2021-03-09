package krzysiek.codecool.ordermanager.service.impl;

import krzysiek.codecool.ordermanager.model.Client;
import krzysiek.codecool.ordermanager.model.Order;
import krzysiek.codecool.ordermanager.model.dto.ClientDto;
import krzysiek.codecool.ordermanager.model.dto.OrderDto;
import krzysiek.codecool.ordermanager.model.dto.SimpleClientDto;
import krzysiek.codecool.ordermanager.model.enums.OrderStatus;
import krzysiek.codecool.ordermanager.repository.ClientRepository;
import krzysiek.codecool.ordermanager.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class ClientServiceImpl implements ClientService {

    private final ClientRepository clientRepository;
//    private final BCryptPasswordEncoder encoder;

    @Autowired
    public ClientServiceImpl(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
//        this.encoder = new BCryptPasswordEncoder();
    }


    @Override
    public SimpleClientDto getSimpleClientDto(Client client) {
        SimpleClientDto dto = new SimpleClientDto();

        dto.id = client.getClientId().toString();
        dto.companyName = client.getCompanyName();

        return dto;
    }

    @Override
    public List<SimpleClientDto> getSimpleClientDtos() {
        return clientRepository.findAll().stream().map(this::getSimpleClientDto).collect(Collectors.toList());
    }


    @Override
    public List<Client> findAllClients() {
        return clientRepository.findAll();
    }

    @Override
    public Client findByName(String userName) {
        return null;
    }

    @Override
    public Client findById(UUID id) {
        return clientRepository.findById(id).
                orElseThrow(() -> new IllegalArgumentException("No such client exists in the database!"));
    }


    @Override
    public boolean checkIfExists(UUID id) {
        return clientRepository.existsById(id);
    }

    private Client createRegularClient(ClientDto clientDto) {
        Client client = new Client();
        client.setClientId(UUID.randomUUID());
        client.setFirstName(clientDto.firstName);
        client.setLastName(clientDto.lastName);
        client.setCompanyName(clientDto.companyName);
        return client;
    }

    @Override
    public void save(ClientDto clientDto) {
        if (!(clientRepository.existsClientByCompanyName(clientDto.companyName))) {
            clientRepository.save(createRegularClient(clientDto));
        } else {
            throw new IllegalArgumentException("This company has already been registered!");
        }
    }
}
        //        user.setUserId(UUID.randomUUID());
//        user.setCreated(LocalDateTime.now());
//        user.setPassword(encoder.encode(user.getPassword()));
//        userRepository.save(user);

