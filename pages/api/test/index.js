import nc from "next-connect";

const users =[
    {id:1,name:"uttam kumar", email:"uttam.designer@gmail.com", phone:"9560305437"},
    {id:2,name:"Adtiya K", email:"adtiya.k@gmail.com", phone:"9899258277"},
    {id:3,name:"Manish", email:"manish@gmail.com", phone:"9891006383"},
    {id:4,name:"Sudhesh", email:"sudhesh@gmail.com", phone:"888198525"},
]
const handler = nc()
  .get((req, res) => {
    res.send(users);
  })

export default handler;