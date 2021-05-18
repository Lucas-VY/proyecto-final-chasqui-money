import React, { useState, useEffect } from "react";
import getState from "./flux";

export const Context = React.createContext(null);

const injectContext = (PassedComponent) => {
  const StoreWrapper = (props) => {
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: (updateStore) =>
          setState({
            store: Object.assign(state.store, updateStore),
            actions: { ...state.actions },
          }),
      })
    );

    useEffect(() => {
      state.actions.getProfile();
      state.actions.transferencias();
      

      

      /* state.actions.login(); */
      state.actions.registro();
    }, [state.actions]);

    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };
  return StoreWrapper;
};

export default injectContext;





/* import React, { createContext, useState, useEffect } from "react";
import getState from "./flux";


export const Context = createContext(null);

const injectContext = (PassedComponent) => {
  const StoreWrapper = (props) => {
    //this will be passed as the contenxt value
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: (updatedStore) =>
          setState({
            store: Object.assign(state.store, updatedStore),
            actions: { ...state.actions },
          }),
      })
    );

    useEffect(() => {
      // funciones a ejecutar cuando cargue la pag
      state.actions.getProfile();
      state.actions.login();
      state.actions.registro();
      //state.actions.transferencias();
      //state.actions.contactanos();
      //state.actions.contactanosPerfil();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };
  return StoreWrapper;
};

export default injectContext;
 */