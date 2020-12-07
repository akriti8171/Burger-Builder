import React,{Component} from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Auxi from '../Auxi/Auxi'
const withErrorHandler=(WrappedComponent,axios)=>{
    return class extends Component{
        state={
            error:null
        }
        componentWillMount(){
            this.reqinterceptors=axios.interceptors.request.use(req=>{
                this.setState({
                    error:null
                })
                return req
            })
            this.resinterceptors=axios.interceptors.response.use(res=>res,errors=>{
                this.setState({error:errors})
            })
        }

        componentWillUnmount(){
            console.log("Component Unmount",this.reqinterceptors,this.resinterceptors)
            axios.interceptors.request.eject(this.reqinterceptors)
            axios.interceptors.response.eject(this.resinterceptors)
        }
        errorConfirmedHandler=()=>{
            this.setState({
                error:null
            })
        }
        render(){
        return (
        <Auxi >
            <Modal show={this.state.error} clicked={this.errorConfirmedHandler}>
                {this.state.error?this.state.error.message:null}
            </Modal>
            <WrappedComponent {...this.props}/>
        </Auxi>)
        }
    }
}

export default withErrorHandler