import Input from "./Input"
import Data from '../utill/data'

function UserInput({label, onEdit}){

    return <section id="user-input">
        <div className="input-group">
            <div>
                <Input { ...Data[0] } value={label.initialInvestment} onEdit={onEdit} />
                <Input { ...Data[1] } value={label.annualInvestment} onEdit={onEdit} />
            </div>

            <div> 
                <Input { ...Data[2] } value={label.expectedReturn} onEdit={onEdit} />
                <Input { ...Data[3] } value={label.duration} onEdit={onEdit} />               
            </div>
        </div>
    </section>

}

export default UserInput
