---
title: Spring HATEOAS
date: 2020-05-19 09:45:00 Z
---
description: Spring HATEOAS provides some APIs to ease creating REST representations that follow the HATEOAS principle when working with Spring and especially Spring MVC. The core problem it tries to address is link creation and representation assembly.

Spring HATEOAS provides some APIs to ease creating REST representations that follow the HATEOAS principle when working with Spring and especially Spring MVC. The core problem it tries to address is link creation and representation assembly.

## **Features**

* Model classes for link, resource representation models

* Link builder API to create links pointing to Spring MVC controller methods

* Support for hypermedia formats like HAL

## **Spring Boot Config**

Spring Boot will do the following:

* Configure HAL support

* Register support for [entity links](https://docs.spring.io/spring-hateoas/docs/current/reference/html/#fundamentals.obtaining-links.entity-links)

* Wire up message converter support.