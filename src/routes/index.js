import NotFound from './NotFound';
import MainPage from './MainPage';
import Access from './Access';
import Challenges from '../components/Challenges/Challenges';
import MyChallenges from '../components/MyChallenges/MyChallenges';
import PublicProfile from '../components/UserProfile/PublicProfile';
import PrivateProfile from '../components/UserProfile/PrivateProfile';
import Onboarding from '../components/Onboarding/Onboarding';
import Ranking from '../components/Ranking/Ranking';
import Notifications from '../components/Notifications/Notifications';

export const BASEROUTE = '/';

export const ROUTE_MAIN_PAGE = '/main';
export const ROUTE_LOGIN = '/access';
export const ROUTE_LOGOUT = '/logout';
export const ROUTE_CHALLENGE = '/challenge';
export const ROUTE_MYCHALLENGE = '/mychallenge';
export const ROUTE_PUBLIC_PROFILE = '/profile';
export const ROUTE_PRIVATE_PROFILE = '/privateprofile';
export const ROUTE_ONBOARDING = '/onboarding';
export const ROUTE_RANKING = '/ranking';
export const ROUTE_NOTIFICATION = '/notification';

export const routes = [
  {
    path: BASEROUTE,
    component: Challenges,
    exact: true,
    header: true,
    ignoreSession: false,
  },
  {
    path: ROUTE_MAIN_PAGE,
    component: MainPage,
    exact: false,
    header: true,
    ignoreSession: false,
  },
  {
    path: ROUTE_LOGIN,
    component: Access,
    exact: false,
    header: false,
    ignoreSession: true,
  },
  {
    path: ROUTE_CHALLENGE,
    component: Challenges,
    exact: false,
    header: false,
    ignoreSession: true,
  },
  {
    path: ROUTE_MYCHALLENGE,
    component: MyChallenges,
    exact: false,
    header: false,
    ignoreSession: true,
  },
  {
    path: ROUTE_PUBLIC_PROFILE,
    component: PrivateProfile,
    exact: false,
    header: false,
    ignoreSession: true,
  },
  {
    path: ROUTE_PRIVATE_PROFILE,
    component: PrivateProfile,
    exact: false,
    header: false,
    ignoreSession: true,
  },
  {
    path: ROUTE_ONBOARDING,
    component: Onboarding,
    exact: false,
    header: false,
    ignoreSession: true,
  },
  {
    path: ROUTE_RANKING,
    component: Ranking,
    exact: false,
    header: false,
    ignoreSession: true,
  },
  {
    path: ROUTE_NOTIFICATION,
    component: Notifications,
    exact: false,
    header: true,
    ignoreSession: true,
  },
  {
    component: NotFound,
    header: false,
  },
];
