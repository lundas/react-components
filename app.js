// TODO
const { useState } = React;

const GroceryList = (props) => (
    <ul>
      {props.groceries.map((grocery) => (
        <GroceryListItem grocery={grocery}  />
      ))}
    </ul>
)

const GroceryListItem = (props) => {
  const [isDone, setIsDone] = useState(false);
  const style = {
    fontWeight: isDone ? 'bold' : 'none'
  };

  return (
    <li style={style} onMouseOver={() => setIsDone(!isDone)}>{props.grocery}</li>
  )
}



const App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceries={['Tide Pods', 'Nuggies']} />
  </div>
)

ReactDOM.render(<App />, document.getElementById("app"));