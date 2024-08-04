export const FetchingData = ({ users, createUser }) => {
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
          </div>
        );
      })}

      <button onClick={createUser}> Crear usuario </button>
    </div>
  );
};
