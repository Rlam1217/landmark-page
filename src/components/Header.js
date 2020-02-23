import React from "react";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      showMenu: false
    };
  }
  toggleClass() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    return (
      <header>
        <div
          className={this.state.showMenu ? "menu-btn close" : "menu-btn"}
          onClick={this.toggleClass}
        >
          <div className="btn-line" />
          <div className="btn-line" />
          <div className="btn-line" />
        </div>
        <nav className={this.state.showMenu ? "menu show" : "menu"}>
          <ul className="menu-nav">
            <li className="nav-item current">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/about.html" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/work.html" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact.html" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}