var Logo = React.createClass({
  render: function () {
    return (
      <div className="header__logo pure-u-1-4">
        <img src="../images/logo.png" alt="Maggie Walters Media Gallery Logo"/>
      </div>
    )
  }
});

var Navigation = React.createClass({
  render: function () {
    return (
      <nav className="header__nav pure-u-3-4">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/donate">Donate</a></li>
        </ul>
      </nav>
    )
  }
});

var Header = React.createClass({
  render: function () {
    return (
      <header className="header pure-g">
        <Logo />
        <Navigation />
      </header>
    );
  }
});

module.exports = Header;