import React from 'react';
import PropTypes from 'prop-types';
import './Header.css'

import UMichBlockM from './UMichBlockM'
import UMichLibrary from './UMichLibrary'

const NavItem = ({
  item,
  renderAnchor
}) => {
  if (item.href) {
    return (
      <a href={item.href}>{ item.text }</a>
    )
  }

  if (item.to) {
    return (
      renderAnchor(item)
    )
  }
}

const Header = ({
  name,
  siteUrl,
  nav,
  renderAnchor
}) => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="logo">
          <a href="https://umich.edu/" className="logo__blockm"><UMichBlockM className="logo__svg" /></a>
          <a href="https://www.lib.umich.edu/" className="logo__library"><UMichLibrary className="logo__svg" /></a>
          {name && siteUrl && (<a href={siteUrl} className="logo__site-name-link">{name}</a>)}
        </div>

        {nav && nav.length && (
          <nav className="header__nav">
            <ul className="header__nav-list">
              {nav.map((item, key) => (
                <li key={key} className="header__nav-list-item"><NavItem item={item} renderAnchor={renderAnchor} /></li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

Header.propTypes = {
  name: PropTypes.string,
  siteUrl: PropTypes.string,
  renderAnchor: PropTypes.func,
  nav: PropTypes.array
};

Header.defaultProps = {
  siteUrl: '/',
};

export default Header
