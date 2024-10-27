
import useQueryGet from "../../hooks/useQueryGet"
import { users } from "../../types/usersType"

type course = {
  name:string
}

const Landing = () => {
  const {data} = useQueryGet<users[]>(`/users` , ['users'])

  return (
    <div>
      { data?.map(item=>{
        return(
          <h1>{item.email}</h1>
        )
      })}
    </div>
  )
}

export default Landing