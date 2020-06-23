export const setList = ( state, lists ) =>{
      
    let arr=[], keys=[], currentColId = 0, curentTaskId = 0
    const data = lists
    arr  = []
    keys = Object.keys(data);
    /** converting objects to array of objects */
    for(let i=0,n=keys.length;i<n;i++){
        let key  = keys[i];
        if(data[key].tasks){
            let length = data[key].tasks.length
            curentTaskId = data[key].tasks[length-1].id
        }
        currentColId = data[key].colID
        arr[key] = data[key];
    }
    
    return{
        ...state,
        lists:   lists,
        COL_ID:  currentColId,
        TASK_ID: curentTaskId,
    }

}

export const addColumn = (state) => {
    let colId = state.COL_ID

    /** create new column */
    const newColumn = {
       colID: ++colId ,
       title:'',
       tasks:[]
    }

    return{
        ...state,
        lists: state.lists.concat(newColumn),
        COL_ID: colId
    }

}
export const addTask = (state, columns) => {
    return{     
        ...state,
        lists:   columns,
        TASK_ID: state.TASK_ID + 1,
    }    
}

export const updateTask = (state, columns) => {
    return{
        ...state,
        lists:  columns,
        isEdit: !state.isEdit,
        loading: false             
    } 
}

export const handleEdit = (state,data) => {
    let colIndex = [...state.lists].findIndex(col=>col.colID === data.colId)
    let taskIndex  = state.lists[colIndex].tasks.findIndex(t=>t.id === data.taskId)
    let editTask = state.lists[colIndex].tasks[taskIndex]
    return{
        ...state,
        editTaskId: data.taskId,
        editColId: data.colId,
        taskToBeEdit: editTask,
        isEdit: !state.isEdit
    }
}

export const deleteTask = (state,data) => {
    let lists = [...state.lists]
    let tasks = lists[data.colIndex].tasks
    tasks = tasks.filter(t=>t.id !== data.taskId)
    lists[data.colIndex].tasks =tasks
    return{
        ...state,
        list: lists,
        loading: false
    }
}

export const deleteColumn = (state, id) => {
    let columns = [...state.lists].filter(col=>col.colID !== id)
    return{
        ...state,
        lists: columns,
        loading: false
    }
}

export const cancelEdit = (state) =>{
    return{
        ...state,
        isEdit: !state.isEdit
    }
}
export const startLoading = (state) =>{
    return {   
        ...state,
        loading: true      
    } 
}

export const stopLoading = (state) =>{
    return {   
        ...state,
        loading: false      
    } 
}
