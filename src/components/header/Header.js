import React from "react";
import { Link } from "react-router-dom";
import avatar from '../../Assets/images/avantar1.jfif'
import "./Header.scss";

export default function Header() {
    return (
        <header className="header">
            <section className="header__section">
                <div className="header__logo">
                    <img alt="Avatar" src={avatar} className="header__avatar--image" />
                </div>
                <div>
                    <div>
                        <h1> Hey Margaret</h1>
                    </div>
                    <a>Edit info</a>
                </div>
            </section>
            <section>
                <div className="header__section--content">
                    <p className="header__section--text">
                        learn more about our data protection, advanced encryption methods, security measures,
                        and comprehensive data privacy features that help you take control of your personal information
                        and safeguard your digital life
                    </p>
                </div>
            </section>

            <section className="header__section--button">
                <button>Activity</button>
                <button>Overview</button>
                <button>social</button>

            </section>

        </header>

    );
}