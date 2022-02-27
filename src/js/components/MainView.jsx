import React from "react";
import Navigation from "./Navigation.jsx";
import AboutPane from "./AboutPane.jsx";

/**
 * Represents the main view that can interchange dynamic panes of information.
 *
 * @author James Manes (admin@jmanes.com)
 */
export default class MainView extends React.Component {
    constructor(props) {
        super(props);
        this.centerContentY = this.centerContentY.bind(this);
        this.paneRef = React.createRef();
        this.state = {
            currentHeight: 0
        }
    }

    /**
     * Centers the main view pane on the screen vertically using
     * translate Y.
     */
    centerContentY() {
        if(window.innerHeight !== this.state.currentHeight) {
            var offset = (window.innerHeight / 2) - (this.paneRef.current
                    .offsetHeight / 2);
            var translateY = "translateY(" + offset + "px)";

            this.paneRef.current.style.transform = translateY;

            this.setState({
                currentHeight: window.innerHeight
            });
        }
    }

    /**
     * React JS method for handling post-render logic.
     */
    componentDidMount() {
        window.addEventListener("resize", this.centerContentY);
        this.centerContentY();
    }

    /**
     * React JS method for rendering the DOM element(s).
     *
     * @returns {Object} The virtual DOM element.
     */
    render() {
        return(
            <div id="main-view-pane" ref={this.paneRef}>
                <AboutPane/>
                <Navigation/>
            </div>
        );
    }
}