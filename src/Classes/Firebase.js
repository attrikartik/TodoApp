import firebaseDb from '../firebaseConfig'


export const  fetchData =  () => {
        let arr=[], keys=[]
        /** getting data from firebase store if any  */
        firebaseDb.child("projects").on("value", (snapshot) => {
         
            /** if data found render it */
            if (snapshot.val() != null) {
                const data = {...snapshot.val()}
                arr  = []
                keys = Object.keys(data);
                /** converting objects to array of objectss */
                for(let i=0,n=keys.length;i<n;i++){
                    let key  = keys[i];
                    arr[key] = data[key];
                }
                let totalTasks = 0
                /**counting total tasks which are already in firebase store */
                for(let key in arr){
                    totalTasks += arr[key].tasks.length
                }
                return new Promise({
                    arr: arr,
                    totalTasks: totalTasks
                })
                // return res
            }
        })
      
        return 'as'
        // return ('arr')


    }

    // static addTask(){

    // }

    // static updateTask(){

    // }

    // static deleteTask(){

    // }

    // static deletColumn(){

    // }


