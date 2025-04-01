

function Table1() {
    return (
      <div className="table-container">
          <h2>Missions I am excited about:</h2>
          <hr />

          <table className="collapse">
              <tbody>
              <tr>
                  <th>Mission Name:</th>
                  <th>Date:</th>
                  <th>Company:</th>
              </tr>
              </tbody>
              <tbody>
              <tr>
                  <td>Europa Clipper</td>
                  <td>Oct 2024 - Apr 2030</td>
                  <td>NASA</td>
              </tr>
              </tbody>
              <tbody>
              <tr>
                  <td>Artemis 2</td>
                  <td>Apr 2026</td>
                  <td>NASA</td>
              </tr>
              </tbody>
              <tbody>
              <tr>
                  <td>Occupy Mars</td>
                  <td>Nov 2026</td>
                  <td>SpaceX</td>
              </tr>
              </tbody>
          </table>
      </div>

    );
}

export default Table1;