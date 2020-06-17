<template>
  <div id="add-vehicle-modal" class="modal fade show" tabindex="-1" role="dialog" style="display: block; padding-right: 15px;" aria-modal="true">
        <div class="vehicle-picker-modal modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <button type="button" class="vehicle-picker-modal__close"><svg width="12" height="12">
                        <path d="M10.8,10.8L10.8,10.8c-0.4,0.4-1,0.4-1.4,0L6,7.4l-3.4,3.4c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L4.6,6L1.2,2.6
	c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0L6,4.6l3.4-3.4c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L7.4,6l3.4,3.4
	C11.2,9.8,11.2,10.4,10.8,10.8z"></path>
                    </svg>
                </button>
                <div class="vehicle-picker-modal__panel vehicle-picker-modal__panel--active">
                    <div class="vehicle-picker-modal__title card-title">Add A Vehicle</div>
                    <div class="vehicle-form vehicle-form--layout--modal">
                        <div class="vehicle-form__item vehicle-form__item--select">
                            <select class="form-control form-control-select2 select2-hidden-accessible" aria-label="Year" data-select2-id="13" tabindex="-1" aria-hidden="true">
                                <option value="none" data-select2-id="15">Select Year</option>
                                <option>2010</option>
                                <option>2011</option>
                                <option>2012</option>
                                <option>2013</option>
                                <option>2014</option>
                                <option>2015</option>
                                <option>2016</option>
                                <option>2017</option>
                                <option>2018</option>
                                <option>2019</option>
                                <option>2020</option>
                            </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="14"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-kzqu-container"><span class="select2-selection__rendered" id="select2-kzqu-container" role="textbox" aria-readonly="true" title="Select Year">Select Year</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                        </div>
                        <div class="vehicle-form__item vehicle-form__item--select">
                            <select class="form-control form-control-select2 select2-hidden-accessible" aria-label="Brand" disabled="" data-select2-id="16" tabindex="-1" aria-hidden="true">
                                <option value="none" data-select2-id="18">Select Brand</option>
                                <option>Audi</option>
                                <option>BMW</option>
                                <option>Ferrari</option>
                                <option>Ford</option>
                                <option>KIA</option>
                                <option>Nissan</option>
                                <option>Tesla</option>
                                <option>Toyota</option>
                            </select><span class="select2 select2-container select2-container--default select2-container--disabled" dir="ltr" data-select2-id="17"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="true" aria-labelledby="select2-swkn-container"><span class="select2-selection__rendered" id="select2-swkn-container" role="textbox" aria-readonly="true" title="Select Brand">Select Brand</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                        </div>
                        <div class="vehicle-form__item vehicle-form__item--select">
                            <select class="form-control form-control-select2 select2-hidden-accessible" aria-label="Model" disabled="" data-select2-id="19" tabindex="-1" aria-hidden="true">
                                <option value="none" data-select2-id="21">Select Model</option>
                                <option>Explorer</option>
                                <option>Focus S</option>
                                <option>Fusion SE</option>
                                <option>Mustang</option>
                            </select><span class="select2 select2-container select2-container--default select2-container--disabled" dir="ltr" data-select2-id="20"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="true" aria-labelledby="select2-kl1s-container"><span class="select2-selection__rendered" id="select2-kl1s-container" role="textbox" aria-readonly="true" title="Select Model">Select Model</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                        </div>
                        <div class="vehicle-form__item vehicle-form__item--select">
                            <select class="form-control form-control-select2 select2-hidden-accessible" aria-label="Engine" disabled="" data-select2-id="22" tabindex="-1" aria-hidden="true">
                                <option value="none" data-select2-id="24">Select Engine</option>
                                <option>Gas 1.6L 125 hp AT/L4</option>
                                <option>Diesel 2.5L 200 hp AT/L5</option>
                                <option>Diesel 3.0L 250 hp MT/L5</option>
                            </select><span class="select2 select2-container select2-container--default select2-container--disabled" dir="ltr" data-select2-id="23"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="true" aria-labelledby="select2-qa8x-container"><span class="select2-selection__rendered" id="select2-qa8x-container" role="textbox" aria-readonly="true" title="Select Engine">Select Engine</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                        </div>
                        <div class="vehicle-form__divider">Or</div>
                        <div class="vehicle-form__item">
                            <input type="text" class="form-control" placeholder="Enter VIN number" aria-label="VIN number">
                        </div>
                    </div>
                    <div class="vehicle-picker-modal__actions">
                        <button type="button" class="btn btn-sm btn-secondary vehicle-picker-modal__close-button">Cancel</button>
                        <button type="button" class="btn btn-sm btn-primary">Add A Vehicle</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>