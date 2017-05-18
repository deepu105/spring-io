package com.springio.store.service;

import com.springio.store.domain.SubCategory;
import com.springio.store.repository.SubCategoryRepository;
import com.springio.store.repository.search.SubCategorySearchRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * Service Implementation for managing SubCategory.
 */
@Service
@Transactional
public class SubCategoryService {

    private final Logger log = LoggerFactory.getLogger(SubCategoryService.class);
    
    private final SubCategoryRepository subCategoryRepository;

    private final SubCategorySearchRepository subCategorySearchRepository;

    public SubCategoryService(SubCategoryRepository subCategoryRepository, SubCategorySearchRepository subCategorySearchRepository) {
        this.subCategoryRepository = subCategoryRepository;
        this.subCategorySearchRepository = subCategorySearchRepository;
    }

    /**
     * Save a subCategory.
     *
     * @param subCategory the entity to save
     * @return the persisted entity
     */
    public SubCategory save(SubCategory subCategory) {
        log.debug("Request to save SubCategory : {}", subCategory);
        SubCategory result = subCategoryRepository.save(subCategory);
        subCategorySearchRepository.save(result);
        return result;
    }

    /**
     *  Get all the subCategories.
     *  
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    @Transactional(readOnly = true)
    public Page<SubCategory> findAll(Pageable pageable) {
        log.debug("Request to get all SubCategories");
        Page<SubCategory> result = subCategoryRepository.findAll(pageable);
        return result;
    }

    /**
     *  Get one subCategory by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Transactional(readOnly = true)
    public SubCategory findOne(Long id) {
        log.debug("Request to get SubCategory : {}", id);
        SubCategory subCategory = subCategoryRepository.findOne(id);
        return subCategory;
    }

    /**
     *  Delete the  subCategory by id.
     *
     *  @param id the id of the entity
     */
    public void delete(Long id) {
        log.debug("Request to delete SubCategory : {}", id);
        subCategoryRepository.delete(id);
        subCategorySearchRepository.delete(id);
    }

    /**
     * Search for the subCategory corresponding to the query.
     *
     *  @param query the query of the search
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    @Transactional(readOnly = true)
    public Page<SubCategory> search(String query, Pageable pageable) {
        log.debug("Request to search for a page of SubCategories for query {}", query);
        Page<SubCategory> result = subCategorySearchRepository.search(queryStringQuery(query), pageable);
        return result;
    }
}
