
import "./App.css"
import { List1 } from "./list";
import { List2 } from "./list";
import Title from "./components/Title";
import Intro from "./components/Intro";
import Hobby1 from "./components/Hobby1";
import Table1 from "./components/Table1.tsx";
import Form1 from "./components/Form1.tsx";

import Hobby2 from "./components/Hobby2";
import Table2 from "./components/Table2.tsx";
import Form2 from "./components/Form2.tsx";

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
            <List2 />
            <Table2 />
            <Form2 />
        </div>
    );
}

export default App;