# React Basic Learning 


### Component Basics:

1.)  Creating a functional component:

``` import React from 'react';

const MyComponent = () => {
  return <div>Hello, World!</div>;
};

export default MyComponent;
```
Using props in a functional component:

``` import React from 'react';

const Greeting = (props) => {
  return <div>Hello, {props.name}!</div>;
};

export default Greeting;

````


2.) State and Hooks:

Using state with the useState hook:

```
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
```

Handling side effects with the useEffect hook:
```
import React, { useEffect } from 'react';

const DataFetcher = () => {
  useEffect(() => {
    // Perform data fetching or side effect here

    return () => {
      // Clean up resources or subscriptions here
    };
  }, []);

  return <div>Data fetching example</div>;
};

export default DataFetcher;
```

3.) Component Composition:

Composing components together:

```
import React from 'react';

const Button = (props) => {
  return <button onClick={props.onClick}>{props.label}</button>;
};

const App = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <h1>My App</h1>
      <Button label="Click Me" onClick={handleClick} />
    </div>
  );
};

export default App;
```
4.) Conditional Rendering:

Rendering content conditionally:


```import React from 'react';

const UserGreeting = () => {
  return <div>Welcome back!</div>;
};

const GuestGreeting = () => {
  return <div>Please sign up.</div>;
};

const Greeting = (props) => {
  if (props.isLoggedIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
};

export default Greeting;
```
5.) Handling Events:

 Handling user events:
 
```import React from 'react';

const Button = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return <button onClick={handleClick}>Click Me</button>;
};

export default Button;
```