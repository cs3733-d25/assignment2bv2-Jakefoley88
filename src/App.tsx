import Title from "./components/Title";
import Intro from "./components/Intro";
import Hobby1 from "./components/Hobby1";
import List1 from "./components/List1";
import Table1 from "./components/Table1.tsx";

import Hobby2 from "./components/Hobby2";

import "./App.css"
import Form1 from "./components/Form1.tsx";

function App() {

    return (
        <div>
            <Title />
            <Intro />
            <Hobby1 />
            <List1 />
            <Table1 />
            <Form1 />

            <Hobby2 />
        </div>
    );
}

export default App;