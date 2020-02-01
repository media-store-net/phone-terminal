import React, {ChangeEvent, Component, FormEvent} from "react";
import Router from "next/router";

class Form extends Component {

    constructor(props, state) {
        super(props, state);
        // Eventualy props not needed & set eventEmitter?
    }

    state = {
        phone: '',
        amount: '',
        validPhone: false,
        validAmount: false,
        isLoading: false
    };

    validatePhone(phone: string): boolean {
        //TODO validate number & setState
        console.log('validate phone');
        const reg = /[0-9\\s()/+-]/;
        if (+phone.length > 9 && phone.match(reg)) {
            this.setState({phone});
            this.setState({validPhone: true});
            return true;
        }
        this.setState({validPhone: false});
        return false;
    }

    validateAmount(amount: string): boolean {
        //TODO validate sum & setState
        console.log('validate amount');
        if (+amount > 0 && +amount <= 1000) {
            this.setState({amount});
            this.setState({validAmount: true});
            return true;
        }
        this.setState({validAmount: false});
        return false;
    }

    checkValidationRules(): boolean {
        return this.state.validPhone && this.state.validAmount;
    }

    submitForm = (event: FormEvent<any>) => {
        event.preventDefault();
        console.log("submit was fired");
        // Validation
        if (this.checkValidationRules()) {
            this.setState({isLoading: true});
            console.log('Serverabfrage...');
            //TODO Send data to server...
            // after response
            // this.setState({isLoading: false});
        } else {
            this.setState({isLoading: true});
            if (confirm("Can't send data to server! Try again?")) {
                // Send data again
            } else {
                Router.push("/");
            }
        }
    };

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <div className="form-group">
                    <label htmlFor="phone">Telephon-Number</label>
                    {(!this.state.validPhone && this.state.phone !== '') &&
										<small className="text-danger"> PhoneNumber invalid</small>}
                    <input type="phone" className="form-control" id="phone" aria-describedby="phoneHelp"
                           onChange={(event: ChangeEvent<HTMLInputElement>) => {
                               const phone: string = event.target.value;
                               this.setState({phone: phone});
                               this.validatePhone(phone);
                           }
                           }
                           value={this.state.phone}/>
                    <small id="phoneHelp" className="form-text text-muted">We'll never share your number with anyone
                        else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    {(!this.state.validAmount && this.state.amount !== '') &&
										<small className="text-danger"> Amount should be between 0 & 1000</small>}
                    <input type="number" className="form-control" id="amount"
                           onChange={(event: ChangeEvent<HTMLInputElement>) => {
                               const num: string = event.target.value;
                               this.setState({amount: num});
                               this.validateAmount(event.target.value);
                           }}
                           value={this.state.amount}/>
                </div>
                <div className="offset-md-2 col-md-8">
                    <button className="btn btn-outline-primary btn-block">Pay</button>
                </div>
            </form>
        );
    };

}

export default Form;
