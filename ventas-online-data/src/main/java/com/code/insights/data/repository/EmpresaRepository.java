/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.code.insights.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.code.insights.data.model.Empresa;

/**
 *
 * @author e00309
 */
public interface EmpresaRepository extends JpaRepository<Empresa, Integer>{
    
}
