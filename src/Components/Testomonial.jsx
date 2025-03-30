import React from 'react'

function Testomonial() {
    
  return (
    <div className="testonomial-section">
        <div className="testonomial-body">
            <div className="heading-section">
                <h1 className="common-heading">Happy Client Works</h1>
                
            </div>

            <div className="swiper-content">
                <div className="swiper mySwiper">
                    <div className="swiper-wrapper flex gap-[2rem]">
                      <div className="flex flex-col items-center swiper-slide">

                        <div className="text-section">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa assumenda dolorem a iusto possimus maiores quaerat vitae! </p>
                        </div>
                        <div className="image-section">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZOwv-ThhfOYXCq8h5NY-EIB1-S6r1M6CwA&usqp=CAU" alt="" />
                            <div className="text">
                                <h3>Kamlesh Kumar</h3>
                                <p>Enterpenuer</p>
                            </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center swiper-slide">
                        <div className="text-section">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa assumenda dolorem a iusto possimus maiores quaerat vitae! </p>
                        </div>
                        <div className="image-section">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZOwv-ThhfOYXCq8h5NY-EIB1-S6r1M6CwA&usqp=CAU" alt="" />
                            <div className="text">
                                <h3>Kamlesh Kumar</h3>
                                <p>Enterpenuer</p>
                            </div>
                      </div>
                      </div>
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-next"></div>
                      <div className="swiper-button-prev"></div>
                  </div>
                 
                </div>
                
        </div>
    </div>
  )
}

export default Testomonial
