// pages/Home.jsx
export default function Home() {

  const h2 = 'Fun Times';
  const myDiv = (
    <div>
      <h2> {h2}</h2>
      <p className="summer-message">
        Summer is for eating ice cream. When I was a child, my aunt bought me an
        ice cream bar. It had a chocolate coating outside with chooclate ice
        cream inside and there was an internal thrid layer containg a real
        chocolate bar. It made eating ice cream fun. It was called "Funtoon
        ice-cream bar". I am grateful for the funtimes eating funtoon ice cream.
      </p>
    </div>
  );
  
    return ( <> 
        <h1>Welcome to the Home Page</h1>;
        {myDiv}
    </>); 
  }
  