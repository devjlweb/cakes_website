class MyProducts extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `


  <div class="container">
    <div class="row">
      <div class="col-md-5">
        <nav>
          <div class="nav nav-tabs" role="tablist">
            <button type="button" id="tabButtons-1" class="nav-item nav-link active" data-bs-toggle="tab" data-bs-target="#tabButtons-pane-1" role="tab" aria-controls="tabButtons-pane-1" aria-selected="true">Cakes</button>
            <button type="button" id="tabButtons-2" class="nav-item nav-link" data-bs-toggle="tab" data-bs-target="#tabButtons-pane-2" role="tab" aria-controls="tabButtons-pane-2" aria-selected="false">Cupcakes</button>
            <button type="button" id="tabButtons-3" class="nav-item nav-link" data-bs-toggle="tab" data-bs-target="#tabButtons-pane-3" role="tab" aria-controls="tabButtons-pane-3" aria-selected="false">Brownies</button>
          </div>
        </nav>
        <div class="tab-content">
          <div id="tabButtons-pane-1" class="tab-pane active" role="tabpanel" aria-labelledby="tabButtons-1">
          
           <!-- Product Form Start -->

                <div class="input-group mt-3 ">
                  <span class="input-group-text" >Flavours</span>
                  <select id="numSelector" class="form-select" aria-label="Default select" name="product" aria-describedby="select" form="productForm">
                    <option value="1">Choose</option>
                    <option value="chocolateIndulgence">Chocolate Indulgence</option>
                    <option value="cappuccinoCreme">Cappuccino Creme</option>
                    <option value="redVelvet">Red Velvet</option>
                    <option value="limoncello">Limoncello</option>
                    <option value="yemaCaramel">Yema Caramel</option>
                    <option value="chocoMochaCrunch">Choco Mocha Crunch</option>
                    <option value="blackForest">Black Forest</option>
                    <option value="carrot">Carrot</option>
                    <option value="purpleYam">Purple Yam</option>
                    <option value="pandan">Pandan</option>
                    <option value="rockyRoad">Rocky Road</option>
                    <option value="strawberry">Strawberry</option>
                    <option value="sansrival">Sansrival</option>
                  </select>
                </div>
               <div class="row">
                <div class="input-group-sm mt-3 col-md-6">
                  <span class="input-group-text" id="select">Size</span>
                  <select id="priceSelector" class="form-select" name="size" aria-label="Default select" aria-describedby="select" form="productForm">
                    <option value="0size">Choose</option>
                    <option value="1size">7" (6-8) Serving</option>
                    <option value="2size">9" (8-12) Serving</option>
                    <option value="3size">10" (12-16) Serving</option>
                    <option value="4size">12x8" (14-18) Serving</option>
                    <option value="5size">12" (16-20) Serving</option>
                    <option value="6size">14" (25-30) Serving</option>
                  </select>
                </div>
                <div class="mt-3 input-group-sm col-md-3 offset-md-3">
                  <input type="number" id="productQty" name="Qty"  class="form-control" form="productForm">
                  <p class="float-end">Qty</p>
                </div>  
              </div>

              <form action="mailto:devjlweb@gmail.com" id="productForm" method="post" enctype="text/plain">

              <div class="row">
              <div class="col-12 col-sm-6">
                <div class="mb-3">
                  <div class="input-group">
                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                    <input type="text" id="name" class="form-control" name="name" placeholder="Name" required>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="mb-3">
                  <div class="input-group">
                    <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                    <input type="email" id="email" class="form-control" name="email" placeholder="example@email.com" required>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-sm-6">
                <div class="mb-3">
                  <div class="input-group">
                    <span class="input-group-text"><i class="fas fa-phone"></i></span>
                    <input type="tel" id="telephone" class="form-control" name="telephone" placeholder="0123456789">
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="mb-3">
                    <div class="form-file">
                      <input type="file" class="form-control" id="inputFile">
                    </div>
                  
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message:</label>
              <div class="input-group">
                <span class="input-group-text"><i class="fas fa-pencil-alt"></i></span>
                <textarea id="message" class="form-control" name="message" rows="3" placeholder="Write your message here..."></textarea>
              </div>
            </div>
             <button type="submit" class="btn btn-outline-dark">Submit</button>
              </form> <!----------------- End of Form ----------------------->
          </div>
          <div id="tabButtons-pane-2" class="tab-pane" role="tabpanel" aria-labelledby="tabButtons-2">
            <p>Panel 2</p>
          </div>
          <div id="tabButtons-pane-3" class="tab-pane" role="tabpanel" aria-labelledby="tabButtons-3">
            <p>Panel 3</p>
          </div>      
      </div> <!-- col end -->
    </div> <!-- row end -->

    <!-- START OF PRODUCT CARD -->

    <div class="col-md-5 offset-md-2">
      <div class=" colors" id="chocolateIndulgence">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="card" style="width: 20rem;">
                  <img class="card-img-top" src="images/cake-ci.png" alt="Card image cap">
                  <div class="card-block">
                    <h4 class="card-title">Chocolate Indulgence</h4>
                    <p  class="card-text a1size">Price: $50.00 /pc</p>
                    <p  class="card-text a2size">Price: $70.00 /pc</p>
                    <p  class="card-text a3size">Price: $90.00 /pc</p>
                    <p  class="card-text a4size">Price: $110.00 /pc</p>
                    <p  class="card-text a5size">Price: $115.00 /pc</p>
                    <p  class="card-text a6size">Price: $145.00 /pc</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>      
      <div class=" colors" id="cappuccinoCreme">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="card" style="width: 20rem;">
                <img class="card-img-top" src="images/cake-cc.png" alt="Card image cap">
                <div class="card-block">
                  <h4 class="card-title">Cappuccino Creme</h4>
                  <p  class="card-text a1size">Price: $50.00 /pc</p>
                    <p  class="card-text a2size">Price: $70.00 /pc</p>
                    <p  class="card-text a3size">Price: $90.00 /pc</p>
                    <p  class="card-text a4size">Price: $110.00 /pc</p>
                    <p  class="card-text a5size">Price: $115.00 /pc</p>
                    <p  class="card-text a6size">Price: $145.00 /pc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" colors" id="redVelvet">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="card" style="width: 20rem;">
                <img class="card-img-top" src="images/cake-rv.png" alt="Card image cap">
                <div class="card-block">
                  <h4 class="card-title">Red Velvet</h4>
                  <p  class="card-text a1size">Price: $50.00 /pc</p>
                    <p  class="card-text a2size">Price: $70.00 /pc</p>
                    <p  class="card-text a3size">Price: $90.00 /pc</p>
                    <p  class="card-text a4size">Price: $110.00 /pc</p>
                    <p  class="card-text a5size">Price: $115.00 /pc</p>
                    <p  class="card-text a6size">Price: $145.00 /pc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" colors" id="limoncello">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="card" style="width: 20rem;">
                <img class="card-img-top" src="images/cake-limoncello.png" alt="Card image cap">
                <div class="card-block">
                  <h4 class="card-title">Limoncello</h4>
                  <p  class="card-text a1size">Price: $50.00 /pc</p>
                    <p  class="card-text a2size">Price: $70.00 /pc</p>
                    <p  class="card-text a3size">Price: $90.00 /pc</p>
                    <p  class="card-text a4size">Price: $110.00 /pc</p>
                    <p  class="card-text a5size">Price: $115.00 /pc</p>
                    <p  class="card-text a6size">Price: $145.00 /pc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" colors" id="yemaCaramel">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="card" style="width: 20rem;">
                <img class="card-img-top" src="images/cake-yema.png" alt="Card image cap">
                <div class="card-block">
                  <h4 class="card-title">Yema Caramel</h4>
                  <p  class="card-text b1size">Price: $55.00 /pc</p>
                  <p  class="card-text b2size">Price: $75.00 /pc</p>
                  <p  class="card-text b3size">Price: $95.00 /pc</p>
                  <p  class="card-text b4size">Price: $115.00 /pc</p>
                  <p  class="card-text b5size">Price: $120.00 /pc</p>
                  <p  class="card-text b6size">Price: $150.00 /pc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" colors" id="chocoMochaCrunch">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="card" style="width: 20rem;">
                <img class="card-img-top" src="images/cake-cm.png" alt="Card image cap">
                <div class="card-block">
                  <h4 class="card-title">Choco Mocha Crunch</h4>
                  <p  class="card-text b1size">Price: $55.00 /pc</p>
                  <p  class="card-text b2size">Price: $75.00 /pc</p>
                  <p  class="card-text b3size">Price: $95.00 /pc</p>
                  <p  class="card-text b4size">Price: $115.00 /pc</p>
                  <p  class="card-text b5size">Price: $120.00 /pc</p>
                  <p  class="card-text b6size">Price: $150.00 /pc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" colors" id="blackForest">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="card" style="width: 20rem;">
                <img class="card-img-top" src="images/cake-bf.png" alt="Card image cap">
                <div class="card-block">
                  <h4 class="card-title">Black Forest</h4>
                  <p  class="card-text b1size">Price: $55.00 /pc</p>
                  <p  class="card-text b2size">Price: $75.00 /pc</p>
                  <p  class="card-text b3size">Price: $95.00 /pc</p>
                  <p  class="card-text b4size">Price: $115.00 /pc</p>
                  <p  class="card-text b5size">Price: $120.00 /pc</p>
                  <p  class="card-text b6size">Price: $150.00 /pc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" colors" id="carrot">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="card" style="width: 20rem;">
                <img class="card-img-top" src="images/cake-carrot.png" alt="Card image cap">
                <div class="card-block">
                  <h4 class="card-title">Carrot</h4>
                  <p  class="card-text b1size">Price: $55.00 /pc</p>
                  <p  class="card-text b2size">Price: $75.00 /pc</p>
                  <p  class="card-text b3size">Price: $95.00 /pc</p>
                  <p  class="card-text b4size">Price: $115.00 /pc</p>
                  <p  class="card-text b5size">Price: $120.00 /pc</p>
                  <p  class="card-text b6size">Price: $150.00 /pc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" colors" id="purpleYam">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="card" style="width: 20rem;">
                <img class="card-img-top" src="images/cake-py.png" alt="Card image cap">
                <div class="card-block">
                  <h4 class="card-title">Purple Yam </h4>
                  <p  class="card-text c1size">Price: $60.00 /pc</p>
                  <p  class="card-text c2size">Price: $80.00 /pc</p>
                  <p  class="card-text c3size">Price: $100.00 /pc</p>
                  <p  class="card-text c4size">Price: $120.00 /pc</p>
                  <p  class="card-text c5size">Price: $125.00 /pc</p>
                  <p  class="card-text c6size">Price: $155.00 /pc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" colors" id="pandan">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="card" style="width: 20rem;">
                <img class="card-img-top" src="images/cake-pandan.png" alt="Card image cap">
                <div class="card-block">
                  <h4 class="card-title">Pandan </h4>
                  <p  class="card-text c1size">Price: $60.00 /pc</p>
                  <p  class="card-text c2size">Price: $80.00 /pc</p>
                  <p  class="card-text c3size">Price: $100.00 /pc</p>
                  <p  class="card-text c4size">Price: $120.00 /pc</p>
                  <p  class="card-text c5size">Price: $125.00 /pc</p>
                  <p  class="card-text c6size">Price: $155.00 /pc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" colors" id="rockyRoad">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="card" style="width: 20rem;">
                <img class="card-img-top" src="images/cake-rr.png" alt="Card image cap">
                <div class="card-block">
                  <h4 class="card-title">Rocky Road </h4>
                  <p  class="card-text c1size">Price: $60.00 /pc</p>
                  <p  class="card-text c2size">Price: $80.00 /pc</p>
                  <p  class="card-text c3size">Price: $100.00 /pc</p>
                  <p  class="card-text c4size">Price: $120.00 /pc</p>
                  <p  class="card-text c5size">Price: $125.00 /pc</p>
                  <p  class="card-text c6size">Price: $155.00 /pc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" colors" id="strawberry">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="card" style="width: 20rem;">
                <img class="card-img-top" src="images/cake-strawberry.png" alt="Card image cap">
                <div class="card-block">
                  <h4 class="card-title">Strawberry </h4>
                  <p  class="card-text c1size">Price: $60.00 /pc</p>
                  <p  class="card-text c2size">Price: $80.00 /pc</p>
                  <p  class="card-text c3size">Price: $100.00 /pc</p>
                  <p  class="card-text c4size">Price: $120.00 /pc</p>
                  <p  class="card-text c5size">Price: $125.00 /pc</p>
                  <p  class="card-text c6size">Price: $155.00 /pc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" colors" id="sansrival">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="card" style="width: 20rem;">
                <img class="card-img-top" src="images/cake-sansrival.png" alt="Card image cap">
                <div class="card-block">
                  <h4 class="card-title">Sansrival </h4>
                  <p  class="card-text c1size">Price: $60.00 /pc</p>
                  <p  class="card-text c2size">Price: $80.00 /pc</p>
                  <p  class="card-text c3size">Price: $100.00 /pc</p>
                  <p  class="card-text c4size">Price: $120.00 /pc</p>
                  <p  class="card-text c5size">Price: $125.00 /pc</p>
                  <p  class="card-text c6size">Price: $155.00 /pc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    </div> <!-- End of product card -->
         
  
  </div>
      
      
   </div>  <!-- container end -->

   <script src="main.js"></script>
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/Knockout/3.5.1/knockout-latest.min.js"></script>

   `
  }
}

customElements.define('my-products', MyProducts)