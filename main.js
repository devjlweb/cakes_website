class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header>

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient border-bottom fixed-top">
      <div class="container">
        <a href="index.html" class="navbar-brand">Ryle's Kitchen</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarCollapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="index.html" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
              <a href="products.html" class="nav-link">Products</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Blog</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Testimonials</a>
            </li>
            <li class="nav-item active">
              <a href="contact.html" class="nav-link active" aria-current="page">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </header>
    `
  }
}

customElements.define('my-header', MyHeader)
////////////////////////////////////////// footer

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

    <footer class="small bg-light">
    <div class="container py-3 py-sm-5">
      <div class="row">
        <div class="col-12 col-sm-6 col-md-3">
          <h6>Quick links</h6>
          <ul class="list-unstyled">
            <li><a href="index.html">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="col-12 col-sm-6 col-md-3">
          <h6>Information</h6>
          <ul class="list-unstyled">
            <li><a href="#0">Legal information</a></li>
            <li><a href="#0">Job opportunities</a></li>
            <li><a href="#0">Frequently Asked Questions</a></li>
          </ul>
        </div>
        <div class="col-12 col-sm-6 col-md-3">
          <h6>Follow us</h6>
          <ul class="list-unstyled">
            <li><a href="#0"><i class="fab fa-fw fa-facebook"></i> Facebook</a></li>
            <li><a href="#0"><i class="fab fa-fw fa-instagram"></i> Instagram</a></li>
            <li><a href="#0"><i class="fab fa-fw fa-twitter"></i> Twitter</a></li>
            <li><a href="#0"><i class="fab fa-fw fa-youtube"></i> YouTube</a></li>
            <li><a href="#0"><i class="fab fa-fw fa-linkedin"></i> LinkedIn</a></li>
          </ul>
        </div>
        <div class="col-12 col-sm-6 col-md-3">
          <h6>Our location</h6>
          <address>
            <strong>Company Name</strong><br>
            Steet Name<br>
            ZIP code and city<br>
            <i class="fas fa-fw fa-phone"></i> <a href="tel:+1234567890">(123) 456-7890</a><br>
            <i class="fas fa-fw fa-envelope"></i> <a href="mailto:info@domain.com">info@domain.com</a>
          </address>
        </div>
      </div>
      <ul class="list-inline mt-2 mb-0 text-center">
        <li class="list-inline-item">&copy; 2022 Ryle's Kitchen</li>
        <li class="list-inline-item">All rights reserved.</li>
      </ul>
    </div>
  </footer>

    `
  }
}

customElements.define('my-footer', MyFooter)


////////////// products // pricing tab

///////////// DATE PICKER
