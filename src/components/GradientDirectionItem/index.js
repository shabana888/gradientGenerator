// Write your code here
import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirectionDetails, isActive, clickGradientDirectionItem} = props
  const {displayText, value} = gradientDirectionDetails
  const onClickGradientDirectionItem = () => {
    clickGradientDirectionItem(value)
  }

  return (
    <ListItem>
      <DirectionButton
        isActive={isActive}
        type="button"
        onClick={onClickGradientDirectionItem}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem

// import {Button} from './styledComponents'

// const GradientDirectionItem = props => {
//   const {details, changeDirection, isActive} = props
//   const {value, displayText, directionId} = details

//   const clickedDirection = () => {
//     changeDirection(value)
//   }

//   return (
//     <li key={directionId}>
//       <Button type="button" onClick={clickedDirection} isActive={isActive}>
//         {displayText}
//       </Button>
//     </li>
//   )
// }

// export default GradientDirectionItem
