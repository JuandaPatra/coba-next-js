import Layout from "../components/layout"

interface Blog{
  userId : number,
  id :number,
  title :string,
  body : string,
}

interface BlogDetailProps{
  dataBlog : Blog[]
}

export default function blog(props :BlogDetailProps) {
  const {dataBlog} = props
  console.log(dataBlog)
  return (
    <Layout>
      <h1>Tes Ke halaman blog</h1>

      {dataBlog.map((item :any)=>(
          <div key={item.id}>
            <p>{item.title}</p>
          </div>
      )
      )}
    </Layout>
    
    
  )
}


export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const dataBlog = await res.json()

  return{
    props:{
      dataBlog 
    }
  }
  
}