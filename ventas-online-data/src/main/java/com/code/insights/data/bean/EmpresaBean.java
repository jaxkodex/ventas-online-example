package com.code.insights.data.bean;

import java.util.Date;

/**
 * Created by JaxKodex on 29/11/2015.
 */
public class EmpresaBean {
    private Integer id;
    private String nombre;
    private String direccion;
    private Date feCreaRegistro;
    private String idCreaRegistro;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public Date getFeCreaRegistro() {
        return feCreaRegistro;
    }

    public void setFeCreaRegistro(Date feCreaRegistro) {
        this.feCreaRegistro = feCreaRegistro;
    }

    public String getIdCreaRegistro() {
        return idCreaRegistro;
    }

    public void setIdCreaRegistro(String idCreaRegistro) {
        this.idCreaRegistro = idCreaRegistro;
    }
}
