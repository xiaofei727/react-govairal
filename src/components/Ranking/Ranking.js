import React from 'react';
import RankingLine from './RankingLine';

class Ranking extends React.Component {
  render() {
    return (
      <section className='MainContentWrapper WithoutTopMenu'>
        <div className='columns is-mobile'>
          <div className='column is-12'>
            <p className='Header__Text Semibold__font Font--Large PaddingBottom__None'>
              Ranking
            </p>
            <p className='Font--SemiMedium Semibold__font'>Tu puesto</p>
          </div>
        </div>
        <div className='card'>
          <div className='card-content has__MediumShadow'>
            <div className='columns is-mobile'>
              <div className='column is-3'>
                <i className='fas fa-caret-up Increasing' />
                 125
              </div>
              <div className='column is-2'>
                <img
                  className='has_MarginAuto'
                  src='assets/image/user.png'
                  width={30}
                />
              </div>
              <div className='column is-4'>@eperez</div>
              <div className='column is-3 has-text-right PaddingTop__None'>
                <p className='Font--Small Position--Relative'>
                  pts.
                  <br />
                  <span className='Font--SemiMedium Semibold__font Point__Overlay'>
                    125
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <p className='Semibold__font Font--SemiMedium'>Clasificación general</p>
        <br />
        <div>
          <RankingLine />
          <RankingLine />
          <RankingLine />
          <RankingLine />
          <RankingLine />
          <RankingLine />
          <RankingLine />
          <RankingLine />
          <RankingLine />
          <RankingLine />
        </div>
      </section>
    );
  }
}

export default Ranking;
