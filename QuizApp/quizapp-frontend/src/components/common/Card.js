import styled from 'styled-components';

const CardBlock = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700');

  $color-primary-light: #7ed56f;
  $color-primary-dark: #28b485;
  $color-secondary-light: #ffb900;
  $color-secondary-dark: #ff7730;
  $color-tertiary-light: #2998ff;
  $color-tertiary-dark: #5643fa;

  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', sans-serif;
  }

  .content {
    height: 100vh;
    background: linear-gradient(to bottom right, aqua, lightblue);
    text-align: center;
    padding: 4em 0;
  }

  .cards {
    display: flex;
    justify-content: space-evenly;
  }

  .card {
    width: 25%;
    position: relative;
    height: 25em;
    perspective: 150em;

    &__side {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 25em;
      backface-visibility: hidden;
      transition: all 0.6s ease;
      box-shadow: 1em 1em 2em rgba(0, 0, 0, 0.2);

      &--front {
        background-color: #fff;
      }

      &--back {
        color: #fff;
        transform: rotateY(180deg);

        &-1 {
          background-image: linear-gradient(
            to right bottom,
            $color-primary-light,
            $color-primary-dark
          );
        }

        &-2 {
          background-image: linear-gradient(
            to right bottom,
            $color-tertiary-light,
            $color-tertiary-dark
          );
        }

        &-3 {
          background-image: linear-gradient(
            to right bottom,
            $color-secondary-light,
            $color-secondary-dark
          );
        }
      }
    }

    &:hover &__side--front {
      transform: rotateY(-180deg);
    }

    &:hover &__side--back {
      transform: rotate(0);
    }

    &__description {
      text-transform: uppercase;
      font-size: 5em;
      padding: 1em 0;

      svg {
        width: 1.5em;
        height: 1.5em;
        fill: #fff;
      }
    }
  }
`;

const Card = () => {
  return (
    <CardBlock>
      <section className="content">
        <div className="cards">
          <div className="card">
            <div className="card__side card__side--front card__side--front-1">
              <div className="card__description">1</div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__description">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M10.5,18A0.5,0.5 0 0,1 11,18.5A0.5,0.5 0 0,1 10.5,19A0.5,0.5 0 0,1 10,18.5A0.5,0.5 0 0,1 10.5,18M13.5,18A0.5,0.5 0 0,1 14,18.5A0.5,0.5 0 0,1 13.5,19A0.5,0.5 0 0,1 13,18.5A0.5,0.5 0 0,1 13.5,18M10,11A1,1 0 0,1 11,12A1,1 0 0,1 10,13A1,1 0 0,1 9,12A1,1 0 0,1 10,11M14,11A1,1 0 0,1 15,12A1,1 0 0,1 14,13A1,1 0 0,1 13,12A1,1 0 0,1 14,11M18,18C18,20.21 15.31,22 12,22C8.69,22 6,20.21 6,18C6,17.1 6.45,16.27 7.2,15.6C6.45,14.6 6,13.35 6,12L6.12,10.78C5.58,10.93 4.93,10.93 4.4,10.78C3.38,10.5 1.84,9.35 2.07,8.55C2.3,7.75 4.21,7.6 5.23,7.9C5.82,8.07 6.45,8.5 6.82,8.96L7.39,8.15C6.79,7.05 7,4 10,3L9.91,3.14V3.14C9.63,3.58 8.91,4.97 9.67,6.47C10.39,6.17 11.17,6 12,6C12.83,6 13.61,6.17 14.33,6.47C15.09,4.97 14.37,3.58 14.09,3.14L14,3C17,4 17.21,7.05 16.61,8.15L17.18,8.96C17.55,8.5 18.18,8.07 18.77,7.9C19.79,7.6 21.7,7.75 21.93,8.55C22.16,9.35 20.62,10.5 19.6,10.78C19.07,10.93 18.42,10.93 17.88,10.78L18,12C18,13.35 17.55,14.6 16.8,15.6C17.55,16.27 18,17.1 18,18M12,16C9.79,16 8,16.9 8,18C8,19.1 9.79,20 12,20C14.21,20 16,19.1 16,18C16,16.9 14.21,16 12,16M12,14C13.12,14 14.17,14.21 15.07,14.56C15.65,13.87 16,13 16,12A4,4 0 0,0 12,8A4,4 0 0,0 8,12C8,13 8.35,13.87 8.93,14.56C9.83,14.21 10.88,14 12,14M14.09,3.14V3.14Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CardBlock>
  );
};

export default Card;
