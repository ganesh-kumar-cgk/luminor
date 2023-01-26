import React from 'react'
import './style.scss'

class CardSO extends React.PureComponent {
  render() {
    const {nodeData} = this.props
    return (
      <div className="card-so-wrapper">
        {nodeData.name}
      </div>
    )}
}
export default CardSO