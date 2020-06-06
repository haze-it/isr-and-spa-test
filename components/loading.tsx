import React, { FormEvent } from 'react';

interface LoadingStateType {
  email: string,
  password: string,
  isLoading: boolean,
}

interface FormInputData {
}

export default class extends React.Component<any, LoadingStateType> {
  constructor(props: any) {
    super(props)
    this.state = { email: "", password: "", isLoading: true }

    this.handleFormChange = this.handleFormChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  render () {
    return (
      <>
        {
          !this.state.isLoading ? <p>ローディングdone</p> : <p>ローディング中</p>
        }
        <form onSubmit={this.handleFormSubmit} method='post'>
          <label>
            email:
            <input type="email" name="email" placeholder='xxxxx@xxxxxx.xxx' onChange={this.handleFormChange} />
          </label>
          <label>
            password:
            <input type="password" name="password" placeholder='********' onChange={this.handleFormChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </>
    )
  }

  handleFormChange(e: any) {
    if (e.target.name == 'email') this.setState({email: e.target.value})
    if (e.target.name == 'password') this.setState({password: e.target.value})
  }

  handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      alert(`success!`)
    } catch (error) {
      alert(error)
    }
  }

  async componentDidMount() {
    const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));
    await sleep(3000);
    this.setState({isLoading: false})
  }
}
