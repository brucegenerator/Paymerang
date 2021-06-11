# Paymerang Tech Assessment

- Given the assignment to drill down and extract nested array of objects via JSON
- Scaffolded react app with CRA and got busy testing the waters
- Initially I was aiming to make it as granular as possible with Card Components to handle what I considered the prominent objects in the sample data
- Ran into tiredness, time and bugs so I scrapped my initial plan and focused on getting the data extracted and rendered to the DOM
- Lots of googling why code dont work
- Learned some new tricks about Hooks that I really like, the simple beauty of programmatic pagination, and the things CSSTransition doesnt like (nested Transition components with nested state updates within a nested map function makes big ugly red)
- I started a backend folder because I want to eventually hook mongodb up to it and read and write the data from a REST API and also build a search engine to locate specific paramaters via queries.
- The apps ugly and has some issues I would like to address over the weekend. Namely the mapped content contains the methods for controlling the hiding and showing of content attached to each onClick listener so clicking one button updates the state for each mapped item, ie opening the drop down opens all the dropdowns.
- Some resources I used:
-  http://reactcommunity.org/react-transition-group/css-transition#CSSTransition-prop-onEnter super cool component library I started using for modals and sidedrawers a couple weeks ago.
-  https://mdbootstrap.com/ haven't touched bootstrap in a long time so I thought I'd give it a whirl.
-  https://stackoverflow.com/questions/40232847/how-to-implement-pagination-in-reactjs found a simple todo code snippet and I converted the basic principals of class based component state to react hooks state
-  
-  ```const toggleChecked = () => setChecked(value => !value);```
- glad i found this code snippet on stackoverflow and was able to implement it as a boolean check on the state of my shown and hidden content since i was initially using two different methods to handle the state and that also led to some of the aforementioned touchiness of CSSTransition not liking all the nested state updates causing infinite loops. 
