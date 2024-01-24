export default function HeroSection() {
    return(
        <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
            <div className="hero--section--content">
                <p className="section--title">Hey I'm Hiroshi</p>
                <h1 className="hero--section--title">
                    <span className="hero--section--title--color">Software</span>{" "}
                    <br />
                    Developer
                </h1>
                <p className="hero--section--description">
                    I'm a software developer based in Vancouver, B.C. I am currently a student at BCIT in the Computer Systems Technology program. 
                    I am passionate about creating software that is both functional and beautiful. 
                    </p>
            </div>
            <button className="btn btn-primary">Get in Touch</button>
        </div>
        <div className="hero--section--img">
            <img src="./img/hero_img.png" alt="hero_img" />
            </div>
    </section>
    )
}
    