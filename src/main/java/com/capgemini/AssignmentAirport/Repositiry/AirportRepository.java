package com.capgemini.AssignmentAirport.Repositiry;

import com.capgemini.AssignmentAirport.Model.Airport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AirportRepository extends JpaRepository<Airport,Long> {
}
