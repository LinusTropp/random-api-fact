
import { useState } from 'react';
import './App.css'


function App() {

	const [randomFact, setRandomFact] = useState<string>('');


  return (
    <>
	<button onClick={()=> fetchFact(setRandomFact)}>Random</button>
	<p>
		{randomFact}
	</p>
      
    </>
  )
}


async function fetchFact(setRandomFact : React.Dispatch<React.SetStateAction<string>> ) {
	const URL = 'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en';

	const response = await fetch(URL);
	const json = await response.json();
	const randomFact = json.text;
	setRandomFact(randomFact);
	

}


export default App
