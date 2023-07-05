import React from 'react';

import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div id="header" className={`${props.attr[0]} ${props.attr[1]} ${props.attr[2]}`} role="heading" aria-level="1">
      <div className="header__inner container">
        <h1 className="header__logo">
          <Link to="/">
            web <em>site</em>
          </Link>
        </h1>
        <nav className="header__nav" role="navigation">
          <ul>
          <li>
              <Link to="/intro">소개</Link>
            </li>
            <li>
              <Link to="/member">멤버</Link>
            </li>
            <li>
              <Link to="/port">포트폴리오</Link>
            </li>
            <li>
              <Link to="/youtube">유튜브</Link>
            </li>
            <li>
              <Link href="/unsplash">이미지</Link>
            </li>
            <li>
              <Link to="/movie">영화</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
