// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
// import { getHooks } from 'utils/hooks';

import { getHooks } from './utils/hooks';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

// TODO add /main/settings, /main/new, /main/log, /main/trees

export default function createRoutes(store) {
  // Create reusable async injectors using getHooks factory
  const { injectReducer, injectSagas } = getHooks(store);

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/signup',
      name: 'signUp',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/SignUp/reducer'),
          System.import('containers/SignUp'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('signUp', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/main',
      name: 'mainPage',
      childRoutes: [
        {
          path: '/main/new',
          name: 'newCallPage',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/NewCallPage/reducer'),
              System.import('containers/NewCallPage/sagas'),
              System.import('containers/NewCallPage'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('newCallPage', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        },

        {
          path: '/main/settings',
          name: 'settingsPage',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/SettingsPage/reducer'),
              System.import('containers/SettingsPage/sagas'),
              System.import('containers/SettingsPage'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('settingsPage', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        },
        {
          path: '/main/log',
          name: 'logPage',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/LogPage/reducer'),
              System.import('containers/LogPage/sagas'),
              System.import('containers/LogPage'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('logPage', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        }, {
          path: '/main/trees',
          name: 'dialogTreesPage',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/DialogTreesPage/reducer'),
              System.import('containers/DialogTreesPage/sagas'),
              System.import('containers/DialogTreesPage'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('dialogTreesPage', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        },
      ],

      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/MainPage/reducer'),
          System.import('containers/MainPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('mainPage', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',

      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
