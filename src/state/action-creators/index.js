export const addMoney=(amount)=>{
    return (dispatch)=>{
        dispatch({
            type:'add',
            payload:amount
        })

    }
}

export const minusMoney=(amount)=>{
    return (dispatch)=>{
        dispatch({
            type:'minus',
            payload:amount
        })

    }
    
}

export const multMoney=(amount2)=>{
    return (dispatch)=>{
        dispatch({
            type:'mult',
            payload:amount2
        })

    }
    
}

export const divideMoney=(amount2)=>{
    return (dispatch)=>{
        dispatch({
            type:'divide',
            payload:amount2
        })

    }
    
}