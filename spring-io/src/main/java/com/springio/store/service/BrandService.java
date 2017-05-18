package com.springio.store.service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.springio.store.domain.Brand;
import com.springio.store.repository.BrandRepository;
import com.springio.store.repository.search.BrandSearchRepository;

import static org.elasticsearch.index.query.QueryBuilders.queryStringQuery;

/**
 * Service Implementation for managing Brand.
 */
@Service
@Transactional
public class BrandService {

    private final Logger log = LoggerFactory.getLogger(BrandService.class);

    private final BrandRepository brandRepository;

    private final BrandSearchRepository brandSearchRepository;

    public BrandService(BrandRepository brandRepository, BrandSearchRepository brandSearchRepository) {
        this.brandRepository = brandRepository;
        this.brandSearchRepository = brandSearchRepository;
    }

    /**
     * Save a brand.
     *
     * @param brand the entity to save
     * @return the persisted entity
     */
    public Brand save(Brand brand) {
        log.debug("Request to save Brand : {}", brand);
        Brand result = brandRepository.save(brand);
        brandSearchRepository.save(result);
        return result;
    }

    /**
     *  Get all the brands.
     *
     *  @return the list of entities
     */
    @Transactional(readOnly = true)
    public List<Brand> findAll() {
        log.debug("Request to get all Brands");
        List<Brand> result = brandRepository.findByUserIsCurrentUser();

        return result;
    }

    /**
     *  Get one brand by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Transactional(readOnly = true)
    public Brand findOne(Long id) {
        log.debug("Request to get Brand : {}", id);
        Brand brand = brandRepository.findOne(id);
        return brand;
    }

    /**
     *  Delete the  brand by id.
     *
     *  @param id the id of the entity
     */
    public void delete(Long id) {
        log.debug("Request to delete Brand : {}", id);
        brandRepository.delete(id);
        brandSearchRepository.delete(id);
    }

    /**
     * Search for the brand corresponding to the query.
     *
     *  @param query the query of the search
     *  @return the list of entities
     */
    @Transactional(readOnly = true)
    public List<Brand> search(String query) {
        log.debug("Request to search Brands for query {}", query);
        return StreamSupport
            .stream(brandSearchRepository.search(queryStringQuery(query)).spliterator(), false)
            .collect(Collectors.toList());
    }
}
