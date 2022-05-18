import React from 'react'
import LocationFilter from '/components/productlist/locationFilter'
import RangeFilter from '/components/productlist/rangeFilter'
import ProdutDetailsFilter from '/components/productlist/productDetailsFilter'

const ProductList = () => {
  return (
    <section class="py-3 py-lg-4">
    <div class="container">
      <div class="row m-0 justify-content-between align-items-center">
        <div class="col-12 col-lg-2 p-0 inner_fSelect">
          <select class="form-select" aria-label="Default select example">
            <option selected>Category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="col-12 col-lg-3 product_Tab">
          <ul class="nav nav-tabs card-header-tabs" data-bs-tabs="tabs">
            <li class="nav-item">
                <a class="nav-link active" aria-current="true" data-bs-toggle="tab" href="#buy">Buy</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#borrow">Borrow</a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-lg-4 ex_filter">
          <div class="input-group resinput position-relative">
            <input type="search" class="form-control res_none w-25 me-4 pt-0 pb-0" placeholder="Username" aria-label="Username" />
            <button class="input-group-text res_none"><i class="fas fa-search"></i></button>
            <select class="form-select res_width border-0 pt-0 pb-0" aria-label="Default select example">
              <option selected>Sort by</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <button class="btn btn-outline-warning btn-sm d-lg-none" onclick="myFunction()"><i class="fas fa-filter"></i> Filter</button>
          </div>
        </div>
      </div>
      <div class="row m-0 mt-4 mt-lg-5">
        <div class="col-12 col-lg-3">
          <div class="leftpart pe-lg-4 sticky-top" id="filterDiv">
            <button type="button" class="btn-close btn-close btn-sm ml-auto d-lg-none" disabled aria-label="Close"></button>
            <div class="d-lg-none position-relative">
              <input type="search" class="form-control" placeholder="Search" />
              <button class="input-group-text res_none"><i class="fas fa-search"></i></button>
            </div>
            <h6 class="mb-3">Filter</h6>
            <LocationFilter />
            {/* <RangeFilter/> */}
            <ProdutDetailsFilter/>
           
          </div>
        </div>

        <div class="card border-0 col-12 ps-lg-4 col-lg-9 res_padding">
            <div class="bredcamp">
              <div>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb  mb-0">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Mobiles</li>
                  </ol>
                </nav>
              </div>
              <div class="pro_Count">
                <p><b>23</b> products are available in your locality</p>
              </div>
            </div>
            <div class="card-body tab-content p-0 pt-4 pb-4">
                <div class="tab-pane active" id="buy">
                  <div class="row m-0">
                    <div class="col-12 col-lg-6 mb-3 plr-3">
                      <a href="product_details.html">
                        <div class="card">
                          <div class="position-relative">
                            <img src="./img/item_1.png" class="card-img-top" alt="..." />
                            <div class="like like_active">
                              <i class="fas fa-heart"></i>
                            </div>
                          </div>
                          <div class="card-body">
                            <h5 class="card-title">Price: INR <span>30,000</span></h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div class="user_name mt-3">
                              <p>Amit Shah</p>
                              <p><small>Ramrajatala</small> | <small>July, 2021</small></p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div class="col-12 col-lg-6 mb-3 plr-3">
                      <a href="product_details.html">
                        <div class="card">
                          <div class="position-relative">
                            <img src="./img/item_1.png" class="card-img-top" alt="..." />
                            <div class="like">
                              <i class="fas fa-heart"></i>
                            </div>
                          </div>
                          <div class="card-body">
                            <h5 class="card-title">Price: INR <span>30,000</span></h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div class="user_name mt-3">
                              <p>Amit Shah</p>
                              <p><small>Ramrajatala</small> | <small>July, 2021</small></p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div class="col-12 col-lg-6 mb-3 plr-3">
                      <a href="product_details.html">
                        <div class="card">
                          <div class="position-relative">
                            <img src="./img/item_1.png" class="card-img-top" alt="..." />
                            <div class="like">
                              <i class="fas fa-heart"></i>
                            </div>
                          </div>
                          <div class="card-body">
                            <h5 class="card-title">Price: INR <span>30,000</span></h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div class="user_name mt-3">
                              <p>Amit Shah</p>
                              <p><small>Ramrajatala</small> | <small>July, 2021</small></p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div class="col-12 col-lg-6 mb-3 plr-3">
                      <a href="product_details.html">
                        <div class="card">
                          <div class="position-relative">
                            <img src="./img/item_1.png" class="card-img-top" alt="..." />
                            <div class="like">
                              <i class="fas fa-heart"></i>
                            </div>
                          </div>
                          <div class="card-body">
                            <h5 class="card-title">Price: INR <span>30,000</span></h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div class="user_name mt-3">
                              <p>Amit Shah</p>
                              <p><small>Ramrajatala</small> | <small>July, 2021</small></p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div class="col-12 col-lg-6 mb-3 plr-3">
                      <a href="product_details.html">
                        <div class="card">
                          <div class="position-relative">
                            <img src="./img/item_1.png" class="card-img-top" alt="..." />
                            <div class="like">
                              <i class="fas fa-heart"></i>
                            </div>
                          </div>
                          <div class="card-body">
                            <h5 class="card-title">Price: INR <span>30,000</span></h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div class="user_name mt-3">
                              <p>Amit Shah</p>
                              <p><small>Ramrajatala</small> | <small>July, 2021</small></p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="col-12 text-center">
                    <a href="javascript:void(0);" class="load_more">See More <img src="./img/load_more.svg" width="20px" /></a>
                  </div>
                </div>
                <div class="tab-pane" id="borrow">
                    <p class="card-text text-center py-5">No Data</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ProductList