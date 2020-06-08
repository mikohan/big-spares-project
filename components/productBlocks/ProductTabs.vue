<template>
  <div class="product__tabs product-tabs product-tabs--layout--full">
    <ul class="product-tabs__list">
      <li class="product-tabs__item product-tabs__item--active">
        <a href="#product-tab-description">Description</a>
      </li>
      <li class="product-tabs__item">
        <a href="#product-tab-specification">Specification</a>
      </li>
      <li class="product-tabs__item">
        <a href="#product-tab-reviews">
          Reviews
          <span class="product-tabs__item-counter">3</span>
        </a>
      </li>
      <li class="product-tabs__item">
        <a href="#product-tab-analogs">Analogs</a>
      </li>
    </ul>
    <div class="product-tabs__content">
      <div
        class="product-tabs__pane product-tabs__pane--active"
        id="product-tab-description"
      >
        <div class="typography">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            fermentum, diam non iaculis finibus, ipsum arcu sollicitudin dolor,
            ut cursus sapien sem sed purus. Donec vitae fringilla tortor, sed
            fermentum nunc. Suspendisse sodales turpis dolor, at rutrum dolor
            tristique id. Quisque pellentesque ullamcorper felis, eget gravida
            mi elementum a. Maecenas consectetur volutpat ante, sit amet
            molestie urna luctus in. Nulla eget dolor semper urna malesuada
            dictum. Duis eleifend pellentesque dui et finibus. Pellentesque
            dapibus dignissim augue. Etiam odio est, sodales ac aliquam id,
            iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar,
            purus dui interdum tellus, sed dapibus mi mauris vitae tellus.
          </p>
          <h4>Etiam lacus lacus mollis in mattis</h4>
          <p>
            Praesent mattis eget augue ac elementum. Maecenas vel ante ut enim
            mollis accumsan. Vestibulum vel eros at mi suscipit feugiat. Sed
            tortor purus, vulputate et eros a, rhoncus laoreet orci. Proin
            sapien neque, commodo at porta in, vehicula eu elit. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae; Curabitur porta vulputate augue, at sollicitudin nisl
            molestie eget.
          </p>
          <p>
            Nunc sollicitudin, nunc id accumsan semper, libero nunc aliquet
            nulla, nec pretium ipsum risus ac neque. Morbi eu facilisis purus.
            Quisque mi tortor, cursus in nulla ut, laoreet commodo quam.
            Pellentesque et ornare sapien. In ac est tempus urna tincidunt
            finibus. Integer erat ipsum, tristique ac lobortis sit amet, dapibus
            sit amet purus. Nam sed lorem nisi. Vestibulum ultrices tincidunt
            turpis, sit amet fringilla odio scelerisque non.
          </p>
        </div>
      </div>
      <div class="product-tabs__pane" id="product-tab-specification">
        <div class="spec">
          <div class="spec__section">
            <h4 class="spec__section-title">General</h4>
            <div class="spec__row">
              <div class="spec__name">Material</div>
              <div class="spec__value">Aluminium, Plastic</div>
            </div>
            <div class="spec__row">
              <div class="spec__name">Engine Type</div>
              <div class="spec__value">Brushless</div>
            </div>
            <div class="spec__row">
              <div class="spec__name">Battery Voltage</div>
              <div class="spec__value">18 V</div>
            </div>
            <div class="spec__row">
              <div class="spec__name">Battery Type</div>
              <div class="spec__value">Li-lon</div>
            </div>
            <div class="spec__row">
              <div class="spec__name">Number of Speeds</div>
              <div class="spec__value">2</div>
            </div>
            <div class="spec__row">
              <div class="spec__name">Charge Time</div>
              <div class="spec__value">1.08 h</div>
            </div>
            <div class="spec__row">
              <div class="spec__name">Weight</div>
              <div class="spec__value">1.5 kg</div>
            </div>
          </div>
          <div class="spec__section">
            <h4 class="spec__section-title">Dimensions</h4>
            <div class="spec__row">
              <div class="spec__name">Length</div>
              <div class="spec__value">99 mm</div>
            </div>
            <div class="spec__row">
              <div class="spec__name">Width</div>
              <div class="spec__value">207 mm</div>
            </div>
            <div class="spec__row">
              <div class="spec__name">Height</div>
              <div class="spec__value">208 mm</div>
            </div>
          </div>
          <div class="spec__disclaimer">
            Information on technical characteristics, the delivery set, the
            country of manufacture and the appearance of the goods is for
            reference only and is based on the latest information available at
            the time of publication.
          </div>
        </div>
      </div>
      <div class="product-tabs__pane" id="product-tab-reviews">
        <div class="reviews-view">
          <div class="reviews-view__list">
            <div class="reviews-list">
              <ol class="reviews-list__content">
                <li class="reviews-list__item">
                  <div class="review">
                    <div class="review__body">
                      <div class="review__avatar">
                        <img src="images/avatars/avatar-1-42x42.jpg" alt="" />
                      </div>
                      <div class="review__meta">
                        <div class="review__author">
                          Samantha Smith
                        </div>
                        <div class="review__date">
                          27 May, 2018
                        </div>
                      </div>
                      <div class="review__rating">
                        <div class="rating">
                          <div class="rating__body">
                            <div
                              class="rating__star rating__star--active"
                            ></div>
                            <div
                              class="rating__star rating__star--active"
                            ></div>
                            <div
                              class="rating__star rating__star--active"
                            ></div>
                            <div
                              class="rating__star rating__star--active"
                            ></div>
                            <div class="rating__star"></div>
                          </div>
                        </div>
                      </div>
                      <div class="review__content typography">
                        Phasellus id mattis nulla. Mauris velit nisi, imperdiet
                        vitae sodales in, maximus ut lectus. Vivamus commodo
                        scelerisque lacus, at porttitor dui iaculis id.
                        Curabitur imperdiet ultrices fermentum.
                      </div>
                    </div>
                  </div>
                </li>
                <li class="reviews-list__item">
                  <div class="review">
                    <div class="review__body">
                      <div class="review__avatar">
                        <img src="images/avatars/avatar-2-42x42.jpg" alt="" />
                      </div>
                      <div class="review__meta">
                        <div class="review__author">
                          Adam Taylor
                        </div>
                        <div class="review__date">
                          12 April, 2018
                        </div>
                      </div>
                      <div class="review__rating">
                        <div class="rating">
                          <div class="rating__body">
                            <div
                              class="rating__star rating__star--active"
                            ></div>
                            <div
                              class="rating__star rating__star--active"
                            ></div>
                            <div
                              class="rating__star rating__star--active"
                            ></div>
                            <div class="rating__star"></div>
                            <div class="rating__star"></div>
                          </div>
                        </div>
                      </div>
                      <div class="review__content typography">
                        Aenean non lorem nisl. Duis tempor sollicitudin orci,
                        eget tincidunt ex semper sit amet. Nullam neque justo,
                        sodales congue feugiat ac, facilisis a augue. Donec
                        tempor sapien et fringilla facilisis. Nam maximus
                        consectetur diam. Nulla ut ex mollis, volutpat tellus
                        vitae, accumsan ligula.
                      </div>
                    </div>
                  </div>
                </li>
                <li class="reviews-list__item">
                  <div class="review">
                    <div class="review__body">
                      <div class="review__avatar">
                        <img src="images/avatars/avatar-3-42x42.jpg" alt="" />
                      </div>
                      <div class="review__meta">
                        <div class="review__author">
                          Helena Garcia
                        </div>
                        <div class="review__date">
                          2 January, 2018
                        </div>
                      </div>
                      <div class="review__rating">
                        <div class="rating">
                          <div class="rating__body">
                            <div
                              class="rating__star rating__star--active"
                            ></div>
                            <div
                              class="rating__star rating__star--active"
                            ></div>
                            <div
                              class="rating__star rating__star--active"
                            ></div>
                            <div
                              class="rating__star rating__star--active"
                            ></div>
                            <div
                              class="rating__star rating__star--active"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div class="review__content typography">
                        Duis ac lectus scelerisque quam blandit egestas.
                        Pellentesque hendrerit eros laoreet suscipit ultrices.
                      </div>
                    </div>
                  </div>
                </li>
              </ol>
              <div class="reviews-list__pagination">
                <ul class="pagination">
                  <li class="page-item disabled">
                    <a
                      class="page-link page-link--with-arrow"
                      href=""
                      aria-label="Previous"
                    >
                      <span
                        class="page-link__arrow page-link__arrow--left"
                        aria-hidden="true"
                        ><svg width="7" height="11">
                          <path
                            d="M6.7,0.3L6.7,0.3c-0.4-0.4-0.9-0.4-1.3,0L0,5.5l5.4,5.2c0.4,0.4,0.9,0.3,1.3,0l0,0c0.4-0.4,0.4-1,0-1.3l-4-3.9l4-3.9C7.1,1.2,7.1,0.6,6.7,0.3z"
                          />
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">1</a>
                  </li>
                  <li class="page-item active" aria-current="page">
                    <span class="page-link">
                      2
                      <span class="sr-only">(current)</span>
                    </span>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">3</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">4</a>
                  </li>
                  <li class="page-item page-item--dots">
                    <div class="pagination__dots"></div>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">9</a>
                  </li>
                  <li class="page-item">
                    <a
                      class="page-link page-link--with-arrow"
                      href=""
                      aria-label="Next"
                    >
                      <span
                        class="page-link__arrow page-link__arrow--right"
                        aria-hidden="true"
                        ><svg width="7" height="11">
                          <path
                            d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
	C-0.1,9.8-0.1,10.4,0.3,10.7z"
                          />
                        </svg>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <form class="reviews-view__form">
            <h3 class="reviews-view__header">Write A Review</h3>
            <div class="row">
              <div class="col-xxl-8 col-xl-10 col-lg-9 col-12">
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label for="review-stars">Review Stars</label>
                    <select id="review-stars" class="form-control">
                      <option>5 Stars Rating</option>
                      <option>4 Stars Rating</option>
                      <option>3 Stars Rating</option>
                      <option>2 Stars Rating</option>
                      <option>1 Stars Rating</option>
                    </select>
                  </div>
                  <div class="form-group col-md-4">
                    <label for="review-author">Your Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="review-author"
                      placeholder="Your Name"
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="review-email">Email Address</label>
                    <input
                      type="text"
                      class="form-control"
                      id="review-email"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="review-text">Your Review</label>
                  <textarea
                    class="form-control"
                    id="review-text"
                    rows="6"
                  ></textarea>
                </div>
                <div class="form-group mb-0 mt-4">
                  <button type="submit" class="btn btn-primary">
                    Post Your Review
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="product-tabs__pane" id="product-tab-analogs">
        <table class="analogs-table">
          <thead>
            <tr>
              <th class="analogs-table__column analogs-table__column--name">
                Name
              </th>
              <th class="analogs-table__column analogs-table__column--rating">
                Rating
              </th>
              <th class="analogs-table__column analogs-table__column--vendor">
                Vendor
              </th>
              <th class="analogs-table__column analogs-table__column--price">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="analogs-table__column analogs-table__column--name">
                <a href="" class="analogs-table__product-name"
                  >Sunset Brake Kit</a
                ><br />
                <div class="analogs-table__sku" data-title="SKU">
                  SSX-780B390-S
                </div>
              </td>
              <td class="analogs-table__column analogs-table__column--rating">
                <div class="analogs-table__rating">
                  <div class="analogs-table__rating-stars">
                    <div class="rating">
                      <div class="rating__body">
                        <div class="rating__star rating__star--active"></div>
                        <div class="rating__star rating__star--active"></div>
                        <div class="rating__star rating__star--active"></div>
                        <div class="rating__star rating__star--active"></div>
                        <div class="rating__star"></div>
                      </div>
                    </div>
                  </div>
                  <div class="analogs-table__rating-label">
                    10 Reviews
                  </div>
                </div>
              </td>
              <td
                class="analogs-table__column analogs-table__column--vendor"
                data-title="Vendor"
              >
                Sunset
                <div class="analogs-table__country">
                  (Germany)
                </div>
              </td>
              <td class="analogs-table__column analogs-table__column--price">
                $1259.00
              </td>
            </tr>
            <tr>
              <td class="analogs-table__column analogs-table__column--name">
                <a href="" class="analogs-table__product-name"
                  >Specter Brake Kit</a
                ><br />
                <div class="analogs-table__sku" data-title="SKU">
                  SCT-123A380-S
                </div>
              </td>
              <td class="analogs-table__column analogs-table__column--rating">
                <div class="analogs-table__rating">
                  <div class="analogs-table__rating-stars">
                    <div class="rating">
                      <div class="rating__body">
                        <div class="rating__star rating__star--active"></div>
                        <div class="rating__star rating__star--active"></div>
                        <div class="rating__star rating__star--active"></div>
                        <div class="rating__star rating__star--active"></div>
                        <div class="rating__star rating__star--active"></div>
                      </div>
                    </div>
                  </div>
                  <div class="analogs-table__rating-label">
                    34 Reviews
                  </div>
                </div>
              </td>
              <td
                class="analogs-table__column analogs-table__column--vendor"
                data-title="Vendor"
              >
                Specter
                <div class="analogs-table__country">(China)</div>
              </td>
              <td class="analogs-table__column analogs-table__column--price">
                $799.00
              </td>
            </tr>
            <tr>
              <td class="analogs-table__column analogs-table__column--name">
                <a href="" class="analogs-table__product-name">Brake Kit</a
                ><br />
                <div class="analogs-table__sku" data-title="SKU">
                  NNO-120K643-S
                </div>
              </td>
              <td class="analogs-table__column analogs-table__column--rating">
                <div class="analogs-table__rating">
                  <div class="analogs-table__rating-stars">
                    <div class="rating">
                      <div class="rating__body">
                        <div class="rating__star rating__star--active"></div>
                        <div class="rating__star rating__star--active"></div>
                        <div class="rating__star rating__star--active"></div>
                        <div class="rating__star"></div>
                        <div class="rating__star"></div>
                      </div>
                    </div>
                  </div>
                  <div class="analogs-table__rating-label">
                    7 Reviews
                  </div>
                </div>
              </td>
              <td
                class="analogs-table__column analogs-table__column--vendor"
                data-title="Vendor"
              >
                No Name
                <div class="analogs-table__country">(China)</div>
              </td>
              <td class="analogs-table__column analogs-table__column--price">
                $569.00
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
