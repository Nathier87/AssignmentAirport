package com.capgemini.AssignmentAirport.Controllers;

import com.capgemini.AssignmentAirport.Model.Airport;
import com.capgemini.AssignmentAirport.Repositiry.AirportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/airport")
public class AirportController {
    @Autowired
    private AirportRepository airportRepository;

    @GetMapping
    public List<Airport> getAirport(){
        return airportRepository.findAll();
    }

    @PostMapping
    public void addAirport(@RequestBody Airport airport){
        airportRepository.save(airport);
    }
    @DeleteMapping
    public void delete(@PathVariable Long id){
        airportRepository.deleteById(id);
    }
}
