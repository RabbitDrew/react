import type { IState } from "../type/type";
type SetState = (state: object) => void;

export class PaginationController {
    state: IState
    setState: SetState
    constructor(_state: IState, _setState: SetState) {
        this.state = _state
        this.setState = _setState
    }


    public prev = (): void => {
        if (this.state.page <= 1) {
            this.setState({page: 1})
        } else {
            this.setState({page: this.state.page - 1})
        }
    }


    public next = (): void => {
        if (this.state.totalPages &&
            this.state.page >= this.state.totalPages) {
            this.setState({page: this.state.totalPages})
        } else {
            this.setState({page: this.state.page + 1})
        }
    }

    public firstIndex = () => {

    }

    public lastIndex = () => {
        
    }
}

