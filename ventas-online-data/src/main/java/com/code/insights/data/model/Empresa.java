package com.code.insights.data.model;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by JaxKodex on 29/11/2015.
 */
@Entity
@Table(name = "empresa")
public class Empresa {
    private Integer id;
    private String nombre;
    private String direccion;
    private Date feCreaRegistro;
    private String idCreaRegistro;

    public Empresa(Integer id, String nombre, String direccion, Date feCreaRegistro, String idCreaRegistro) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.feCreaRegistro = feCreaRegistro;
        this.idCreaRegistro = idCreaRegistro;
    }

    @Id
    @Column(name = "id_empresa")
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Column(name = "de_empresa")
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Column(name = "de_direccion")
    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    @Column(name = "fe_crea_registro")
    public Date getFeCreaRegistro() {
        return feCreaRegistro;
    }

    public void setFeCreaRegistro(Date feCreaRegistro) {
        this.feCreaRegistro = feCreaRegistro;
    }

    @Column(name = "id_crea_registro")
    public String getIdCreaRegistro() {
        return idCreaRegistro;
    }

    public void setIdCreaRegistro(String idCreaRegistro) {
        this.idCreaRegistro = idCreaRegistro;
    }
}
