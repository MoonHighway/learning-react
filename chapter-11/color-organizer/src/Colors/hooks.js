import React, {
  useReducer,
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  useDebugValue
} from "react";
import { v4 } from "uuid";

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  useDebugValue(value);
  return [
    { value, onChange: e => setValue(e.target.value) },
    () => setValue(initialValue)
  ];
};

const ColorContext = createContext();
export const useColors = () => {
  const ctx = useContext(ColorContext);
  useDebugValue(ctx.colors.length);
  return ctx;
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_COLOR":
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          color: action.payload.color,
          rating: 0
        }
      ];
    case "REMOVE_COLOR":
      return state.filter(c => c.id !== action.payload.id);
    case "RATE_COLOR":
      return state.map(c =>
        c.id !== action.payload.id ? c : { ...c, rating: action.payload.rating }
      );
    default:
      return state;
  }
};

export const ColorProvider = ({ children }) => {
  const initColors = localStorage.getItem("colors");
  const [_colors, dispatch] = useReducer(
    reducer,
    initColors ? JSON.parse(initColors) : []
  );

  const colors = useMemo(() => _colors, [_colors]);

  const addColor = useCallback((title, color) =>
    dispatch({
      type: "ADD_COLOR",
      payload: {
        id: v4(),
        title,
        color
      }
    })
  );

  const removeColor = useCallback(id => {
    dispatch({
      type: "REMOVE_COLOR",
      payload: { id }
    });
  });

  const rateColor = useCallback((id, rating) => {
    dispatch({
      type: "RATE_COLOR",
      payload: { id, rating }
    });
  });

  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colors));
  }, [colors]);

  return (
    <ColorContext.Provider value={{ colors, addColor, rateColor, removeColor }}>
      {children}
    </ColorContext.Provider>
  );
};
