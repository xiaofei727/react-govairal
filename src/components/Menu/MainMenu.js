import React from 'react';
import { Link } from 'react-router-dom';

class MainMenu extends React.Component {
  render() {
    return (
      <section className='MainMenu'>
        <div className='columns is-mobile is-centered'>
          <div className='column has-text-centered is-menu'>
            <i className='fas fa-chart-bar' />
            <p className='Font--Menu'><Link to="ranking">RANKING</Link></p>
          </div>
          <div className='column has-text-centered is-menu'>
            <i className='far fa-edit' />
            <p
              className='Font--Menu'
              style={{
                minWidth: '80px',
              }}
            >
              <Link to="mychallenge">MIS RETOS</Link>
            </p>
          </div>
          <div className='column has-text-centered is-menu active'>
            <figure className='image is-24x24 has_MarginAuto'>
              <Link to="challenge"><img src='assets/image/menu.png' /></Link>
            </figure>
          </div>
          <div className='column has-text-centered is-menu'>
            <i className='far fa-bell' />
            <p className='Font--Menu'><Link to="notification">NOTIFICACIONES</Link></p>
          </div>
          <div className='column has-text-centered is-menu'>
            <i className='far fa-user' />
            <p className='Font--Menu'><Link to="profile">Perfil</Link></p>
          </div>
        </div>
      </section>
    );
  }
}

export default MainMenu;
