

function BioData() {
  return (
    <section className="bio-data-section">
        <div className="bio-data grid-two--cols">
            <div className="bio-image-section">
                <img src="https://image.benq.com/is/image/benqco/monitor-for-programmer-1?$ResponsivePreset$" alt="" />
            </div>
            <div className="bio-data-details">
                <h1 className="common-heading">My Bio-Data</h1>
                <p className="common-para">
                {"I'm Kamlesh a skilled and creative front-end web developer with a passion for creating beautiful, responsive, and user-friendly websites using HTML, CSS, Tailwind, Bootstrap, JavaScript, and React also. I've worked on verity of web projects ranging from personal blogs to e-commerce platforms. Let's make your website stand out with modern designs and smooth interactions. Excited to bring your ideas to life on the web!"}
                    <br /> <br />
                   {"I've worked on verity of web projects ranging from personal blogs to e-commerce platforms. Let's make your website stand out with modern designs and smooth interactions. Excited to bring your ideas to life on the web!"}
                </p>
                <div className="bio-graph">
                    <div className="common-bio">
                        <h3>HTML</h3>
                        <div className="range-show html"></div>
                        <span className="common-box html-box">90%</span>
                    </div>
                    <div className="common-bio">
                        <h3>CSS</h3>
                        <div className="range-show css"></div>
                        <span className="common-box css-box">85%</span>
                    </div>
                    <div className="common-bio">
                        <h3>Tailwind</h3>
                        <div className="range-show tailwind"></div>
                        <span className="common-box tailwind-box">70%</span>
                    </div>
                    <div className="common-bio">
                        <h3>Bootstrap</h3>
                        <div className="range-show bootstrap"></div>
                        <span className="common-box bootstarp-box">40%</span>
                    </div>
                    <div className="common-bio">
                        <h3>JavaScript</h3>
                        <div className="range-show javascript"></div>
                        <span className="common-box javascript-box">75%</span>
                    </div>
                    <div className="common-bio">
                        <h3>React</h3>
                        <div className="range-show react"></div>
                        <span className="common-box react-box">65%</span>
                    </div>
                </div>
                <div className="button">
                    <a href="#">Download CV</a>
                </div>
           
        </div>
        </div>
    </section>
  )
}

export default BioData
