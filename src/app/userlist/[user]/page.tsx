const User = async ({ params }: { params: { user: string } }) => {
  const { user } = await params;
  return (
    <div>
      <h1>Information About {user}</h1>
      <p>Hello, I'm {user}</p>
    </div>
  );
};
export default User;
