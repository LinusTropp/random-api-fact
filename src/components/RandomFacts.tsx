import { useSelector } from "react-redux";
import { RootState } from "../main";
import { FactStatus } from "../features/randomFact";

function RandomFact() {
	
	const randomFact = useSelector((state : RootState) =>state.RandomFact);

	let content: string|null=null;
	switch(randomFact.status) {
		case FactStatus.NORMAL :
			content ='Ready for a fact?';
			break;
		case FactStatus.FETCHING :
			content ='Waiting for a fact';
			break;
		case FactStatus.SUCCES : 
			content = randomFact.fact;
			break;
		default :
			content = 'no fact available';
	}
	return (
		<>
			{content}
		</>
	)

}

export default RandomFact