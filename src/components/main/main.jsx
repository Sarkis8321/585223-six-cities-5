import React from "react";
// eslint-disable-next-line react/prop-types
const Main = () => {

  return (

  <div class="page page--gray page--main">
    <header class="header">
      <div class="container">
        <div class="header__wrapper">
          <div class="header__left">
            <a class="header__logo-link header__logo-link--active">
              <img class="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          <nav class="header__nav">
            <ul class="header__nav-list">
              <li class="header__nav-item user">
                <a class="header__nav-link header__nav-link--profile" href="#">
                  <div class="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span class="header__user-name user__name">Oliver.conner@gmail.com</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main class="page__main page__main--index">
      <h1 class="visually-hidden">Cities</h1>
      <div class="tabs">
        <section class="locations container">
          <ul class="locations__list tabs__list">
            <li class="locations__item">
              <a class="locations__item-link tabs__item" href="#">
                <span>Paris</span>
              </a>
            </li>
            <li class="locations__item">
              <a class="locations__item-link tabs__item" href="#">
                <span>Cologne</span>
              </a>
            </li>
            <li class="locations__item">
              <a class="locations__item-link tabs__item" href="#">
                <span>Brussels</span>
              </a>
            </li>
            <li class="locations__item">
              <a class="locations__item-link tabs__item tabs__item--active">
                <span>Amsterdam</span>
              </a>
            </li>
            <li class="locations__item">
              <a class="locations__item-link tabs__item" href="#">
                <span>Hamburg</span>
              </a>
            </li>
            <li class="locations__item">
              <a class="locations__item-link tabs__item" href="#">
                <span>Dusseldorf</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div class="cities">
        <div class="cities__places-container container">
          <section class="cities__places places">
            <h2 class="visually-hidden">Places</h2>
            <b class="places__found">312 places to stay in Amsterdam</b>
            <form class="places__sorting" action="#" method="get">
              <span class="places__sorting-caption">Sort by</span>
              <span class="places__sorting-type" tabindex="0">
                Popular
                  <svg class="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul class="places__options places__options--custom places__options--opened">
                <li class="places__option places__option--active" tabindex="0">Popular</li>
                <li class="places__option" tabindex="0">Price: low to high</li>
                <li class="places__option" tabindex="0">Price: high to low</li>
                <li class="places__option" tabindex="0">Top rated first</li>
              </ul>

            </form>
            <div class="cities__places-list places__list tabs__content">
              <article class="cities__place-card place-card">
                <div class="place-card__mark">
                  <span>Premium</span>
                </div>
                <div class="cities__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img class="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place image" />
                  </a>
                </div>
                <div class="place-card__info">
                  <div class="place-card__price-wrapper">
                    <div class="place-card__price">
                      <b class="place-card__price-value">&euro;120</b>
                      <span class="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button class="place-card__bookmark-button button" type="button">
                      <svg class="place-card__bookmark-icon" width="18" height="19">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span class="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div class="place-card__rating rating">
                    <div class="place-card__stars rating__stars">
                      <span style="width: 80%"></span>
                      <span class="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 class="place-card__name">
                    <a href="#">Beautiful &amp; luxurious apartment at great location</a>
                  </h2>
                  <p class="place-card__type">Apartment</p>
                </div>
              </article>

              <article class="cities__place-card place-card">
                <div class="cities__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img class="place-card__image" src="img/room.jpg" width="260" height="200" alt="Place image" />
                  </a>
                </div>
                <div class="place-card__info">
                  <div class="place-card__price-wrapper">
                    <div class="place-card__price">
                      <b class="place-card__price-value">&euro;80</b>
                      <span class="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button class="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                      <svg class="place-card__bookmark-icon" width="18" height="19">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span class="visually-hidden">In bookmarks</span>
                    </button>
                  </div>
                  <div class="place-card__rating rating">
                    <div class="place-card__stars rating__stars">
                      <span style="width: 80%"></span>
                      <span class="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 class="place-card__name">
                    <a href="#">Wood and stone place</a>
                  </h2>
                  <p class="place-card__type">Private room</p>
                </div>
              </article>

              <article class="cities__place-card place-card">
                <div class="cities__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img class="place-card__image" src="img/apartment-02.jpg" width="260" height="200" alt="Place image" />
                  </a>
                </div>
                <div class="place-card__info">
                  <div class="place-card__price-wrapper">
                    <div class="place-card__price">
                      <b class="place-card__price-value">&euro;132</b>
                      <span class="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button class="place-card__bookmark-button button" type="button">
                      <svg class="place-card__bookmark-icon" width="18" height="19">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span class="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div class="place-card__rating rating">
                    <div class="place-card__stars rating__stars">
                      <span style="width: 80%"></span>
                      <span class="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 class="place-card__name">
                    <a href="#">Canal View Prinsengracht</a>
                  </h2>
                  <p class="place-card__type">Apartment</p>
                </div>
              </article>

              <article class="cities__place-card place-card">
                <div class="place-card__mark">
                  <span>Premium</span>
                </div>
                <div class="cities__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img class="place-card__image" src="img/apartment-03.jpg" width="260" height="200" alt="Place image" />
                  </a>
                </div>
                <div class="place-card__info">
                  <div class="place-card__price-wrapper">
                    <div class="place-card__price">
                      <b class="place-card__price-value">&euro;180</b>
                      <span class="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button class="place-card__bookmark-button button" type="button">
                      <svg class="place-card__bookmark-icon" width="18" height="19">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span class="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div class="place-card__rating rating">
                    <div class="place-card__stars rating__stars">
                      <span style="width: 100%"></span>
                      <span class="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 class="place-card__name">
                    <a href="#">Nice, cozy, warm big bed apartment</a>
                  </h2>
                  <p class="place-card__type">Apartment</p>
                </div>
              </article>

              <article class="cities__place-card place-card">
                <div class="cities__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img class="place-card__image" src="img/room.jpg" width="260" height="200" alt="Place image" />
                  </a>
                </div>
                <div class="place-card__info">
                  <div class="place-card__price-wrapper">
                    <div class="place-card__price">
                      <b class="place-card__price-value">&euro;80</b>
                      <span class="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button class="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                      <svg class="place-card__bookmark-icon" width="18" height="19">
                        <use xlinkHref="#icon-bookmark-active"></use>
                      </svg>
                      <span class="visually-hidden">In bookmarks</span>
                    </button>
                  </div>
                  <div class="place-card__rating rating">
                    <div class="place-card__stars rating__stars">
                      <span style="width: 80%"></span>
                      <span class="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 class="place-card__name">
                    <a href="#">Wood and stone place</a>
                  </h2>
                  <p class="place-card__type">Private room</p>
                </div>
              </article>
            </div>
          </section>
          <div class="cities__right-section">
            <section class="cities__map map"></section>
          </div>
        </div>
      </div>
    </main>
  </div>

);
};

export default Main;
