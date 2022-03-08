import Layout from "../../components/layout";

interface User{
  id: number,
  name: string,
  email : string,
  phone : string,
  website : string
}

interface UserDetailProps{
  user : User
}

export default function detail(props: UserDetailProps) {
  const {user} =props

  return (
    <Layout>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <h1>{user.phone}</h1>
      <h1>{user.website}</h1>
    </Layout>
  );
}


export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const dataUser = await res.json();

  const paths = dataUser.map((item:User)=>({
    params :{
      id : `${item.id}`
    }
  }))

  return{
    paths,
    fallback : false
  }
  
}

interface GetStaticProps{
  params:{
    id: string
  }
}
export async function getStaticProps(context: GetStaticProps) {
  const {id} = context.params
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return{
    props:{
      user
    }
  }
  
}