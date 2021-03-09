package krzysiek.codecool.ordermanager.controller;

import krzysiek.codecool.ordermanager.model.Client;
import krzysiek.codecool.ordermanager.model.dto.ClientDto;
import krzysiek.codecool.ordermanager.model.dto.OrderDto;
import krzysiek.codecool.ordermanager.model.dto.SimpleClientDto;
import krzysiek.codecool.ordermanager.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/client")
public class ClientController {

    private final ClientService clientService;

    @Autowired
    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping()
    public List<Client> returnAllUsers() {
        return clientService.findAllClients();
    }

    @GetMapping("/{id}")
    public Client returnUser(@PathVariable("id") UUID id) {
        return clientService.findById(id);
    }

    @GetMapping("/simple")
    public List<SimpleClientDto> returnSimpleUser() {
        return clientService.getSimpleClientDtos();
    }

    @PostMapping()
    public void save(@RequestBody ClientDto clientDto) {
        this.clientService.save(clientDto);
    }
}
