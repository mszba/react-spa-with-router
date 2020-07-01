import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/Header.css';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';



const Header = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact render={() => (<img src={img1} alt="city" />)} />
                <Route path="/products" render={() => (<img src={img2} alt="city" />)} />
                <Route path="/contact" render={() => (<img src={img3} alt="city" />)} />
                <Route path="/admin" render={() => (<img src={img4} alt="city" />)} />
                <Route render={() => (<img src={img4} alt="city" />)} />
            </Switch>
        </>
    );

}

export default Header;