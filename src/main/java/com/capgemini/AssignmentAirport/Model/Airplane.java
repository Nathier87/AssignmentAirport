package com.capgemini.AssignmentAirport.Model;

import javax.persistence.*;

@Entity
public class Airplane {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private int fuel;

    @ManyToOne
    private Airport airport;

    public Airplane() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getFuel() {
        return fuel;
    }

    public void setFuel(int fuel) {
        this.fuel = fuel;
    }

    public Airport getAirport() {
        return airport;
    }

    public void setAirport(Airport airport) {
        this.airport = airport;
    }
}
