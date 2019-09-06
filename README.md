# React Native Blog App

## `TIL`

### Navigation

-   Go to previous page

```jsx
navigation.pop();
```

-   Listener

```jsx
const listener = navigation.addListener('didFocus', () => {...});
listener.remove();
```

### FlatList

-   `numColumns`
-   `columnWrapperStyle`

```jsx
<FlatList
    numColumns={2}
    columnWrapperStyle={styles.row}
    keyExtractor={data => data.id}
    data={state}
    renderItem={({ item }) => (...)}
/>
```

### Context

-   Create a context

```jsx
export const Context = React.createContext();
export const Provider = ({ children }) => (
    <Context.Provider value={{ id, name }}>{children}</Context.Provider>
);
```

-   Usage

```jsx
// App.js
<Provider>
    <App />
</Provider>
```

```jsx
import { Context } from './appContext';
const { id, name } = useContext(Context);
```
