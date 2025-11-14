export const initialStore=()=>{
  return{
    message: null,
    people: [],
    faves: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    case 'setPeople':
      const { people } = action.payload
      
      return {
        ...store,
        people: people
      };
    case 'toggleFavorites':
      const { item, addition } = action.payload
      
      if(addition) {
        return {
          ...store,
          faves: [...store.faves, item]
        };
      }
      else {
        let newFaves = store.faves.filter((fav, index) => {
          if(item != fav) return fav
        })
        return {
          ...store,
          faves: newFaves
        };
      }
    default:
      throw Error('Unknown action.');
  }    
}
