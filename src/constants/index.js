export const BASE_URL = 'http://localhost:5000/api/';

export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
export const NOW_PLAYING_MOVIE_URL = BASE_URL + 'movie/now-playing';
export const UPCOMING_MOVIE_URL = BASE_URL + 'movie/upcoming';
export const POPULAR_MOVIE_URL = BASE_URL + 'movie/popular';
export const DISCOVER_MOVIE_URL = BASE_URL + 'movie/discover';
export const MOVIE_SEARCH_URL = BASE_URL + 'movie';

export const FIND_NOW_PLAYING_MOVIES = 'FIND_NOW_PLAYING_MOVIES';
export const FIND_UPCOMING_MOVIES = 'FIND_UPCOMING_MOVIES';
export const FIND_POPULAR_MOVIES = 'FIND_POPULAR_MOVIES';
export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const FIND_MOVIE_DETAILS = 'FIND_MOVIE_DETAILS';
export const FAVORITE_MOVIE = 'FAVORITE_MOVIE';
export const WATCHLIST_MOVIE = 'WATCHLIST_MOVIE';
export const FETCH_FAVORITE_MOVIES = 'FETCH_FAVORITE_MOVIES';
export const FETCH_WATCHLIST_MOVIES = 'FETCH_WATCHLIST_MOVIES';

export const DISCOVER_MOVIES = 'DISCOVER_MOVIES';
export const TOGGLE_SORT_DROPDOWN = 'TOGGLE_SORT_DROPDOWN';
export const SET_SORT_DROPDOWN_VALUE = 'SET_SORT_DROPDOWN_VALUE';
export const TOGGLE_ORDER_DROPDOWN = 'TOGGLE_ORDER_DROPDOWN';
export const SET_ORDER_DROPDOWN_VALUE = 'SET_ORDER_DROPDOWN_VALUE';

//Login constants
export const TEXT_CHANGED = 'TEXT_CHANGED';
export const SAVE_USERNAME_AND_USERTYPE = 'SAVE_USERNAME_AND_USERTYPE';
export const SAVE_USER_TYPE = 'SAVE_USER_TYPE';
export const FETCH_PROFILE ='FETCH_PROFILE';
export const LOGOUT = 'LOGOUT';

//Fan constants
export const ALL_FANS_RESULTS = 'ALL_FANS_RESULTS';
export const FAN_LIKED_RESULTS = 'FAN_LIKED_RESULTS';
export const ACTOR_EVENT_RESULTS = 'ACTOR_EVENT_RESULTS';
export const OPEN_FAN_DETAILS = 'OPEN_FAN_DETAILS';
export const CLOSE_FAN_DETAILS = 'CLOSE_FAN_DETAILS';
export const FETCH_FOLLOWING = 'FETCH_FOLLOWING';

export const ALL_EVENTS_FOR_ACTOR = 'ALL_EVENTS_FOR_ACTOR';
export const TOGGLE_EVENT = 'TOGGLE_EVENT';

export const ADMIN_SAVE_USERS = 'ADMIN_SAVE_USERS';
export const ALL_FAVORITE_MOVIES = 'ALL_FAVORITE_MOVIES';

export const CREATE_REVIEW = 'CREATE_REVIEW';
export const FIND_ALL_REVIEWS_FOR_MOVIE = 'FIND_ALL_REVIEWS_FOR_MOVIE';
export const FIND_USER_BY_ID = 'FIND_USER_BY_ID';
export const ALL_REVIEWS_FOR_USER = 'ALL_REVIEWS_FOR_USER';