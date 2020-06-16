<template>
  <div class="card widget widget-products d-none d-lg-block">
    <div class="widget__header">
      <h4>Latest Products</h4>
    </div>
    <div class="widget-products__list">

      <div class="widget-products__item"
      v-for="(prod, i) in 6" :key="i"
      >
        <div class="widget-products__image">
          <a href="product-full.html">
            <img :src="require('~/static/images/products/product-1-64x64.jpg')" alt="" />
          </a>
        </div>
        <div class="widget-products__info">
          <div class="widget-products__name">
            <a href="product-full.html">Brandix Spark Plug Kit ASR-400</a>
          </div>
          <div class="widget-products__prices">
            <div class="widget-products__price widget-products__price--current">
              $19.00
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>
