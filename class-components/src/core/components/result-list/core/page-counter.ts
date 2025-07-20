export const pageCounter = (stateObj:any,
                            state:any,
                            left: boolean, 
                            right:boolean) => {

    if (left && !right) {
        if (stateObj.page <= 1) {
            stateObj.page = 1
        } else {
            stateObj.page -=1
        }
    } else {
         if (stateObj.page >= 10) {
            stateObj.page = 10
        } else {
            stateObj.page +=1
        }
    }


}