import React, { Component } from 'react'

class DisplaySection extends Component {
    render() {
        return (
        <div>
            <header>
                <div class="carousel" data-count="3" data-current="2">
                    <div class="items">

                        <div class="item" data-marker="1">
                            <img src="../assets/img/carousel/bckg.jpg" alt="" class="background" />
                            <div class="content">
                                <div class="outside-content">
                                    <div class="inside-content">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-sm-12 align-center">
                                                    <h1>Topic</h1>
                                                    <p>Text</p>
                                                    <a href="#">More</a>
                                                    <br/><br/>
                                                </div>
                                                <div class="col-sm-6 col-sm-offset-3 align-center">
                                                    <img src="../assets/img/carousel/newlaptops.jpg" alt="Laptops" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="item active" data-marker="2">
                            <img src="../assets/img/carousel/bckg.jpg" alt="" class="background" />
                            <div class="content">
                                <div class="outside-content">
                                    <div class="inside-content">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-sm-8 col-sm-offset-2 align-center">
                                                    <img src="../assets/img/carousel/surfaces.jpg" alt="" />
                                                </div>
                                                <div class="col-sm-12 align-center">
                                                    <h1>Topic</h1>
                                                    <p>Text</p>
                                                    <a href="#">More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="item" data-marker="3">
                            <img src="../assets/img/carousel/bckg.jpg" alt="" class="background" />
                            <div class="content">
                                <div class="outside-content">
                                    <div class="inside-content">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-sm-5 col-sm-offset-1 align-center">
                                                    <img src="../assets/img/carousel/ipadair2.jpg" alt="" class="hidden-xs hidden-sm" />
                                                    <img src="../assets/img/carousel/ipadair2m.jpg" alt="" class="hidden-md hidden-lg" />
                                                </div>
                                                <div class="col-sm-4 align-left">
                                                    <br class="hidden-xs hidden-sm"/><br class="hidden-xs hidden-sm"/><br class="hidden-xs hidden-sm"/>
                                                    <br class="hidden-xs hidden-sm"/><br class="hidden-xs hidden-sm"/><br class="hidden-xs hidden-sm"/>
                                                    <h1>Topic</h1>
                                                    <br/>
                                                    <p>Text</p>
                                                    <a href="#">More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <ul class="markers">
                        <li data-marker="1"><img src="../assets/img/carousel/newlaptops.jpg" alt="" /></li>
                        <li data-marker="2" class="active"><img src="../assets/img/carousel/surfaces.jpg" alt="" /></li>
                        <li data-marker="3"><img src="../assets/img/carousel/ipadair2.jpg" alt="" /></li>
                    </ul>

                </div>

            </header>
        </div>
        )
    }
}

export default DisplaySection
