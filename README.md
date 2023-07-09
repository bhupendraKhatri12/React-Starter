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

6.) Styling and CSS:

Applying CSS classes to components:

```
import React from 'react';
import './Button.css';

const Button = () => {
  return <button className="my-button">Click Me</button>;
};

export default Button;
```
8.) Forms and User Input:

Handling form input and state:

```i
import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted!', username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;

```


# React Functional Component Lifecycle
React functional components have a simplified lifecycle compared to class components. The following diagram illustrates the lifecycle events in a React functional component:


```mermaid
graph TD
    A[Mounting] --> B[Rendering]
    B --> C[useEffect]
    C --> D[Unmounting]
;

### Mounting: Occurs when the component is created and inserted into the DOM.
#
### Rendering: The component renders its JSX and updates when its state or props change.
# 
### useEffect: Hook that allows performing side effects, such as data fetching or subscribing to events.
#
### Unmounting: Occurs when the component is removed from the DOM, allowing cleanup of resources.
#

Example Code: 

```
import React, { useEffect, useState } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return <div>{data ? JSON.stringify(data) : 'Loading data...'}</div>;
};

export default DataFetcher;
 
 ```

 In this example, the useEffect hook runs once after the component is mounted, indicated by the empty dependency array ([]). It fetches data from an API and updates the component's state with the result.

Remember to refer to the React documentation and explore additional hooks and their use cases for more complex scenarios.

```markdown
<script>
  mermaid.initialize({ startOnLoad: true });
</script>
