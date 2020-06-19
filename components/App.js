class Nav extends React.Component {

    render() {
        return (

            <nav>
                <div className="navContentContainer">
                
                    <div id="navLogoDiv"><span>&#x270E;</span></div>
        
                    <ul id="navLinks">
                        <li><a href="index.html">HOME</a></li>

                        <li className="dropdown">
                            <a href="#">CSS Projects</a>
                            <ul className="dropdownContent">
                                <li><a href="gridRadio.html">Grid Radio</a></li>
                                <li><a href="negSpace.html">Image Masking</a></li>
                                <li><a href="#">Banners</a></li>
                            </ul>
                        </li>
        
                        <li className="dropdown">
                            <a href="#">JS Projects</a>
                            <ul className="dropdownContent">
                                <li><a href="seasons_p5.html">Seasons Spin Off</a></li>
                                <li><a href="invaders.html">Space Invaders</a></li>
                                <li><a href="fishtank.html">Canvas Art</a></li>
                                <li><a href="freeCodeCampProjects/tetris/index.html">Tetris</a></li>
                                <li><a href="freeCodeCampProjects/weatherApp/index.html">Weather App</a></li>
                            </ul>
                        </li>
                    </ul>
                    
                    <div id="burger">
                        <div className="topB"></div>
                        <div className="midB"></div>
                        <div className="btmB"></div>
                    </div>
                
                </div>
            </nav>
        )
    }
}


class MainContent extends React.Component {
    render(){
        return (
            <div id="pageContent">
                <div className="center">
                    <p>These elements were created using sass mixins and functions to generate class names.</p>
                    <p>React was used to simplify the HTML source, and because I might add some sort of interactivity that could make use of it in the future.  Making things like this is also just a good way for me to get used to using React.</p>
                </div>
                <Darklight />
                
            </div>
        )
    }
}

class Footer extends React.Component {
    render() {
        return (
            <footer>
            
                <ul id="footerLinks">				
                    <li className="first">
                        <a href="https://simpleicons.org/">
                            <img id="si" height="24" width="24" src="svg/simpleicons.svg" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.pexels.com/">
                            <img id="pex" height="24" width="24" src="svg/pexels.svg" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.deviantart.com/aerin-kayne">
                            <img id="da" height="24" width="24" src="svg/deviantart.svg" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.artstation.com/aerin-kayne">
                            <img id="as" height="24" width="24" src="svg/artstation.svg" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/aerinkayne">
                            <img height="24" width="24" id="gh" src="svg/github.svg" />
                        </a>
                    </li>
                    <li className="last"><a href="mailto:darth_kayne@yahoo.com">Contact</a></li>
                </ul>
            
            </footer>	
        )
    }
}

class Darklight extends React.Component {
    render() {
        return (
            <div id="darklight">
                <div id="dark">
                    <div className="lighten d_20"></div>
                    <div className="lighten d_19"></div>
                    <div className="lighten d_18"></div>
                    <div className="lighten d_17"></div>
                    <div className="lighten d_16"></div>
                    <div className="lighten d_15"></div>
                    <div className="lighten d_14"></div>
                    <div className="lighten d_13"></div>
                    <div className="lighten d_12"></div>
                    <div className="lighten d_11"></div>
                    <div className="lighten d_10"></div>
                    <div className="lighten d_9"></div>
                    <div className="lighten d_8"></div>
                    <div className="lighten d_7"></div>
                    <div className="lighten d_6"></div>
                    <div className="lighten d_5"></div>
                    <div className="lighten d_4"></div>
                    <div className="lighten d_3"></div>
                    <div className="lighten d_2"></div>
                    <div className="lighten d_1"></div>
                    <div className="lighten d_0"></div>
                </div>

                <div id="light">
                    <div className="darken d_20"></div>
                    <div className="darken d_19"></div>
                    <div className="darken d_18"></div>
                    <div className="darken d_17"></div>
                    <div className="darken d_16"></div>
                    <div className="darken d_15"></div>
                    <div className="darken d_14"></div>
                    <div className="darken d_13"></div>
                    <div className="darken d_12"></div>
                    <div className="darken d_11"></div>
                    <div className="darken d_10"></div>
                    <div className="darken d_9"></div>
                    <div className="darken d_8"></div>
                    <div className="darken d_7"></div>
                    <div className="darken d_6"></div>
                    <div className="darken d_5"></div>
                    <div className="darken d_4"></div>
                    <div className="darken d_3"></div>
                    <div className="darken d_2"></div>
                    <div className="darken d_1"></div>
                    <div className="darken d_0"></div>
                </div>

            </div>
        )
    }
}

class App extends React.Component {
    render(){
        return (
            <div>
                <Nav />
                <MainContent />
                <Footer />
            </div>    
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));