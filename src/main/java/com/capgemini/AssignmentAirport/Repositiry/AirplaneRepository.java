package com.capgemini.AssignmentAirport.Repositiry;

import com.capgemini.AssignmentAirport.Model.Airplane;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AirplaneRepository extends JpaRepository<Airplane,Long> {

}
