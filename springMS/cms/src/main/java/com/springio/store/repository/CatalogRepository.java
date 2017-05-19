package com.springio.store.repository;

import com.springio.store.domain.Catalog;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Catalog entity.
 */
@SuppressWarnings("unused")
public interface CatalogRepository extends MongoRepository<Catalog,String> {

}
