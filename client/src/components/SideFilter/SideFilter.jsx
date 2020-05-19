import React, { Component } from 'react'


class SideFilter extends Component {

  boxIsChecked = (e) => {
    const label = e.target.name
    const checked = e.target.checked
    this.props.onClickFilter(this.props.name, checked, label)
  }



  render() {
    return (
      <div>


        <h3>{this.props.title}</h3>

        {this.props.choices ? this.props.choices.map(choice => (
          <>
            <input onChange={this.boxIsChecked} type="checkbox" name={choice}></input>
            <label for={choice}>{choice}</label>
          </>
        ))
          : null
        }

      </div>
    )
  }
}


export default SideFilter