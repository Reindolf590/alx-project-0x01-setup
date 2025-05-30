import Header from "@/components/layout/Header";

const Users: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-7xl font-thin">Welcome Page</h1>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}


 export default Users;