<div class="sidebar">
    <div class="icon-container">
        <!--<img style="width: 48px;" src="icon.png" alt="">-->
    </div>

    <div class="nav-container">
        <a href="/" class="nav-button">
            <i class="fas fa-home"></i>
            <span>Home</span>
        </a>
        <a href="/about" class="nav-button">
            <i class="fas fa-user"></i>
            <span>About</span>
        </a>
        <a href="/portfolio" class="nav-button">
            <i class="fa-solid fa-suitcase"></i>
            <span>Portfolio</span>
        </a>
        <a href="/contact" class="nav-button">
            <i class="fas fa-envelope"></i>
            <span>Contact</span>
        </a>
    </div>

    <!--<div class="footer-container">
        <i class="fa-solid fa-flag"></i>
        <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
        </label>
        <i class="fa-solid fa-flag"></i>
    </div>-->
</div>

<div class="main-content">
    <slot></slot>
</div>