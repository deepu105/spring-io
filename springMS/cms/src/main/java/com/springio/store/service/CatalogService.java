package com.springio.store.service;

import com.springio.store.domain.Catalog;
import com.springio.store.repository.CatalogRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Service Implementation for managing Catalog.
 */
@Service
public class CatalogService {

    private final Logger log = LoggerFactory.getLogger(CatalogService.class);
    
    private final CatalogRepository catalogRepository;

    public CatalogService(CatalogRepository catalogRepository) {
        this.catalogRepository = catalogRepository;
    }

    /**
     * Save a catalog.
     *
     * @param catalog the entity to save
     * @return the persisted entity
     */
    public Catalog save(Catalog catalog) {
        log.debug("Request to save Catalog : {}", catalog);
        Catalog result = catalogRepository.save(catalog);
        return result;
    }

    /**
     *  Get all the catalogs.
     *  
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    public Page<Catalog> findAll(Pageable pageable) {
        log.debug("Request to get all Catalogs");
        Page<Catalog> result = catalogRepository.findAll(pageable);
        return result;
    }

    /**
     *  Get one catalog by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    public Catalog findOne(String id) {
        log.debug("Request to get Catalog : {}", id);
        Catalog catalog = catalogRepository.findOne(id);
        return catalog;
    }

    /**
     *  Delete the  catalog by id.
     *
     *  @param id the id of the entity
     */
    public void delete(String id) {
        log.debug("Request to delete Catalog : {}", id);
        catalogRepository.delete(id);
    }
}
