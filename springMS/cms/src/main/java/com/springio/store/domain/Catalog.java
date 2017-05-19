package com.springio.store.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

import com.springio.store.domain.enumeration.CatalogType;

/**
 * A Catalog.
 */

@Document(collection = "catalog")
public class Catalog implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @NotNull
    @Field("name")
    private String name;

    @Field("cat_type")
    private CatalogType catType;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public Catalog name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public CatalogType getCatType() {
        return catType;
    }

    public Catalog catType(CatalogType catType) {
        this.catType = catType;
        return this;
    }

    public void setCatType(CatalogType catType) {
        this.catType = catType;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Catalog catalog = (Catalog) o;
        if (catalog.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), catalog.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Catalog{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", catType='" + getCatType() + "'" +
            "}";
    }
}
