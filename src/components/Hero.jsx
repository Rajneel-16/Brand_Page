const HeroSection = () => {
    return (

    <main className="hero container">
        <div className="hero-content">
            <div className="hero-image">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nisi magni et mollitia expedita provident facilis ab dolore dolorum similique molestiae, tempore ipsa, dolorem a impedit suscipit molestias fugit vitae?
                </p>

                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>

                <div className="shopping">
                    <p>Also available on</p>
                    <div className="brand-icons">
                        <img src="/images/amazon.png" alt="amazon-logo" />
                        <img src="/images/flipkart.png" alt="flipkart-logo" />
                    </div>
                </div>
            </div>
        </div>

        <div className="hero-image">
            <img src="/images/hero-image.png" alt="hero-logo" />
        </div>
    </main>

   );
};

export default HeroSection;
