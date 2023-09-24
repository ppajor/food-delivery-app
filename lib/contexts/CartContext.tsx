import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface Item {
  id: number;
  name: string;
  price: number;
  currency: string;
  description: string;
}

interface State {
  items: Item[];
  totalCost: number;
  itemsCount: number;
}

interface Action {
  type: string;
  payload?: any;
}

const CartContext = createContext<
  { state: State; dispatch: React.Dispatch<Action> } | undefined
>(undefined);

const initialState: State = {
  items: [],
  totalCost: 0,
  itemsCount: 0,
};

const cartReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload],
        totalCost: state.totalCost + action.payload.price,
        itemsCount: state.itemsCount + 1,
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
        totalCost:
          state.totalCost > action.payload.price
            ? state.totalCost - action.payload.price
            : 0,
        itemsCount: state.itemsCount > 0 ? state.itemsCount - 1 : 0,
      };
    case 'RESET_CART':
      return initialState;
    default:
      return state;
  }
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};
