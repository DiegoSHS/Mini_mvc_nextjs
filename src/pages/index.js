import Mensaje from "@/views/mensaje"

const Home = ({ msj }) => {
  const { message } = msj
  return (
    <>
      <Mensaje mensaje={message} />
    </>
  )
}

export const getServerSideProps = async ctx => {
  const jsonData = await fetch('http://localhost:3000/api/controllers')
  const msj = await jsonData.json()
  console.log(msj)
  return {
    props: {
      msj
    }
  }
}

export default Home
