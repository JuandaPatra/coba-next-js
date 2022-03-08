import { useRouter } from "next/router";
import {Card, Button} from "react-bootstrap";


interface UserProps{
  dataUser : Array<any>;
}
export default function index(props: UserProps) {
  const { dataUser } = props;
  const router = useRouter();
  // console.log(dataUser);
  return (
    <div className="container">
      <h1>Ini halaman /users</h1>
      {/* {dataUser.map((item,index) => {
        return(
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{{item.name}</Card.Title>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>;
      })
      })} */}
      <div className="d-flex flex-wrap" style={{width:"100%"}}>
      {dataUser.map((item,index)=>{
        return(
        <div key={index} className="ms-2 mb-2 me-2 mt-2">
          <Card style={{ width: "18rem" }} >
            {index %2 ===0 ? <Card.Img variant="top" src="1.jpg" />:<Card.Img variant="top" src="2.jpg" />}
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the cards content.</Card.Text>
            <Button variant="primary" onClick={()=>router.push(`/users/${item.id}`)}>Go somewhere</Button>
          </Card.Body>
          </Card>
        </div>

        )
        
      })}
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const dataUser = await res.json();
  return {
    props: {
      dataUser: dataUser,
    },
  };
}
