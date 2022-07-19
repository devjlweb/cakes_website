class MyPricing extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <nav>
          <div class="nav nav-tabs" role="tablist">
            <button type="button" id="tabButtons-1" class="nav-item nav-link active" data-bs-toggle="tab" data-bs-target="#tabButtons-pane-1" role="tab" aria-controls="tabButtons-pane-1" aria-selected="true">Cakes</button>
            <button type="button" id="tabButtons-2" class="nav-item nav-link" data-bs-toggle="tab" data-bs-target="#tabButtons-pane-2" role="tab" aria-controls="tabButtons-pane-2" aria-selected="false">Cupcakes</button>
            <button type="button" id="tabButtons-3" class="nav-item nav-link" data-bs-toggle="tab" data-bs-target="#tabButtons-pane-3" role="tab" aria-controls="tabButtons-pane-3" aria-selected="false">Brownies</button>
          </div>
        </nav>
        <div class="tab-content">





        <!----------------------- Cake Form tab Start here ------------------------>

  
          <div id="tabButtons-pane-1" class="tab-pane active" role="tabpanel" aria-labelledby="tabButtons-1">

            <div class="input-group mt-3 ">
              <span class="input-group-text" >Flavours</span>
              <select id="cakeSelector" class="form-select" aria-label="Default select" name="cakeFlavor" aria-describedby="select" form="cakeForm">
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
                <select id="priceSelector" class="form-select" name="size" aria-label="Default select" aria-describedby="select" form="cakeForm">
                  <option value="0size">Choose</option>
                  <option value="size-7">7" (6-8) Serving</option>
                  <option value="size-9">9" (8-12) Serving</option>
                  <option value="size-10">10" (12-16) Serving</option>
                  <option value="size-12x8">12x8" (14-18) Serving</option>
                  <option value="size-12">12" (16-20) Serving</option>
                  <option value="size-14">14" (25-30) Serving</option>
                </select>
              </div>
              <div class="mt-3 input-group-sm col-md-4">
                  <input type="datetime-local" id="datetime" name="datetime"  class="form-control" form="browniesForm">
                  <p class="float-end">Date Needed</p>
              </div>
              <div class="mt-3 input-group-sm col-md-2">
                  <input type="number" id="productQty" name="Qty"  class="form-control" form="cakeForm">
                  <p class="float-end">Qty</p>
              </div>  
            </div>
     
      <!-------------------------- Cake Form Action here -------------------------->

              <form action="mailto:joankristel_anorlim@yahoo.com.ph" id="cakeForm" method="post" enctype="text/plain">
      <!-- Name and Email row -->
                <div class="row">
      <!-- Name Form -->
                  <div class="col-12 col-sm-6">
                    <div class="mb-3">
                      <div class="input-group">
                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                        <input type="text" id="name" class="form-control" name="name" placeholder="Name" required>
                      </div>
                    </div>
                  </div>
      <!-- Email Form -->
                  <div class="col-12 col-sm-6">
                    <div class="mb-3">
                      <div class="input-group">
                        <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                        <input type="email" id="email" class="form-control" name="email" placeholder="example@email.com" required>
                      </div>
                    </div>
                  </div>
                </div>
      <!-- End of Name and Email row -->

      <!-- Telephone and Attach file row -->
                <div class="row">
      <!-- Telephone form -->
                  <div class="col-12 col-sm-6">
                    <div class="mb-3">
                      <div class="input-group">
                        <span class="input-group-text"><i class="fas fa-phone"></i></span>
                        <input type="tel" id="telephone" class="form-control" name="telephone" placeholder="0123456789">
                      </div>
                    </div>
                  </div>
      <!-- Attach file form -->
                  <div class="col-12 col-sm-6">
                    <div class="mb-3">
                      <div class="form-file">
                        <input type="file" class="form-control" id="inputFile">
                      </div>
                    </div>
                  </div>
                </div>
      <!-- End of Telephone and Attach file row -->
      <!-- Message Form -->
                <div class="mb-3">
                  <label for="message" class="form-label">Message:</label>
                  <div class="input-group">
                    <span class="input-group-text"><i class="fas fa-pencil-alt"></i></span>
                    <textarea id="message" class="form-control" name="message" rows="3" placeholder="Please attach a pic if you have your own design.&#10;Let us know if you'd like a birthday topper ordered."></textarea>
                  </div>
                </div>
      <!-- Submit button form -->
                <button type="submit" class="btn btn-outline-dark">Submit</button>
              </form>

            </div>
  <!-- tabButtons-pane-1 END -->

   <!---------------------------- Cake End of Form ----------------------------->



   <!----------------------- Cupcakes Form tab Start here ------------------------>


            <div id="tabButtons-pane-2" class="tab-pane" role="tabpanel" aria-labelledby="tabButtons-2">
              
              <div class="input-group mt-3 ">
                <span class="input-group-text" >Base Flavour</span>
                <select id="cupCakeSelector" class="form-select" aria-label="Default select" name="baseFlavour" aria-describedby="select" form="cupCakeForm">
                  <option value="1">Choose</option>
                  <option value="vanilla">Vanilla</option>
                  <option value="chocolateFudge">Chocolate Fudge</option>
                  <option value="lemon">Lemon</option>
                  <option value="carrot">Carrot</option>
                  <option value="cookiesAndCream">Cookies & Cream</option>
                  <option value="coffee">Coffee</option>
                </select>
              </div>
              <div class="row">
                <div class="input-group-sm mt-3 col-md-6">
                  <span class="input-group-text" id="select">Buttercream</span>
                  <select id="creamSelector" class="form-select" name="buttercream" aria-label="Default select" aria-describedby="select" form="cupCakeForm">
                    <option value="0size">Choose</option>
                    <option value="creamVanilla">Vanilla</option>
                    <option value="creamWhiteChocolate">White Chocolate</option>
                    <option value="creamMilkChocolate">Milk Chocolate</option>
                    <option value="creamSaltedCaramel">Salted Caramel</option>
                    <option value="creamOreo">Oreo</option>
                    <option value="creamLemon">Lemon</option>
                  </select>
                </div>
                <div class="mt-3 input-group-sm col-md-4">
                  <input type="datetime-local" id="datetime" name="datetime"  class="form-control" form="browniesForm">
                  <p class="float-end">Date Needed</p>
                </div>
                <div class="mt-3 input-group-sm col-md-2">
                  <input type="number" id="productQty" name="Qty"  class="form-control min="6" max="" step="6"" form="cupCakeForm">
                  <p class="float-end">Qty</p>
                </div>  
              </div>
      
       <!----------------------- Cupcakes Form Action here -------------------------->
 
              <form action="mailto:joankristel_anorlim@yahoo.com.ph" id="cupCakeForm" method="post" enctype="text/plain">
       <!-- Name and Email row -->
                <div class="row">
       <!-- Name Form -->
                  <div class="col-12 col-sm-6">
                    <div class="mb-3">
                      <div class="input-group">
                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                        <input type="text" id="name" class="form-control" name="name" placeholder="Name" required>
                      </div>
                    </div>
                  </div>
       <!-- Email Form -->
                  <div class="col-12 col-sm-6">
                    <div class="mb-3">
                      <div class="input-group">
                        <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                        <input type="email" id="email" class="form-control" name="email" placeholder="example@email.com" required>
                      </div>
                    </div>
                  </div>
                </div>
       <!-- End of Name and Email row -->
 
       <!-- Telephone and Attach file row -->
                <div class="row">
       <!-- Telephone form -->
                  <div class="col-12 col-sm-6">
                    <div class="mb-3">
                      <div class="input-group">
                        <span class="input-group-text"><i class="fas fa-phone"></i></span>
                        <input type="tel" id="telephone" class="form-control" name="telephone" placeholder="0123456789">
                      </div>
                    </div>
                  </div>
       <!-- Attach file form -->
                  <div class="col-12 col-sm-6">
                    <div class="mb-3">
                      <div class="form-file">
                        <input type="file" class="form-control" id="inputFile">
                      </div>
                    </div>
                  </div>
                </div>
       <!-- End of Telephone and Attach file row -->
       <!-- Message Form -->
                <div class="mb-3">
                  <label for="message" class="form-label">Message:</label>
                  <div class="input-group">
                    <span class="input-group-text"><i class="fas fa-pencil-alt"></i></span>
                    <textarea id="message" class="form-control" name="message" rows="3" placeholder="Write your message here..."></textarea>
                  </div>
                </div>
       <!-- Submit button form -->
                <button type="submit" class="btn btn-outline-dark">Submit</button>
              </form>
              
            </div>
  <!-- tabButtons-pane-2 END -->
  

  <!---------------------------- Cupcakes End of Form ----------------------------->



  <!----------------------- Brownies Form tab Start here ------------------------>


            <div id="tabButtons-pane-3" class="tab-pane" role="tabpanel" aria-labelledby="tabButtons-3">
              
              <div class="input-group mt-3 ">
                <span class="input-group-text" >Flavours</span>
                <select id="browniesSelector" class="form-select" aria-label="Default select" name="flavour" aria-describedby="select" form="browniesForm">
                  <option value="1">Choose</option>
                  <option value="classic">Classic</option>
                  <option value="crunchie">Crunchie</option>
                  <option value="twix">Twix</option>
                  <option value="cookiesAndCream">Cookies & Cream</option>
                  <option value="tripleChocolate">Triple Chocolate</option>
                  <option value="snickers">Snickers</option>
                </select>
              </div>
              <div class="row">
                <div class="input-group-sm mt-3 col-md-8">
                  <span class="input-group-text" id="select">Packages Price</span>
                  <select id="browniesPackageSelector" class="form-select" name="package" aria-label="Default select" aria-describedby="select" form="browniesForm">
                    <option value="0size">Choose</option>
                    <option value="browniesPackage1">6pcs (1 flavour)</option>
                    <option value="browniesPackage2">6pcs (2 flavours)</option>
                    <option value="browniesPackage3">12pcs (1 flavour)</option>
                    <option value="browniesPackage4">12pcs (2 flavours)</option>
                    <option value="browniesSaver">12 x Classic Brownies (Choose a white, milk or dark Drizzle)</option>
                  </select>
                </div>
                <div class="mt-3 input-group-sm col-md-4">
                  <input type="datetime-local" id="datetime" name="datetime"  class="form-control" form="browniesForm">
                  <p class="float-end">Date Needed</p>
                </div>                
            </div>
    
    <!----------------------- Brownies Form Action here -------------------------->

            <form action="mailto:joankristel_anorlim@yahoo.com.ph" id="browniesForm" method="post" enctype="text/plain">
    <!-- Name and Email row -->
              <div class="row">
    <!-- Name Form -->
                <div class="col-12 col-sm-6">
                  <div class="mb-3">
                    <div class="input-group">
                      <span class="input-group-text"><i class="fas fa-user"></i></span>
                      <input type="text" id="name" class="form-control" name="name" placeholder="Name" required>
                    </div>
                  </div>
                </div>
    <!-- Email Form -->
                <div class="col-12 col-sm-6">
                  <div class="mb-3">
                    <div class="input-group">
                      <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                      <input type="email" id="email" class="form-control" name="email" placeholder="example@email.com" required>
                    </div>
                  </div>
                </div>
              </div>
    <!-- End of Name and Email row -->

    <!-- Telephone and Attach file row -->
              <div class="row">
    <!-- Telephone form -->
                <div class="col-12 col-sm-6">
                  <div class="mb-3">
                    <div class="input-group">
                      <span class="input-group-text"><i class="fas fa-phone"></i></span>
                      <input type="tel" id="telephone" class="form-control" name="telephone" placeholder="0123456789">
                    </div>
                  </div>
                </div>
    <!-- Attach file form -->
                <div class="col-12 col-sm-6">
                  <div class="mb-3">
                    <div class="form-file">
                      <input type="file" class="form-control" id="inputFile">
                    </div>
                  </div>
                </div>
              </div>
    <!-- End of Telephone and Attach file row -->
    <!-- Message Form -->
              <div class="mb-3">
                <label for="message" class="form-label">Message:</label>
                <div class="input-group">
                  <span class="input-group-text"><i class="fas fa-pencil-alt"></i></span>
                  <textarea id="message" class="form-control" name="message" rows="3" placeholder="Write your message here..."></textarea>
                </div>
              </div>
    <!-- Submit button form -->
              <button type="submit" class="btn btn-outline-dark">Submit</button>
            </form>
            
            </div>
  <!-- tabButtons-pane-3 END -->

  <!---------------------------- Brownies End of Form ----------------------------->
  
          </div>
  <!-- tab-content END -->

        </div>
  <!-- left COL END -->

  <!-- START OF PRODUCT CARD -->

  <!---------------------------- CAKE CARDS ----------------------------->


        <div class="col-md-6 mt-md-5">
          <div class="colors" id="chocolateIndulgence">
            <div class="row justify-content-center">      
              <div class="card" style="width: 25rem;">
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
        
          <div class=" colors" id="cappuccinoCreme">
            <div class="row justify-content-center">
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


          <div class=" colors" id="redVelvet">
            <div class="row justify-content-center">
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

          <div class=" colors" id="limoncello">
            <div class="row justify-content-center">
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

          <div class=" colors" id="yemaCaramel">
            <div class="row justify-content-center">
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

          <div class=" colors" id="chocoMochaCrunch">
            <div class="row justify-content-center">
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

          <div class=" colors" id="blackForest">
            <div class="row justify-content-center">
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

          <div class=" colors" id="carrot">
            <div class="row justify-content-center">
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

          <div class=" colors" id="purpleYam">
            <div class="row justify-content-center">
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

          <div class=" colors" id="pandan">
            <div class="row justify-content-center">
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

          <div class=" colors" id="rockyRoad">
            <div class="row justify-content-center">
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

          <div class=" colors" id="strawberry">
            <div class="row justify-content-center">
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

          <div class=" colors" id="sansrival">
            <div class="row justify-content-center">
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


          <!---------------------------- CUPCAKE CARDS ----------------------------->


          <div class=" colors" id="vanilla">
            <div class="row justify-content-center">
              <div class="card" style="width: 20rem;">
                <img class="card-img-top" src="images/cc-vanilla.png" alt="Card image cap">
                <div class="card-block">
                  <h4 class="card-title">Base Flavour: Vanilla </h4>
                  <p  class="card-text c-vanilla">Buttercream: Vanilla</p>
                  <p  class="card-text c-whiteChocolate">Buttercream: White Chocolate</p>
                  <p  class="card-text c-milkChocolate">Buttercream: Milk Chocolate</p>
                  <p  class="card-text c-saltedCaramel">Buttercream: Salted Caramel</p>
                  <p  class="card-text c-oreo">Buttercream: Oreo</p>
                  <p  class="card-text c-lemon">Buttercream: Lemon</p>
                </div>
              </div>
            </div>
          </div>

          <div class=" colors" id="chocolateFudge">
            <div class="row justify-content-center">
              <div class="card" style="width: 20rem;">
                <img class="card-img-top" src="images/cc-cFudge.png" alt="Card image cap">
                <div class="card-block">
                  <h4 class="card-title">Base Flavour: Chocolate Fudge </h4>
                  <p  class="card-text c-vanilla">Buttercream: Vanilla</p>
                  <p  class="card-text c-whiteChocolate">Buttercream: White Chocolate</p>
                  <p  class="card-text c-milkChocolate">Buttercream: Milk Chocolate</p>
                  <p  class="card-text c-saltedCaramel">Buttercream: Salted Caramel</p>
                  <p  class="card-text c-oreo">Buttercream: Oreo</p>
                  <p  class="card-text c-lemon">Buttercream: Lemon</p>
                </div>
              </div>
            </div>
          </div>

          <div class=" colors" id="lemon">
            <div class="row justify-content-center">
              <div class="card" style="width: 20rem;">
                <img class="card-img-top" src="images/cc-lemon.png" alt="Card image cap">
                <div class="card-block">
                  <h4 class="card-title">Base Flavour: Lemon </h4>
                  <p  class="card-text c-vanilla">Buttercream: Vanilla</p>
                  <p  class="card-text c-whiteChocolate">Buttercream: White Chocolate</p>
                  <p  class="card-text c-milkChocolate">Buttercream: Milk Chocolate</p>
                  <p  class="card-text c-saltedCaramel">Buttercream: Salted Caramel</p>
                  <p  class="card-text c-oreo">Buttercream: Oreo</p>
                  <p  class="card-text c-lemon">Buttercream: Lemon</p>
                </div>
              </div>
            </div>
          </div>

          <div class=" colors" id="ccarrot">
            <div class="row justify-content-center">
              <div class="card" style="width: 20rem;">
                <img class="card-img-top" src="images/cc-carrot.png" alt="Card image cap">
                <div class="card-block">
                  <h4 class="card-title">Base Flavour: Carrot </h4>
                  <p  class="card-text c-vanilla">Buttercream: Vanilla</p>
                  <p  class="card-text c-whiteChocolate">Buttercream: White Chocolate</p>
                  <p  class="card-text c-milkChocolate">Buttercream: Milk Chocolate</p>
                  <p  class="card-text c-saltedCaramel">Buttercream: Salted Caramel</p>
                  <p  class="card-text c-oreo">Buttercream: Oreo</p>
                  <p  class="card-text c-lemon">Buttercream: Lemon</p>
                </div>
              </div>
            </div>
          </div>

          <div class=" colors" id="cookiesAndCream">
            <div class="row justify-content-center">
              <div class="card" style="width: 20rem;">
                <img class="card-img-top" src="images/cc-cCream.png" alt="Card image cap">
                <div class="card-block">
                  <h4 class="card-title">Base Flavour: Cookies and Cream </h4>
                  <p  class="card-text c-vanilla">Buttercream: Vanilla</p>
                  <p  class="card-text c-whiteChocolate">Buttercream: White Chocolate</p>
                  <p  class="card-text c-milkChocolate">Buttercream: Milk Chocolate</p>
                  <p  class="card-text c-saltedCaramel">Buttercream: Salted Caramel</p>
                  <p  class="card-text c-oreo">Buttercream: Oreo</p>
                  <p  class="card-text c-lemon">Buttercream: Lemon</p>
                </div>
              </div>
            </div>
          </div>

          <div class=" colors" id="coffee">
            <div class="row justify-content-center">
              <div class="card" style="width: 20rem;">
                <img class="card-img-top" src="images/cc-coffee.png" alt="Card image cap">
                <div class="card-block">
                  <h4 class="card-title">Base Flavour: Coffee </h4>
                  <p  class="card-text c-vanilla">Buttercream: Vanilla</p>
                  <p  class="card-text c-whiteChocolate">Buttercream: White Chocolate</p>
                  <p  class="card-text c-milkChocolate">Buttercream: Milk Chocolate</p>
                  <p  class="card-text c-saltedCaramel">Buttercream: Salted Caramel</p>
                  <p  class="card-text c-oreo">Buttercream: Oreo</p>
                  <p  class="card-text c-lemon">Buttercream: Lemon</p>
                </div>
              </div>
            </div>
          </div>

          <!---------------------------- BROWNIES CARDS ----------------------------->


          <div class=" colors" id="classic">
            <div class="row justify-content-center">
              <div class="card" style="width: 20rem;">
                <img class="card-img-top" src="images/b-classic.png" alt="Card image cap">
                <div class="card-block">
                  <h4 class="card-title">Flavour: Classic </h4>
                  <p  class="card-text brownies-package1">Price: $16.00</p>
                  <p  class="card-text brownies-package2">Price: $20.00</p>
                  <p  class="card-text brownies-package3">Price: $30.00</p>
                  <p  class="card-text brownies-package4">Price: $35.00</p>
                  <p  class="card-text brownies-saver">Price: $28.00</p>
                </div>
              </div>
            </div>
          </div>

          <div class=" colors" id="crunchie">
            <div class="row justify-content-center">
              <div class="card" style="width: 20rem;">
                <img class="card-img-top" src="images/b-crunchie.png" alt="Card image cap">
                <div class="card-block">
                  <h4 class="card-title">Flavour: Crunchie </h4>
                  <p  class="card-text brownies-package1">Price: $16.00</p>
                  <p  class="card-text brownies-package2">Price: $20.00</p>
                  <p  class="card-text brownies-package3">Price: $30.00</p>
                  <p  class="card-text brownies-package4">Price: $35.00</p>
                  <p  class="card-text brownies-saver">Price: $28.00</p>
                </div>
              </div>
            </div>
          </div>

          <div class=" colors" id="twix">
            <div class="row justify-content-center">
              <div class="card" style="width: 20rem;">
                <img class="card-img-top" src="images/b-twix.png" alt="Card image cap">
                <div class="card-block">
                  <h4 class="card-title">Flavour: Twix </h4>
                  <p  class="card-text brownies-package1">Price: $16.00</p>
                  <p  class="card-text brownies-package2">Price: $20.00</p>
                  <p  class="card-text brownies-package3">Price: $30.00</p>
                  <p  class="card-text brownies-package4">Price: $35.00</p>
                  <p  class="card-text brownies-saver">Price: $28.00</p>
                </div>
              </div>
            </div>
          </div>

          <div class=" colors" id="cookiesAndCream">
            <div class="row justify-content-center">
              <div class="card" style="width: 20rem;">
                <img class="card-img-top" src="images/b-cCream.png" alt="Card image cap">
                <div class="card-block">
                  <h4 class="card-title">Flavour: Cookies and Cream </h4>
                  <p  class="card-text brownies-package1">Price: $16.00</p>
                  <p  class="card-text brownies-package2">Price: $20.00</p>
                  <p  class="card-text brownies-package3">Price: $30.00</p>
                  <p  class="card-text brownies-package4">Price: $35.00</p>
                  <p  class="card-text brownies-saver">Price: $28.00</p>
                </div>
              </div>
            </div>
          </div>

          <div class=" colors" id="tripleChocolate">
            <div class="row justify-content-center">
              <div class="card" style="width: 20rem;">
                <img class="card-img-top" src="images/b-tChocolate.png" alt="Card image cap">
                <div class="card-block">
                  <h4 class="card-title">Flavour: Triple Chocolate</h4>
                  <p  class="card-text brownies-package1">Price: $16.00</p>
                  <p  class="card-text brownies-package2">Price: $20.00</p>
                  <p  class="card-text brownies-package3">Price: $30.00</p>
                  <p  class="card-text brownies-package4">Price: $35.00</p>
                  <p  class="card-text brownies-saver">Price: $28.00</p>
                </div>
              </div>
            </div>
          </div>

          <div class=" colors" id="snickers">
            <div class="row justify-content-center">
              <div class="card" style="width: 20rem;">
                <img class="card-img-top" src="images/b-snickers.png" alt="Card image cap">
                <div class="card-block">
                  <h4 class="card-title">Flavour: Snickers</h4>
                  <p  class="card-text brownies-package1">Price: $16.00</p>
                  <p  class="card-text brownies-package2">Price: $20.00</p>
                  <p  class="card-text brownies-package3">Price: $30.00</p>
                  <p  class="card-text brownies-package4">Price: $35.00</p>
                  <p  class="card-text brownies-saver">Price: $28.00</p>
                </div>
              </div>
            </div>
          </div>

        </div> <!-- End of right COL / product card -->                 
       
      </div> <!-- row end -->
      
      
    </div>  <!-- container end -->

   `
  }
}

customElements.define('my-pricing', MyPricing)