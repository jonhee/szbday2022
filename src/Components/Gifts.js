import React from 'react'
import "../styles/Gifts.css"

const Gifts = () => {
    return (
        <div>
            <div class = "giftBox">
                <div class = "inputBox">
                <form classname = 'add-form'>
                    <div className = 'form-control'>
                        <label>Name</label>
                        <input type = 'text' placeholder = 'Type Name'/>
                        <div/>
                        <label>URL</label>
                        <input type = 'text' placeholder = 'Type URL'/>
                    </div>
                    <input className = 'btn btn-block' type = 'submit' value = 'Add Task'></input>
                </form>
                </div>
                <div class = "Shopping List">
                    Items
                </div>
            </div>
        </div>
    )
}

export default Gifts
