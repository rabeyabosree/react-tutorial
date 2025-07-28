
import Child from './../child/Child';


function Parent() {
    const user = "Rabeya"
  return (
    <div>
        <Child user={user}/>
       
    </div>
  )
}

export default Parent