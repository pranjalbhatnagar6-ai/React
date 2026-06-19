// Loop in JSX with map function  

function Loop() {
  const userName = ['Anil', 'Sam', 'peter', 'Bruce'];

  const userData = [
    {
      name: 'Anil',
      age: '29',
      email: 'anil@test.com',
      id: 1,
    },
    {
      name: 'PB',
      age: '21',
      email: 'pb@test.com',
      id: 2,
    },
    {
      name: 'TV',
      age: '29',
      email: 'tv@test.com',
      id: 3,
    },
  ]


  return (
    <div>
      <h1>Loop in JSX with Map Function</h1>
      <table border="1">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => {
            return (
              <tr key={user.id}>
                {/*key helps React track each row */}
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
export default Loop;
