/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.code.insights.service.impl;

import com.code.insights.data.bean.EmpresaBean;
import com.code.insights.data.model.Empresa;
import com.code.insights.data.repository.EmpresaRepository;
import com.code.insights.service.EmpresaService;
import com.code.insights.service.converter.EmpresaConverter;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author e00309
 */
@Service
public class EmpresaServiceImpl implements EmpresaService{
    @Autowired
    private EmpresaRepository empresaRepository;

    @Override
    public List<EmpresaBean> listAll() {
        List<Empresa> empresaList = empresaRepository.findAll();
        return new EmpresaConverter().convertList(empresaList);
    }
    
}
