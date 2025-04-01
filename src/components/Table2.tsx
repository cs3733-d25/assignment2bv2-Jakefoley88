
function Table2() {
    return (
    <div className="table-container">
        <h2>Popular PC Component Characteristics</h2>
        <table>
            <thead>
                <tr>
                    <th>Component</th>
                    <th>Primary Function</th>
                    <th>Notable Brands</th>
                    <th>Part I Own</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>CPU</td>
                    <td>Processing tasks</td>
                    <td>Intel, AMD</td>
                    <td>AMD Core i7-8700K</td>
                </tr>
                <tr>
                    <td>GPU</td>
                    <td>Rendering graphics</td>
                    <td>NVIDIA, AMD</td>
                    <td>NVIDIA GeForce RTX 2070 Super</td>
                </tr>
                <tr>
                    <td>Motherboard</td>
                    <td>Connecting components</td>
                    <td>ASUS, MSI, Gigabyte</td>
                    <td>ASUS ROG Strix Z370-E</td>
                </tr>
                <tr>
                    <td>RAM</td>
                    <td>Temporary data storage</td>
                    <td>Corsair, G.SKILL, Kingston</td>
                    <td>Corsair Vengeance LPX 16GB</td>
                </tr>
            </tbody>
        </table>
    </div>
    );
}

export default Table2;