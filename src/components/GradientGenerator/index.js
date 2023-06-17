// Write your code here
import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientGeneratorContainer,
  ResponsiveContainer,
  Heading,
  DirectionsDescription,
  GradientDirectionList,
  ColorsPickersDescription,
  ColorPickerContainer,
  CustomInputAndColorContainer,
  ColorValue,
  CustomInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onGenerate = () => {
    const {fromColorInput, toColorInput, activeGradientDirection} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${fromColorInput}, ${toColorInput}`,
    })
  }

  onChangeToColor = event => {
    this.setState({toColorInput: event.target.value})
  }

  onChangeFromColor = event => {
    this.setState({fromColorInput: event.target.value})
  }

  clickGradientDirectionItem = direction => {
    this.setState({activeGradientDirection: direction})
  }

  render() {
    const {
      activeGradientDirection,
      fromColorInput,
      toColorInput,
      gradientValue,
    } = this.state

    return (
      <GradientGeneratorContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <ResponsiveContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <DirectionsDescription>Choose Direction</DirectionsDescription>
          <GradientDirectionList>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                gradientDirectionDetails={eachDirection}
                clickGradientDirectionItem={this.clickGradientDirectionItem}
                isActive={activeGradientDirection === eachDirection.value}
              />
            ))}
          </GradientDirectionList>
          <ColorsPickersDescription>Pick the Colors</ColorsPickersDescription>
          <ColorPickerContainer>
            <CustomInputAndColorContainer>
              <ColorValue>{fromColorInput}</ColorValue>
              <CustomInput
                onChange={this.onChangeFromColor}
                value={fromColorInput}
                type="color"
              />
            </CustomInputAndColorContainer>
            <CustomInputAndColorContainer>
              <ColorValue>{toColorInput}</ColorValue>
              <CustomInput
                onChange={this.onChangeToColor}
                value={toColorInput}
                type="color"
              />
            </CustomInputAndColorContainer>
          </ColorPickerContainer>
          <GenerateButton onClick={this.onGenerate}>Generate</GenerateButton>
        </ResponsiveContainer>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator

// import {Component} from 'react'

// import GradientDirectionItem from '../GradientDirectionItem'
// import {Background} from './styledComponents'

// const gradientDirectionsList = [
//   {directionId: 'TOP', value: 'top', displayText: 'Top'},
//   {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
//   {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
//   {directionId: 'LEFT', value: 'left', displayText: 'Left'},
// ]
// Write your code here

// class GradientGenerator extends Component {
//   state = {
//     direction: gradientDirectionsList[0].value,
//     firstColor: '#8ae323',
//     secondColor: '#014f7b',
//     bgColor: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
//   }

//   changeDirection = value => {
//     this.setState({direction: value})
//   }

//   changeFirst = event => {
//     this.setState({firstColor: event.target.value})
//   }

//   changeSecond = event => {
//     this.setState({secondColor: event.target.value})
//   }

//   onRenderBgColor = () => {
//     const {firstColor, secondColor, direction} = this.state
//     this.setState({bgColor: `to ${direction}, ${firstColor}, ${secondColor}`})
//   }

//   render() {
//     const {direction, firstColor, secondColor, bgColor} = this.state

//     return (
//       <Background bgColor={bgColor} data-testid="gradientGenerator">
//         <div>
//           <h1>Generate a CSS Color Gradient</h1>
//           <p>Choose direction</p>
//           <ul>
//             {gradientDirectionsList.map(eachItem => (
//               <GradientDirectionItem
//                 key={eachItem.directionId}
//                 details={eachItem}
//                 changeDirection={this.changeDirection}
//                 isActive={direction === eachItem.value}
//               />
//             ))}
//           </ul>
//           <p>Pick the Colors</p>
//           <p>{firstColor}</p>
//           <p>{secondColor}</p>
//           <input type="color" value={firstColor} onChange={this.changeFirst} />
//           <input
//             type="color"
//             value={secondColor}
//             onChange={this.changeSecond}
//           />
//           <button type="button" onClick={this.onRenderBgColor}>
//             Generate
//           </button>
//         </div>
//       </Background>
//     )
//   }
// }

// export default GradientGenerator
