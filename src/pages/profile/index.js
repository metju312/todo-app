function ProfilePage(props) {
  return (
    <div>ProfilePage: {props.username}</div>
  );
}

export async function getServerSideProps(context) {
  const {params, req, res} = context;

  return {
    props: {
      username: 'Max'
    }
  }
}

export default ProfilePage;