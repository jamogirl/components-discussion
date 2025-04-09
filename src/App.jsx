
import{Header} from "./components/Header";
import{Profile } from "./components/Profile";
import{Footer} from "./components/Footer";

function App() {
	return (
		<div className="min-h-screen bg-gray-50 text-gray-800">
			<Header title={"Practice React Component and Props"}/>
		<main className="p-4">
			<Profile
			name={"Jane Doe"}
			title={"React Developer"}
			location={"Nairobi,Kenya"}
			avatar={
			"https://static.vecteezy.com/system/resources/thumbnails/002/002/257/small/beautiful-woman-avatar-character-icon-free-vector.jpg"}
			/>
			</main>
			<Footer message={"DO NOT USE GPT OR ANY OTHER AI"}/>
			</div>
	);
}
export default App;
