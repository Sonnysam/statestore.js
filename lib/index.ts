
import * as StateStore from "./global_store";
import * as ContextsStore from "./context_store";
export const { getStore, subscribe, unsubscribe, updateStore, deleteProvider, deleteStore } = StateStore;
export const {getContext, updateContext,createContext, subscribeToContext, unsubscribeToContext, destroyContext} = ContextsStore;
