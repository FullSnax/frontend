export default function UserInfo({ user }) {

  console.log(user)
  return (
    <div>
      <h1>{user.username}</h1>
    </div>
  );
}

